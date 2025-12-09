# Migration vers Strapi

## Installation

```bash
npm install --save-dev axios form-data
```

## Configuration Strapi (obligatoire avant migration)

1. **Aller dans Strapi Admin** : http://localhost:1337/admin
2. **Menu Settings** > **Users & Permissions** > **Roles** > **Public**
3. **Cocher dans Phone** : create, find, findOne
4. **Cocher dans Upload** : upload, uploadFiles
5. **Sauvegarder**

## Utilisation

### Migration simple (sans images)
```bash
node scripts/migrate-to-strapi-simple.js
```

### Migration complète (avec upload images)
```bash
node scripts/migrate-to-strapi.js
```

## Notes

- Le script upload les images depuis `public/images/`
- Assurez-vous que les chemins d'image dans `phones.ts` sont corrects
- Utilisez IPv4 (127.0.0.1) pour éviter des problèmes de connexion
- En cas d'erreur 403 ou 405, revérifiez les permissions dans Strapi

## Structure des scripts

```
scripts/
├── migrate-to-strapi.js          # Migration complète avec images
├── migrate-to-strapi-simple.js   # Migration simplifiée sans images
└── README.md                     # Ce fichier
```

## Fonctionnalités

### Script complet (`migrate-to-strapi.js`)
- ✅ Import des données depuis `src/data/phones.ts`
- ✅ Upload automatique des images depuis `public/images/`
- ✅ Gestion des erreurs de permissions
- ✅ Messages d'erreur explicites

### Script simplifié (`migrate-to-strapi-simple.js`)
- ✅ Import des données uniquement
- ✅ Pas d'upload d'images
- ✅ Gestion des erreurs simplifiée
- ✅ Plus rapide à exécuter

## Dépannage

### Erreur "Cannot find module"
- Vérifiez que le chemin vers `src/data/phones.ts` est correct
- Assurez-vous que le fichier existe

### Erreur 403/405
- Configurez les permissions dans Strapi Admin
- Redémarrez Strapi après configuration

### Images non trouvées
- Vérifiez que les images existent dans `public/images/`
- Les chemins sont relatifs au dossier `public/`

### Connexion refusée
- Vérifiez que Strapi est démarré sur le port 1337
- Testez avec : `curl http://127.0.0.1:1337/api/phones/active` 