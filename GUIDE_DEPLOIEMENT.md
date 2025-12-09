# 🚀 Guide de Déploiement - Top 5 Téléphones

## 📋 Prérequis

- ✅ Compte Vercel (recommandé) ou autre plateforme d'hébergement
- ✅ Repository GitHub/GitLab configuré
- ✅ Variables d'environnement préparées

## 🔧 Configuration avant déploiement

### 1. Variables d'environnement

Créer un fichier `.env.local` (ou configurer dans Vercel) :

```env
# URL du site (IMPORTANT : utiliser top5telephones.fr)
NEXT_PUBLIC_SITE_URL=https://top5telephones.fr

# Google Analytics 4 (optionnel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Microsoft Clarity (optionnel)
NEXT_PUBLIC_CLARITY_ID=YOUR_CLARITY_ID

# Google Search Console (optionnel)
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
```

### 2. Vérifications pré-déploiement

#### ✅ Build de production
```bash
npm run build
```

Vérifier qu'il n'y a pas d'erreurs et que toutes les pages sont générées.

#### ✅ Test local de production
```bash
npm run build
npm start
```

Tester le site sur `http://localhost:3000` pour vérifier que tout fonctionne.

#### ✅ Vérification des URLs
- Vérifier que toutes les URLs utilisent `top5telephones.fr` (pas `top5smartphones.fr`)
- Vérifier les canonical URLs dans les metadata
- Vérifier le sitemap : `/sitemap.xml`

#### ✅ Vérification des images
- Vérifier que toutes les images existent dans `/public/images/`
- Vérifier l'image OG par défaut : `/public/images/og-image.jpg`

---

## 🌐 Déploiement sur Vercel

### Étape 1 : Connecter le repository

1. Aller sur [vercel.com](https://vercel.com)
2. Cliquer sur "Add New Project"
3. Importer le repository GitHub/GitLab

### Étape 2 : Configuration du projet

**Framework Preset** : Next.js (détecté automatiquement)

**Build Command** : `npm run build` (par défaut)

**Output Directory** : `.next` (par défaut)

**Install Command** : `npm install` (par défaut)

### Étape 3 : Variables d'environnement

Dans les paramètres du projet Vercel, ajouter :

```
NEXT_PUBLIC_SITE_URL=https://top5telephones.fr
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX (si utilisé)
NEXT_PUBLIC_CLARITY_ID=YOUR_CLARITY_ID (si utilisé)
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-code (si utilisé)
```

### Étape 4 : Déploiement

1. Cliquer sur "Deploy"
2. Attendre la fin du build
3. Vérifier l'URL de déploiement

### Étape 5 : Configuration du domaine

1. Aller dans "Settings" > "Domains"
2. Ajouter votre domaine personnalisé (`top5telephones.fr`)
3. Suivre les instructions DNS

---

## ✅ Vérifications post-déploiement

### 1. Test des pages principales

- [ ] Page d'accueil : `https://top5telephones.fr`
- [ ] Comparateur : `https://top5telephones.fr/comparateur`
- [ ] Quiz : `https://top5telephones.fr/quiz`
- [ ] Fiches produits : `https://top5telephones.fr/fiche/samsung-galaxy-a14`
- [ ] Guide : `https://top5telephones.fr/guide-achat-smartphone`
- [ ] Contact : `https://top5telephones.fr/contact`

### 2. Test SEO

- [ ] Sitemap accessible : `https://top5telephones.fr/sitemap.xml`
- [ ] Robots.txt accessible : `https://top5telephones.fr/robots.txt`
- [ ] Structured Data valides (tester avec [Google Rich Results Test](https://search.google.com/test/rich-results))
- [ ] Open Graph fonctionnel (tester avec [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/))

### 3. Test des performances

- [ ] Lighthouse Score > 90 (Performance, SEO, Accessibility)
- [ ] Core Web Vitals :
  - LCP < 2.5s ✅
  - CLS < 0.1 ✅
  - FID < 100ms ✅

### 4. Test des fonctionnalités

- [ ] Comparateur fonctionne (sélection de téléphones)
- [ ] Quiz fonctionne (calcul des recommandations)
- [ ] Navigation fonctionne (liens internes)
- [ ] Images se chargent correctement
- [ ] Responsive design fonctionne (mobile, tablette, desktop)

### 5. Test des analytics (si configurés)

- [ ] Google Analytics envoie des données
- [ ] Microsoft Clarity enregistre les sessions

---

## 🔍 Monitoring post-déploiement

### Google Search Console

1. Ajouter la propriété `https://top5telephones.fr`
2. Vérifier avec `NEXT_PUBLIC_GOOGLE_VERIFICATION`
3. Soumettre le sitemap : `https://top5telephones.fr/sitemap.xml`

### Vercel Analytics

- Activer Vercel Analytics dans les paramètres du projet
- Monitorer les Core Web Vitals en temps réel

### Google Analytics

- Vérifier que les événements Web Vitals sont envoyés
- Monitorer le trafic et les conversions

---

## 🐛 Résolution de problèmes

### Build échoue

1. Vérifier les logs de build dans Vercel
2. Tester le build localement : `npm run build`
3. Vérifier les erreurs TypeScript : `npm run lint`

### Images ne se chargent pas

1. Vérifier que les images existent dans `/public/images/`
2. Vérifier les chemins dans le code
3. Vérifier la configuration `next.config.js` pour les images

### SEO ne fonctionne pas

1. Vérifier les metadata dans chaque page
2. Tester les Structured Data avec Google Rich Results Test
3. Vérifier le sitemap : `/sitemap.xml`

### Performance dégradée

1. Vérifier les Core Web Vitals dans Vercel Analytics
2. Analyser avec Lighthouse
3. Vérifier les imports dynamiques
4. Vérifier le cache des assets

---

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Vercel](https://vercel.com/docs)
- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## ✅ Checklist finale

Avant de considérer le déploiement comme terminé :

- [ ] Build de production réussi
- [ ] Toutes les pages accessibles
- [ ] SEO validé (Structured Data, Sitemap, Robots.txt)
- [ ] Performance validée (Lighthouse > 90)
- [ ] Analytics configurés et fonctionnels
- [ ] Domaine personnalisé configuré
- [ ] Google Search Console configuré
- [ ] Monitoring activé

**🎉 Félicitations ! Votre site est prêt pour la production !**
