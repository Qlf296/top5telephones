// scripts/test-strapi-config.js
const axios = require('axios');

const STRAPI_URL = 'http://127.0.0.1:1337';

console.log('🧪 Test de configuration Strapi...\n');

async function testStrapiConnection() {
  try {
    console.log('1️⃣ Test de connexion à Strapi...');
    const response = await axios.get(`${STRAPI_URL}/api/phones/active`);
    console.log('✅ Connexion réussie');
    console.log(`   Réponse: ${JSON.stringify(response.data)}`);
    return true;
  } catch (error) {
    console.log('❌ Erreur de connexion');
    console.log(`   Erreur: ${error.message}`);
    return false;
  }
}

async function testPhonePermissions() {
  try {
    console.log('\n2️⃣ Test des permissions Phone (lecture)...');
    const response = await axios.get(`${STRAPI_URL}/api/phones`);
    console.log('✅ Permissions de lecture OK');
    console.log(`   Nombre de téléphones: ${response.data.data?.length || 0}`);
    return true;
  } catch (error) {
    console.log('❌ Erreur permissions de lecture');
    console.log(`   Erreur: ${error.response?.status} - ${error.response?.data?.error?.message || error.message}`);
    return false;
  }
}

async function testPhoneCreation() {
  try {
    console.log('\n3️⃣ Test des permissions Phone (création)...');
    const testPhone = {
      data: {
        name: "Test Phone - " + Date.now(),
        brand: "Test",
        price: 100,
        slug: "test-phone-" + Date.now(),
        description: "Téléphone de test",
        specifications: {
          screen: "6.0\" Test",
          processor: "Test CPU",
          ram: "4GB",
          storage: "64GB",
          camera: "12MP",
          battery: "3000mAh",
          os: "Test OS"
        },
        pros: ["Test positif"],
        cons: ["Test négatif"],
        rating: 4.0,
        category: "budget",
        releaseDate: "2023-01-01",
        isActive: true
      }
    };

    const response = await axios.post(`${STRAPI_URL}/api/phones`, testPhone, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    console.log('✅ Permissions de création OK');
    console.log(`   Téléphone créé: ${response.data.data.attributes.name} (ID: ${response.data.data.id})`);
    
    // Supprimer le téléphone de test
    try {
      await axios.delete(`${STRAPI_URL}/api/phones/${response.data.data.id}`);
      console.log('✅ Téléphone de test supprimé');
    } catch (deleteError) {
      console.log('⚠️  Impossible de supprimer le téléphone de test');
    }
    
    return true;
  } catch (error) {
    console.log('❌ Erreur permissions de création');
    if (error.response?.status === 403) {
      console.log('   💡 Configurez les permissions Phone dans Strapi Admin :');
      console.log('      Settings → Users & Permissions → Roles → Public → Phone → create');
    } else if (error.response?.status === 405) {
      console.log('   💡 Méthode non autorisée - vérifiez les permissions');
    } else {
      console.log(`   Erreur: ${error.response?.status} - ${error.response?.data?.error?.message || error.message}`);
    }
    return false;
  }
}

async function testUploadPermissions() {
  try {
    console.log('\n4️⃣ Test des permissions Upload...');
    
    // Créer un fichier de test simple
    const FormData = require('form-data');
    const fs = require('fs');
    const path = require('path');
    
    const testImagePath = path.join(__dirname, 'test-image.txt');
    fs.writeFileSync(testImagePath, 'Test image content');
    
    const form = new FormData();
    form.append('files', fs.createReadStream(testImagePath));
    
    const response = await axios.post(`${STRAPI_URL}/api/upload`, form, {
      headers: form.getHeaders(),
    });
    
    console.log('✅ Permissions Upload OK');
    console.log(`   Image uploadée: ${response.data[0].id}`);
    
    // Nettoyer le fichier de test
    fs.unlinkSync(testImagePath);
    
    return true;
  } catch (error) {
    console.log('❌ Erreur permissions Upload');
    if (error.response?.status === 403) {
      console.log('   💡 Configurez les permissions Upload dans Strapi Admin :');
      console.log('      Settings → Users & Permissions → Roles → Public → Upload → uploadFiles');
    } else {
      console.log(`   Erreur: ${error.response?.status} - ${error.response?.data?.error?.message || error.message}`);
    }
    return false;
  }
}

async function testEndpoints() {
  console.log('\n5️⃣ Test des endpoints personnalisés...');
  
  const endpoints = [
    '/api/phones/active',
    '/api/phones/top5',
    '/api/phones/category/budget'
  ];
  
  for (const endpoint of endpoints) {
    try {
      const response = await axios.get(`${STRAPI_URL}${endpoint}`);
      console.log(`✅ ${endpoint} - OK`);
    } catch (error) {
      console.log(`❌ ${endpoint} - Erreur ${error.response?.status}`);
    }
  }
}

async function runAllTests() {
  console.log('🚀 Démarrage des tests de configuration Strapi...\n');
  
  const results = {
    connection: await testStrapiConnection(),
    readPermissions: await testPhonePermissions(),
    createPermissions: await testPhoneCreation(),
    uploadPermissions: await testUploadPermissions()
  };
  
  await testEndpoints();
  
  console.log('\n📊 Résumé des tests :');
  console.log(`   🔗 Connexion: ${results.connection ? '✅' : '❌'}`);
  console.log(`   📖 Lecture: ${results.readPermissions ? '✅' : '❌'}`);
  console.log(`   ✏️  Création: ${results.createPermissions ? '✅' : '❌'}`);
  console.log(`   📤 Upload: ${results.uploadPermissions ? '✅' : '❌'}`);
  
  if (results.connection && results.readPermissions && results.createPermissions) {
    console.log('\n🎉 Configuration OK ! Vous pouvez maintenant exécuter les scripts de migration.');
    console.log('\n📝 Commandes disponibles :');
    console.log('   node scripts/migrate-to-strapi-simple.js');
    console.log('   node scripts/migrate-to-strapi.js');
  } else {
    console.log('\n⚠️  Configuration incomplète. Vérifiez les permissions dans Strapi Admin.');
    console.log('\n🔧 Configuration requise :');
    console.log('   1. Settings → Users & Permissions → Roles → Public');
    console.log('   2. Phone : find, findOne, create, update, delete');
    console.log('   3. Upload : upload, uploadFiles');
    console.log('   4. Save et redémarrage');
  }
}

// Exécuter tous les tests
runAllTests().catch(console.error); 