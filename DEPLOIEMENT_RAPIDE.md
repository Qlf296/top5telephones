# ⚡ Déploiement Rapide - Top 5 Téléphones

## 🚀 Déploiement en 5 Minutes

### Étape 1 : Vérification Pré-Déploiement (1 min)

```bash
npm run pre-deploy
```

Vérifie que tout est prêt pour le déploiement.

### Étape 2 : Build de Production (2 min)

```bash
npm run build
```

Génère le build de production optimisé.

### Étape 3 : Déploiement sur Vercel (2 min)

#### Option A : Via GitHub (Recommandé)

1. **Pousser le code sur GitHub**
   ```bash
   git add .
   git commit -m "Ready for production"
   git push origin main
   ```

2. **Connecter à Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - Cliquer sur "Add New Project"
   - Importer le repository GitHub
   - Vercel détecte automatiquement Next.js

3. **Configurer les variables d'environnement**
   - Dans Vercel Dashboard > Settings > Environment Variables
   - Ajouter :
     ```
     NEXT_PUBLIC_SITE_URL=https://top5telephones.fr
     NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX (si utilisé)
     NEXT_PUBLIC_CLARITY_ID=YOUR_CLARITY_ID (si utilisé)
     NEXT_PUBLIC_GOOGLE_VERIFICATION=your-code (si utilisé)
     ```

4. **Déployer**
   - Cliquer sur "Deploy"
   - Attendre la fin du build (2-3 min)

#### Option B : Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Étape 4 : Configuration du Domaine (Optionnel)

1. Aller dans Vercel Dashboard > Settings > Domains
2. Ajouter votre domaine : `top5telephones.fr`
3. Suivre les instructions DNS

---

## ✅ Vérifications Post-Déploiement

### 1. Test des Pages (2 min)

- [ ] `https://top5telephones.fr` → Page d'accueil
- [ ] `https://top5telephones.fr/comparateur` → Comparateur
- [ ] `https://top5telephones.fr/quiz` → Quiz
- [ ] `https://top5telephones.fr/fiche/samsung-galaxy-a14` → Fiche produit
- [ ] `https://top5telephones.fr/sitemap.xml` → Sitemap
- [ ] `https://top5telephones.fr/robots.txt` → Robots.txt

### 2. Test SEO (1 min)

- [ ] Tester avec [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Tester avec [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

### 3. Test Performance (1 min)

- [ ] Ouvrir Chrome DevTools > Lighthouse
- [ ] Lancer un audit complet
- [ ] Vérifier que Performance > 90

---

## 🔧 Configuration Post-Déploiement

### Google Search Console

1. Suivre `GUIDE_GOOGLE_SEARCH_CONSOLE.md`
2. Ajouter la propriété
3. Soumettre le sitemap

### Vercel Analytics

1. Suivre `GUIDE_VERCEL_ANALYTICS.md`
2. Activer Web Analytics
3. Vérifier Speed Insights

---

## 🎯 Checklist Complète

- [ ] Code poussé sur GitHub
- [ ] Projet connecté à Vercel
- [ ] Variables d'environnement configurées
- [ ] Déploiement réussi
- [ ] Toutes les pages accessibles
- [ ] SEO validé
- [ ] Performance validée
- [ ] Google Search Console configuré
- [ ] Vercel Analytics activé

---

## 🐛 Résolution de Problèmes

### Build échoue

```bash
# Vérifier localement
npm run build

# Vérifier les logs dans Vercel Dashboard
```

### Pages 404

- Vérifier que toutes les pages sont dans `src/app/`
- Vérifier les routes dans `sitemap.ts`

### Images ne se chargent pas

- Vérifier que les images sont dans `/public/images/`
- Vérifier les chemins dans le code

---

## 📚 Guides Complets

- `GUIDE_DEPLOIEMENT.md` : Guide détaillé de déploiement
- `GUIDE_GOOGLE_SEARCH_CONSOLE.md` : Configuration Google Search Console
- `GUIDE_VERCEL_ANALYTICS.md` : Configuration Vercel Analytics
- `CHECKLIST_FINALE.md` : Checklist complète avant/après déploiement

---

**🎉 Une fois toutes les étapes complétées, votre site est en production !**

