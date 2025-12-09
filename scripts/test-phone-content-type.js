const axios = require('axios');

const STRAPI_URL = 'http://127.0.0.1:1337';

async function testPhoneContentType() {
  console.log('🧪 Test rapide du Content Type Phone...\n');

  try {
    // 1. Test de l'endpoint GET /api/phones
    console.log('1️⃣ Test GET /api/phones...');
    const getResponse = await axios.get(`${STRAPI_URL}/api/phones`);
    console.log('✅ GET /api/phones fonctionne');
    console.log(`   Réponse: ${JSON.stringify(getResponse.data).substring(0, 100)}...\n`);

    // 2. Test de l'endpoint POST /api/phones (création)
    console.log('2️⃣ Test POST /api/phones (création)...');
    const testPhone = {
      data: {
        name: "Test Phone",
        brand: "Test Brand",
        price: 299.99,
        description: "Téléphone de test",
        specifications: { ram: "4GB", storage: "64GB" },
        rating: 4.5,
        pros: ["Bon rapport qualité-prix", "Batterie durable"],
        cons: ["Écran moyen"],
        category: "budget",
        releaseDate: "2024-01-01",
        isActive: true
      }
    };

    const postResponse = await axios.post(`${STRAPI_URL}/api/phones`, testPhone);
    console.log('✅ POST /api/phones fonctionne');
    console.log(`   Téléphone créé: ${postResponse.data.data.attributes.name}\n`);

    // 3. Test de l'upload d'image
    console.log('3️⃣ Test upload d\'image...');
    const FormData = require('form-data');
    const fs = require('fs');
    const path = require('path');

    // Créer une image de test simple
    const testImagePath = path.join(__dirname, 'test-image.png');
    const testImageContent = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==', 'base64');
    fs.writeFileSync(testImagePath, testImageContent);

    const form = new FormData();
    form.append('files', fs.createReadStream(testImagePath));

    const uploadResponse = await axios.post(`${STRAPI_URL}/api/upload`, form, {
      headers: form.getHeaders(),
    });
    console.log('✅ Upload d\'image fonctionne');
    console.log(`   Image uploadée: ID ${uploadResponse.data[0].id}\n`);

    // 4. Test des endpoints personnalisés
    console.log('4️⃣ Test des endpoints personnalisés...');
    
    // Test /api/phones/active
    try {
      const activeResponse = await axios.get(`${STRAPI_URL}/api/phones/active`);
      console.log('✅ /api/phones/active fonctionne');
    } catch (error) {
      console.log('❌ /api/phones/active - Erreur 404 (normal si pas d\'endpoint personnalisé)');
    }

    // Test /api/phones/top5
    try {
      const top5Response = await axios.get(`${STRAPI_URL}/api/phones/top5`);
      console.log('✅ /api/phones/top5 fonctionne');
    } catch (error) {
      console.log('❌ /api/phones/top5 - Erreur 404 (normal si pas d\'endpoint personnalisé)');
    }

    // Test /api/phones/category/budget
    try {
      const categoryResponse = await axios.get(`${STRAPI_URL}/api/phones/category/budget`);
      console.log('✅ /api/phones/category/:category fonctionne');
    } catch (error) {
      console.log('❌ /api/phones/category/:category - Erreur 404 (normal si pas d\'endpoint personnalisé)');
    }

    // Nettoyer l'image de test
    fs.unlinkSync(testImagePath);

    console.log('\n🎉 Tous les tests de base sont passés !');
    console.log('✅ Le Content Type Phone est prêt pour la migration.');
    console.log('\n💡 Prochaines étapes :');
    console.log('   • node scripts/migrate-to-strapi-simple.js (sans images)');
    console.log('   • node scripts/migrate-to-strapi.js (avec images)');

  } catch (error) {
    console.error('\n❌ Erreur lors du test:', error.response?.data || error.message);
    
    if (error.response?.status === 404) {
      console.log('\n💡 Le Content Type Phone n\'existe pas encore.');
      console.log('   Créez-le via Strapi Admin : http://localhost:1337/admin');
      console.log('   Content-Type Builder → Create new collection type → Phone');
    } else if (error.response?.status === 403) {
      console.log('\n💡 Problème de permissions.');
      console.log('   Configurez les permissions dans Strapi Admin :');
      console.log('   Settings → Users & Permissions → Roles → Public');
      console.log('   Phone : find, findOne, create, update, delete');
      console.log('   Upload : upload, uploadFiles');
    }
  }
}

testPhoneContentType(); 