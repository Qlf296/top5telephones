# 🔍 Guide Google Search Console - Top 5 Téléphones

## 📋 Configuration Google Search Console

### Étape 1 : Accéder à Google Search Console

1. Aller sur [Google Search Console](https://search.google.com/search-console)
2. Se connecter avec votre compte Google
3. Cliquer sur "Ajouter une propriété"

### Étape 2 : Ajouter votre site

**Option 1 : Préfixe d'URL (Recommandé)**
- Sélectionner "Préfixe d'URL"
- Entrer : `https://top5telephones.fr`
- Cliquer sur "Continuer"

**Option 2 : Nom de domaine**
- Sélectionner "Nom de domaine"
- Entrer : `top5telephones.fr`
- Cliquer sur "Continuer"

### Étape 3 : Vérifier la propriété

#### Méthode 1 : Balise HTML (Recommandée)

1. Google Search Console vous donnera une balise meta à ajouter
2. Copier la valeur de `content` (ex: `abc123def456...`)
3. Ajouter dans `.env.local` :
   ```env
   NEXT_PUBLIC_GOOGLE_VERIFICATION=abc123def456...
   ```
4. Le site utilisera automatiquement cette valeur dans `layout.tsx`

#### Méthode 2 : Fichier HTML

1. Télécharger le fichier HTML fourni par Google
2. Le placer dans `/public/google[code].html`
3. Vérifier que le fichier est accessible : `https://top5telephones.fr/google[code].html`

#### Méthode 3 : DNS

1. Ajouter un enregistrement TXT dans votre DNS
2. Suivre les instructions de Google Search Console

### Étape 4 : Soumettre le sitemap

Une fois la propriété vérifiée :

1. Aller dans "Sitemaps" dans le menu de gauche
2. Entrer : `sitemap.xml`
3. Cliquer sur "Envoyer"
4. Attendre quelques minutes pour l'indexation

### Étape 5 : Demander l'indexation

Pour accélérer l'indexation des pages importantes :

1. Aller dans "Inspection d'URL"
2. Entrer l'URL d'une page (ex: `https://top5telephones.fr`)
3. Cliquer sur "Demander l'indexation"
4. Répéter pour les pages principales :
   - Page d'accueil
   - Comparateur
   - Quiz
   - Top 5 smartphones
   - Guide d'achat
   - Fiches produits principales

---

## 📊 Utilisation de Google Search Console

### Performance

**Onglet "Performance"** :
- Voir les requêtes de recherche
- Voir les pages les plus performantes
- Analyser les CTR (Click-Through Rate)
- Voir les positions moyennes

### Couverture

**Onglet "Couverture"** :
- Voir les pages indexées
- Détecter les erreurs d'indexation
- Voir les pages exclues

### Améliorations

**Onglet "Améliorations"** :
- Vérifier les Core Web Vitals
- Voir les problèmes de mobile
- Vérifier les Structured Data

### Liens

**Onglet "Liens"** :
- Voir les liens internes
- Voir les liens externes
- Analyser les ancres de liens

---

## 🔧 Configuration dans le Projet

### Variables d'environnement

Dans `.env.local` ou Vercel :

```env
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

### Vérification dans le code

Le code de vérification est déjà intégré dans `src/app/layout.tsx` :

```typescript
verification: {
  google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
},
```

---

## ✅ Checklist

- [ ] Propriété ajoutée dans Google Search Console
- [ ] Propriété vérifiée (balise HTML, fichier HTML, ou DNS)
- [ ] Sitemap soumis (`sitemap.xml`)
- [ ] Pages principales demandées en indexation
- [ ] Variable `NEXT_PUBLIC_GOOGLE_VERIFICATION` configurée
- [ ] Vérification que la balise meta apparaît dans le `<head>`

---

## 🎯 Prochaines Étapes

1. **Attendre l'indexation** : 1-7 jours pour l'indexation complète
2. **Monitorer les performances** : Vérifier régulièrement les données
3. **Optimiser** : Améliorer les pages avec faible CTR
4. **Corriger les erreurs** : Résoudre les problèmes de couverture

---

## 📚 Ressources

- [Documentation Google Search Console](https://support.google.com/webmasters/answer/9128668)
- [Guide d'utilisation](https://support.google.com/webmasters/topic/4598466)
- [Core Web Vitals](https://developers.google.com/search/docs/guides/page-experience)

