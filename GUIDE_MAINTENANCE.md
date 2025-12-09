# 🔧 Guide de Maintenance - Top 5 Téléphones

## 📋 Maintenance Régulière

### Hebdomadaire

- [ ] Vérifier les Core Web Vitals dans Vercel Analytics
- [ ] Vérifier les erreurs dans Google Search Console
- [ ] Vérifier les performances dans Lighthouse
- [ ] Vérifier que toutes les pages sont accessibles

### Mensuelle

- [ ] Mettre à jour les prix des téléphones
- [ ] Vérifier les liens d'affiliation
- [ ] Analyser les données Google Analytics
- [ ] Vérifier les nouvelles sorties de smartphones
- [ ] Mettre à jour le Top 5 si nécessaire

### Trimestrielle

- [ ] Audit SEO complet
- [ ] Audit de performance
- [ ] Mise à jour des dépendances
- [ ] Vérification de sécurité
- [ ] Backup de la base de données (si applicable)

---

## 🔄 Mise à Jour des Données

### Mettre à jour les prix

1. Ouvrir `src/data/phones.ts`
2. Mettre à jour les prix dans l'objet `phones`
3. Mettre à jour `lastUpdated` avec la date actuelle
4. Commit et push

### Ajouter un nouveau téléphone

1. Ajouter l'objet dans `src/data/phones.ts`
2. Ajouter les images dans `/public/images/real/[nom-du-telephone]/`
3. Le sitemap sera mis à jour automatiquement
4. Tester la fiche produit : `/fiche/[slug]`

### Mettre à jour le Top 5

1. Modifier la fonction `getTop5Phones()` dans `src/data/phones.ts`
2. S'assurer que les téléphones sont triés correctement
3. Mettre à jour la page d'accueil si nécessaire

---

## 🔍 Monitoring et Analytics

### Vercel Analytics

**Vérifier régulièrement** :
- Core Web Vitals (LCP, CLS, FID)
- Pages les plus visitées
- Taux de rebond
- Durée moyenne des sessions

**Accès** : Vercel Dashboard > Projet > Analytics

### Google Search Console

**Vérifier régulièrement** :
- Requêtes de recherche
- Pages indexées
- Erreurs d'indexation
- Core Web Vitals

**Accès** : [search.google.com/search-console](https://search.google.com/search-console)

### Google Analytics

**Vérifier régulièrement** :
- Trafic
- Comportement des utilisateurs
- Conversions
- Événements Web Vitals

---

## 🐛 Résolution de Problèmes

### Problème : Build échoue

```bash
# Vérifier les erreurs
npm run build

# Vérifier TypeScript
npm run lint

# Nettoyer et rebuilder
rm -rf .next
npm run build
```

### Problème : Images ne se chargent pas

1. Vérifier que les images existent dans `/public/images/`
2. Vérifier les chemins dans le code
3. Vérifier la configuration `next.config.js`

### Problème : SEO ne fonctionne pas

1. Vérifier les Structured Data avec [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Vérifier le sitemap : `/sitemap.xml`
3. Vérifier les metadata dans chaque page

### Problème : Performance dégradée

1. Analyser avec Lighthouse
2. Vérifier les Core Web Vitals dans Vercel Analytics
3. Vérifier les imports dynamiques
4. Vérifier le cache des assets

---

## 🔄 Mise à Jour des Dépendances

### Vérifier les mises à jour

```bash
npm outdated
```

### Mettre à jour les dépendances

```bash
# Mise à jour mineure
npm update

# Mise à jour majeure (attention aux breaking changes)
npm install package@latest
```

### Après mise à jour

1. Tester le build : `npm run build`
2. Tester en local : `npm run dev`
3. Vérifier les fonctionnalités
4. Commit et push

---

## 🧪 Tests Réguliers

### Tests à effectuer régulièrement

```bash
# Test d'accessibilité
npm run test:a11y

# Test des liens
npm run test:links

# Tests complets
npm run test:all

# Validation du build
npm run validate

# Vérification pré-déploiement
npm run pre-deploy
```

---

## 📊 Métriques à Surveiller

### Performance

- **LCP** : < 2.5s ✅
- **CLS** : < 0.1 ✅
- **FID** : < 100ms ✅
- **FCP** : < 1.8s ✅

### SEO

- **Pages indexées** : Toutes les pages importantes
- **Erreurs d'indexation** : 0
- **Structured Data** : Tous valides
- **Sitemap** : À jour

### Utilisateurs

- **Taux de rebond** : < 50%
- **Durée moyenne** : > 2 min
- **Pages par session** : > 2

---

## 🔐 Sécurité

### Vérifications régulières

- [ ] Mettre à jour les dépendances de sécurité
- [ ] Vérifier les headers de sécurité
- [ ] Vérifier les variables d'environnement
- [ ] Vérifier les permissions des fichiers

### Commandes utiles

```bash
# Vérifier les vulnérabilités
npm audit

# Corriger automatiquement
npm audit fix

# Vérifier les dépendances obsolètes
npm outdated
```

---

## 📝 Changelog

### Comment documenter les changements

1. Créer un fichier `CHANGELOG.md` (optionnel)
2. Documenter chaque mise à jour importante
3. Inclure :
   - Date
   - Type de changement (Feature, Fix, Performance, etc.)
   - Description

### Exemple

```markdown
## [1.1.0] - 2024-01-20

### Added
- Nouveau téléphone : Samsung Galaxy A15

### Changed
- Mise à jour des prix des téléphones
- Amélioration des performances

### Fixed
- Correction du bug dans le comparateur
```

---

## 🚀 Déploiement

### Processus de déploiement

1. **Développement local**
   ```bash
   npm run dev
   ```

2. **Tests**
   ```bash
   npm run test:all
   npm run validate
   npm run pre-deploy
   ```

3. **Build**
   ```bash
   npm run build
   ```

4. **Commit et Push**
   ```bash
   git add .
   git commit -m "Description des changements"
   git push origin main
   ```

5. **Vercel déploie automatiquement**

6. **Vérification post-déploiement**
   - Vérifier que le site fonctionne
   - Vérifier les Core Web Vitals
   - Vérifier les erreurs dans la console

---

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Vercel](https://vercel.com/docs)
- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## ✅ Checklist de Maintenance Mensuelle

- [ ] Vérifier les Core Web Vitals
- [ ] Mettre à jour les prix
- [ ] Vérifier les liens d'affiliation
- [ ] Analyser Google Analytics
- [ ] Vérifier Google Search Console
- [ ] Tester les fonctionnalités principales
- [ ] Vérifier les erreurs
- [ ] Mettre à jour les dépendances si nécessaire
- [ ] Backup (si applicable)

---

**🎯 Une maintenance régulière assure les meilleures performances et le meilleur SEO !**

