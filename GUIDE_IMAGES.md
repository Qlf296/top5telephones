# 📱 Guide pour ajouter de vraies images des téléphones

## 🎯 Objectif
Remplacer les images placeholder par de vraies photos des téléphones pour améliorer l'expérience utilisateur et la conversion.

## 📋 Liste des images nécessaires

### Top 5 Téléphones à moins de 300€
1. **Samsung Galaxy A14** → `samsung-galaxy-a14.jpg`
2. **Xiaomi Redmi Note 12** → `xiaomi-redmi-note-12.jpg`
3. **Motorola Moto G84** → `motorola-moto-g84.jpg`
4. **Nokia G60** → `nokia-g60.jpg`
5. **Realme 10** → `realme-10.jpg`

## 🔍 Où trouver les images

### Sites officiels (recommandé)
- **Samsung** : https://www.samsung.com/fr/smartphones/galaxy-a/galaxy-a14-4g/
- **Xiaomi** : https://www.mi.com/fr/redmi-note-12/
- **Motorola** : https://www.motorola.fr/smartphones/moto-g/moto-g84/
- **Nokia** : https://www.nokia.com/phones/fr_fr/nokia-g-60
- **Realme** : https://www.realme.com/fr/realme-10

### Sites de comparaison
- **GSMArena** : https://www.gsmarena.com/
- **Les Numériques** : https://www.lesnumeriques.com/
- **Amazon** : https://www.amazon.fr/ (rechercher le modèle)

## 📥 Comment télécharger

1. **Va sur le site officiel du fabricant**
2. **Trouve la galerie d'images du téléphone**
3. **Choisis une image de face avant** (sur fond blanc de préférence)
4. **Clic droit > "Enregistrer l'image sous..."**
5. **Renomme selon le format** : `samsung-galaxy-a14.jpg`

## 📁 Où placer les images

```
public/
└── images/
    ├── samsung-galaxy-a14.jpg
    ├── xiaomi-redmi-note-12.jpg
    ├── motorola-moto-g84.jpg
    ├── nokia-g60.jpg
    └── realme-10.jpg
```

## ⚡ Optimisation des images

### Format recommandé
- **Format** : JPG ou PNG
- **Taille** : 400x300px minimum
- **Poids** : Moins de 200KB par image
- **Qualité** : 80-85% pour JPG

### Outils d'optimisation
- **Squoosh** : https://squoosh.app/
- **TinyPNG** : https://tinypng.com/
- **ImageOptim** (Mac) : https://imageoptim.com/

## 🔄 Mise à jour automatique

Une fois les images placées dans `public/images/`, elles s'afficheront automatiquement sur le site car le code pointe déjà vers les bons chemins :

```typescript
// Dans src/data/phones.ts
image: "/images/samsung-galaxy-a14.jpg"
```

## ✅ Vérification

Après avoir ajouté les images :
1. **Redémarre le serveur** : `npm run dev`
2. **Vérifie la page d'accueil** : http://localhost:3000
3. **Vérifie les fiches détaillées** : http://localhost:3000/fiche/samsung-galaxy-a14

## 🚀 Prochaines étapes

Une fois les vraies images en place :
1. **Teste sur mobile** pour vérifier le responsive
2. **Optimise le lazy loading** si nécessaire
3. **Ajoute des images pour d'autres téléphones** si tu étends la liste

## 💡 Conseils

- **Privilégie les images officielles** pour éviter les problèmes de droits
- **Garde un ratio cohérent** entre toutes les images
- **Teste sur différents écrans** pour vérifier l'affichage
- **Backup les images** dans un dossier séparé

---

**🎉 Une fois terminé, ton site aura de vraies photos des téléphones et sera beaucoup plus professionnel !** 