# Banking App - Clone d'Interface Bancaire

Ce projet est un clone pixel-perfect d'une interface bancaire mobile créé avec React Native et Expo.

## 🎯 Fonctionnalités

- Interface identique à l'image fournie
- Barre de statut avec heure, signal, WiFi, batterie
- Transaction avec montant et destinataire
- Cartes de détails (Payment request, Transaction details, Tag, Description)
- Navigation en bas avec badge sur "Orders"
- Design sombre avec couleurs exactes
- Polices et espacements fidèles à l'original

## 🚀 Installation et Lancement

### Prérequis
- Node.js (version 18+ recommandée)
- npm ou yarn
- Expo CLI (installé automatiquement)

### Installation
```bash
cd BankingApp
npm install
```

### Lancement
```bash
# Pour iOS
npm run ios

# Pour Android
npm run android

# Pour Web
npm run web
```

## 📱 Technologies Utilisées

- **React Native** - Framework mobile
- **Expo** - Plateforme de développement
- **TypeScript** - Langage de programmation
- **@expo/vector-icons** - Icônes

## 🎨 Design

L'interface reproduit fidèlement :
- Couleurs : Noir (#000000), gris foncé (#1C1C1E), orange (#FF6B35)
- Polices : System font avec différents poids
- Espacements et alignements identiques
- Icônes et badges exacts
- Barre de navigation avec indicateur actif

## 📂 Structure du Projet

```
BankingApp/
├── App.tsx          # Composant principal
├── package.json     # Dépendances
└── README.md        # Documentation
```

## 🔧 Personnalisation

Pour modifier l'interface, éditez le fichier `App.tsx` :
- Couleurs dans `styles`
- Texte dans les composants `Text`
- Icônes dans les composants `Ionicons`
- Layout dans les `View` et `StyleSheet`

## 📄 Licence

Ce projet est créé à des fins éducatives et de démonstration.
