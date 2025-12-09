# Configuration Strapi pour Top 5 Téléphones

## 🚀 Installation et Configuration

### 1. Structure du Projet
```
Top 5 téléphones/
├── src/                    # Frontend Next.js
├── backend/               # Backend Strapi CMS
│   ├── src/api/phone/    # API Phone
│   ├── config/           # Configuration Strapi
│   └── .env              # Variables d'environnement
└── package.json          # Scripts de développement
```

### 2. Démarrage du Projet

#### Option A : Démarrage complet (Next.js + Strapi)
```bash
npm run dev:full
```

#### Option B : Démarrage séparé
```bash
# Terminal 1 - Frontend Next.js
npm run dev

# Terminal 2 - Backend Strapi
npm run dev:strapi
```

### 3. Accès aux Services

- **Frontend Next.js** : http://localhost:3000
- **Backend Strapi** : http://localhost:1337
- **Admin Strapi** : http://localhost:1337/admin

### 4. Configuration Strapi

#### Variables d'environnement
Créez un fichier `.env` dans le dossier `backend/` :

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys-here
API_TOKEN_SALT=your-api-token-salt-here
ADMIN_JWT_SECRET=your-admin-jwt-secret-here
JWT_SECRET=your-jwt-secret-here

# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
```

#### Première configuration
1. Accédez à http://localhost:1337/admin
2. Créez votre compte administrateur
3. Créez un token API dans Settings > API Tokens
4. Configurez les permissions pour l'API Phone

### 5. API Endpoints

#### Endpoints disponibles
- `GET /api/phones` - Tous les téléphones
- `GET /api/phones/active` - Téléphones actifs
- `GET /api/phones/top5` - Top 5 téléphones
- `GET /api/phones/category/:category` - Par catégorie
- `GET /api/phones/:id` - Téléphone spécifique

#### Exemple d'utilisation
```javascript
import { strapiService } from '@/lib/strapi';

// Récupérer les top 5
const top5 = await strapiService.getTop5Phones();

// Récupérer par catégorie
const budget = await strapiService.getPhonesByCategory('budget');
```

### 6. Types de Contenu

#### Phone (Téléphone)
- **name** : Nom du téléphone
- **slug** : URL unique
- **brand** : Marque
- **price** : Prix
- **description** : Description riche
- **specifications** : Spécifications techniques (JSON)
- **rating** : Note (0-5)
- **pros** : Avantages (JSON)
- **cons** : Inconvénients (JSON)
- **category** : budget | mid-range | premium
- **releaseDate** : Date de sortie
- **isActive** : Actif/inactif
- **images** : Images multiples

### 7. Déploiement Strapi Cloud

#### Configuration pour Strapi Cloud
1. Créez un projet sur Strapi Cloud
2. Configurez les variables d'environnement
3. Déployez avec `npm run strapi:build`

#### Variables d'environnement pour production
```env
DATABASE_CLIENT=postgres
DATABASE_URL=your-postgres-url
CLOUD_NAME=your-cloud-name
CLOUD_PROJECT_ID=your-project-id
```

### 8. Intégration Frontend

#### Service Strapi
Le service `src/lib/strapi.ts` gère toutes les interactions avec l'API Strapi.

#### Variables d'environnement Frontend
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337  # Développement
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-cloud.com  # Production
```

### 9. Migration des Données

Pour migrer les données existantes vers Strapi :

1. Exportez les données depuis `src/data/phones.ts`
2. Importez dans Strapi via l'interface admin
3. Configurez les images et médias
4. Testez les endpoints API

### 10. Sécurité

#### CORS Configuration
Le middleware CORS est configuré pour permettre l'accès depuis :
- http://localhost:3000 (développement)
- https://your-domain.com (production)

#### Permissions API
Configurez les permissions dans Strapi Admin :
- Settings > Users & Permissions > Roles
- Configurez les permissions pour l'API Phone

## 🎯 Prochaines Étapes

1. **Configurer Strapi Admin** : Créer le compte admin
2. **Importer les données** : Migrer depuis `src/data/phones.ts`
3. **Tester l'API** : Vérifier les endpoints
4. **Mettre à jour le frontend** : Utiliser le service Strapi
5. **Déployer** : Configurer pour la production 