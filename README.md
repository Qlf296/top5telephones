# Top 5 Téléphones à moins de 300€

Site web moderne présentant les meilleurs smartphones à moins de 300€ avec un design iOS 26 glassmorphism clair, optimisé pour les performances et le SEO.

## 🚀 Fonctionnalités

- **Top 5 des téléphones** : Sélection rigoureuse des meilleurs smartphones
- **Comparateur interactif** : Comparez jusqu'à 4 téléphones côte à côte
- **Quiz personnalisé** : Trouvez votre téléphone parfait selon vos besoins
- **Fiches détaillées** : Spécifications complètes et avis détaillés
- **Design moderne** : Interface iOS 26 glassmorphism clair et responsive
- **SEO optimisé** : Meta tags, Open Graph, Structured Data (JSON-LD), Sitemap dynamique
- **Performance optimale** : Core Web Vitals optimisés, code splitting, cache intelligent

## 🛠️ Technologies

- **Framework** : Next.js 15 avec App Router
- **Styling** : Tailwind CSS avec design system iOS 26 personnalisé
- **Language** : TypeScript
- **Images** : Next.js Image Optimization (WebP, AVIF)
- **SEO** : Structured Data (Schema.org), Sitemap dynamique, Robots.txt
- **Performance** : Dynamic imports, Code splitting, Cache headers
- **Hébergement** : Vercel (recommandé)

## 📦 Installation

1. **Cloner le projet**
```bash
git clone <repository-url>
cd top5-telephones
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**
```bash
cp env.example .env.local
```

Éditer `.env.local` et ajouter :
```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_CLARITY_ID=your-microsoft-clarity-id
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
```

4. **Lancer en développement**
```bash
npm run dev
```

5. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 🏗️ Structure du projet

```
src/
├── app/                    # Pages Next.js App Router
│   ├── layout.tsx          # Layout principal avec metadata
│   ├── page.tsx           # Page d'accueil
│   ├── comparateur/       # Page comparateur
│   ├── quiz/              # Page quiz
│   ├── fiche/[slug]/      # Pages fiches produits (dynamiques)
│   ├── sitemap.ts         # Sitemap dynamique
│   └── ...
├── components/
│   ├── ui/                # Composants UI réutilisables
│   │   ├── Button.tsx
│   │   ├── GlassCard.tsx
│   │   ├── SectionShell.tsx
│   │   └── Pill.tsx
│   ├── core/              # Composants core (Header, Footer, etc.)
│   │   └── PageShell.tsx
│   ├── seo/               # Composants SEO (Structured Data)
│   │   ├── OrganizationSchema.tsx
│   │   ├── ArticleSchema.tsx
│   │   ├── BreadcrumbSchema.tsx
│   │   └── ...
│   └── ...
├── data/
│   └── phones.ts          # Données des téléphones
├── lib/
│   └── utils.ts           # Utilitaires
└── styles/
    └── apple-theme.css    # Thème iOS 26
```

## 🎨 Design System

Le site utilise un design system iOS 26 avec :
- **Glassmorphism** : Effets de verre avec backdrop-blur
- **Couleurs** : Palette iOS blue avec transparence
- **Typographie** : Inter (Google Fonts) avec display: swap
- **Animations** : Transitions fluides iOS-style
- **Responsive** : Mobile-first avec breakpoints optimisés

## 🚀 Déploiement

### Vercel (Recommandé)

1. **Connecter le repository GitHub**
2. **Configurer les variables d'environnement** dans Vercel
3. **Déployer** : Le déploiement est automatique à chaque push

### Build de production

```bash
npm run build
npm start
```

### Variables d'environnement requises

- `NEXT_PUBLIC_GA_ID` : Google Analytics ID (optionnel)
- `NEXT_PUBLIC_CLARITY_ID` : Microsoft Clarity ID (optionnel)
- `NEXT_PUBLIC_GOOGLE_VERIFICATION` : Google Search Console (optionnel)

## 📊 Performance

Le site est optimisé pour les meilleures performances :

- **Core Web Vitals** :
  - LCP < 2.5s ✅
  - CLS < 0.1 ✅
  - FID < 100ms ✅

- **Optimisations** :
  - Code splitting automatique
  - Dynamic imports pour composants lourds
  - Cache intelligent (1 an pour assets, stale-while-revalidate pour pages)
  - Images optimisées (WebP, AVIF)
  - Fonts optimisées (preload, display: swap)

## 🔍 SEO

Le site est entièrement optimisé pour le SEO :

- **Structured Data** : JSON-LD sur toutes les pages
  - WebSite, Organization
  - Product (fiches produits)
  - Article (guides, comparatifs)
  - BreadcrumbList (navigation)
  - ItemList (comparateur, Top 5)

- **Métadonnées** : Complètes et uniques sur chaque page
  - Title, Description, Keywords
  - Open Graph (og:image, og:title, etc.)
  - Twitter Cards
  - Canonical URLs

- **Sitemap** : Généré dynamiquement (`/sitemap.xml`)
- **Robots.txt** : Configuré pour l'indexation optimale

## 📝 Scripts disponibles

```bash
npm run dev          # Développement (port 3000)
npm run build        # Build de production
npm run start        # Démarrer le serveur de production
npm run lint         # Linter le code
npm run validate     # Valider le build
npm run pre-deploy   # Vérification pré-déploiement
```

## 🧪 Tests

Pour tester les performances :
1. Ouvrir Chrome DevTools
2. Onglet Lighthouse
3. Lancer un audit complet (Performance, SEO, Accessibility)

## 📚 Documentation

- `OPTIMISATIONS_SEO.md` : Détails des optimisations SEO
- `OPTIMISATIONS_PERFORMANCE_FINALES.md` : Détails des optimisations performance
- `ANALYSE_SEO.md` : Analyse SEO complète
- `GUIDE_DEPLOIEMENT.md` : Guide complet de déploiement
- `CHECKLIST_FINALE.md` : Checklist avant et après déploiement

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

Ce projet est sous licence MIT.

## 🙏 Remerciements

- Next.js pour le framework
- Tailwind CSS pour le styling
- Vercel pour l'hébergement
