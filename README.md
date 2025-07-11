# Top 5 Téléphones à moins de 300€

Site web moderne présentant les meilleurs smartphones à moins de 300€ avec un design iOS 26 glassmorphism clair.

## 🚀 Fonctionnalités

- **Top 5 des téléphones** : Sélection rigoureuse des meilleurs smartphones
- **Comparateur interactif** : Comparez jusqu'à 4 téléphones côte à côte
- **Quiz personnalisé** : Trouvez votre téléphone parfait selon vos besoins
- **Fiches détaillées** : Spécifications complètes et avis détaillés
- **Design moderne** : Interface iOS 26 glassmorphism clair et responsive
- **SEO optimisé** : Meta tags, Open Graph, et structure sémantique
- **Performance** : Next.js avec SSG pour un chargement ultra-rapide

## 🛠️ Technologies

- **Framework** : Next.js 14 avec App Router
- **Styling** : Tailwind CSS avec design system personnalisé
- **Language** : TypeScript
- **Images** : Next.js Image Optimization
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

3. **Lancer en développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 🏗️ Structure du projet

```
src/
├── app/                    # Pages Next.js App Router
│   ├── page.tsx           # Page d'accueil
│   ├── comparateur/       # Page comparateur
│   ├── quiz/              # Page quiz
│   └── fiche/[slug]/      # Pages fiches produits
├── components/             # Composants React
│   ├── Header.tsx         # Navigation principale
│   ├── Footer.tsx         # Pied de page
│   └── CardProduit.tsx    # Carte produit
├── data/                  # Données statiques
│   └── phones.ts          # Base de données téléphones
└── lib/                   # Utilitaires
    └── utils.ts           # Fonctions utilitaires
```

## 📊 Mise à jour des données

### Méthode 1 : Édition manuelle
Modifiez directement le fichier `src/data/phones.ts` :

```typescript
export const phones: Phone[] = [
  {
    id: "1",
    name: "Nouveau Téléphone",
    brand: "Marque",
    price: 250,
    // ... autres propriétés
  }
];
```

### Méthode 2 : ChatGPT + Cursor
Utilisez ce prompt pour générer de nouvelles données :

```
Génère un objet Phone pour le fichier src/data/phones.ts avec ces critères :
- Téléphone à moins de 300€
- Format : { id, name, brand, price, originalPrice?, image, specs, pros, cons, affiliateLinks, rating, slug, description, lastUpdated }
- Spécifications réalistes
- Liens affiliés Amazon/CDiscount
- Note entre 3.5 et 4.5
- Slug URL-friendly
```

## 🎨 Design System

### Couleurs iOS 26
- **Primary** : `ios-blue-500` (#0ea5e9)
- **Background** : Gradient `from-ios-blue-50 to-white`
- **Glass** : `glass-white` (rgba(255, 255, 255, 0.8))

### Composants Glassmorphism
```css
.glass-card {
  @apply bg-glass-white backdrop-blur-md rounded-2xl p-6 shadow-glass-light border border-glass-light;
}
```

## 📈 SEO et Performance

### Meta tags automatiques
- Titres dynamiques par page
- Descriptions optimisées
- Open Graph et Twitter Cards
- Schema.org Product markup

### Optimisations
- Images optimisées avec Next.js Image
- Lazy loading automatique
- Code splitting
- Static Generation (SSG)

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connectez votre repo GitHub à Vercel
2. Déployez automatiquement à chaque push
3. Configuration automatique de Next.js

### Autres plateformes
```bash
npm run build
npm run start
```

## 📱 Pages principales

### 1. Accueil (`/`)
- Hero section avec CTA
- Top 5 téléphones
- Section "Pourquoi nous faire confiance"

### 2. Comparateur (`/comparateur`)
- Sélection de 2-4 téléphones
- Tableau comparatif détaillé
- Filtres par caractéristiques

### 3. Quiz (`/quiz`)
- 4 questions personnalisées
- Algorithme de recommandation
- Résultats avec scores

### 4. Fiches produits (`/fiche/[slug]`)
- Spécifications complètes
- Points forts/faibles
- Liens d'achat affiliés
- Téléphones similaires

## 💰 Monétisation

### Liens affiliés
- **Amazon** : Commission 1-4%
- **CDiscount** : Commission 2-5%
- **Rakuten** : Commission 1-3%

### Stratégie
- Liens non-intrusifs
- Transparence sur l'affiliation
- Contenu de qualité en priorité

## 📊 Analytics

### Google Analytics
```typescript
// Ajouter dans _app.tsx
import { GoogleAnalytics } from 'nextjs-google-analytics'
```

### Métriques à suivre
- Visiteurs uniques/mois
- Taux de conversion (clics affiliés)
- Pages les plus visitées
- Temps passé sur site

## 🔄 Workflow de mise à jour

### Hebdomadaire
1. Vérifier les prix sur Amazon/CDiscount
2. Mettre à jour `phones.ts`
3. Tester les liens affiliés
4. Publier les changements

### Mensuel
1. Analyser les performances
2. Ajouter de nouveaux modèles
3. Optimiser le SEO
4. Améliorer l'UX

## 🎯 Objectifs

- **Trafic** : 10k+ visiteurs/mois
- **Conversion** : 2-5% de clics affiliés
- **Performance** : Core Web Vitals > 90
- **SEO** : Top 10 pour mots-clés cibles

## 📞 Support

Pour toute question ou suggestion :
- Ouvrir une issue sur GitHub
- Contacter via le formulaire du site

---

**Développé avec ❤️ pour aider les utilisateurs à faire le bon choix** 