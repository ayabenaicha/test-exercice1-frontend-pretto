
# Test Technique Frontend 

## Vue d’ensemble

Ce test technique frontend a pour objectif de reproduire **fidèlement** une maquette fournie sur Figma en respectant des contraintes techniques strictes.

L’application est développée en **React 18** avec **Vite**.  
Elle implémente une interface complète composée d’une **navbar responsive**, de blocs de contenu structurés et de **composants UI réutilisables**, avec une attention particulière portée au **pixel-perfect**, à la lisibilité du code et à la maintenabilité.

---

## Objectifs

- Reproduire **à l’identique** la maquette Figma  
- Respecter strictement les **contraintes techniques imposées**  
- Mettre en place une **structure claire et cohérente**  
- Gérer correctement le **responsive** selon les breakpoints définis dans Figma  

---

## Contraintes techniques

- **Framework** : React 18  
- **Styles** : CSS classique uniquement (`.css`)  
  -  Pas de CSS-in-JS (styled-components, emotion, etc.)  
- **Mise en page** : Flexbox uniquement  
  -  Pas de CSS Grid  
- **Responsive** :
  - Mobile  
  - Tablette (~ 834px)  
  - Desktop (≥ 1440px)  
- **Accessibilité** :
  - HTML sémantique  
  - Attributs `alt` pour les images  
  - `aria-label` pour les éléments interactifs  

---

## Stack technique

- **React 18** (JavaScript)
- **Vite** – outil de build et serveur de développement rapide
- **CSS classique**
- **ESLint** – contrôle de la qualité du code
- **SVGR (vite-plugin-svgr)** – import des SVG en composants React

---

## Architecture du projet

Le projet est volontairement simple et lisible.  
Tous les composants sont regroupés dans le dossier `components`, avec une séparation **logique** (et non forcée) entre structure et UI.

```
src/
├── components/
│   ├── layout/        # Composants structurels (Navbar, Background, PageContainer)
│   ├── ui/            # Composants UI réutilisables (Button, ButtonCard, Card)
│   └── ...            # Autres composants fonctionnels
├── assets/            # Images et icônes SVG
├── styles/
│   └── global.css     # Styles globaux (reset + typographie)
│    └──tokens.css
├── pages/
│   └── Dashboard.jsx  # Page principale
└── App.jsx
```

### Organisation des composants

- **layout**
  - Gère la structure générale de l’interface
  - Contient les composants de mise en page (navbar, background, containers)
- **ui**
  - Contient les composants présentatifs réutilisables
  - Personnalisation via des `props`
- **pages**
  - Assemble les composants pour former l’interface finale

👉 Chaque composant possède son **fichier CSS co-localisé**, afin de garder des styles lisibles et faciles à maintenir.

---

## Stratégie de styles

### CSS classique

- Aucun framework CSS externe
- Aucun CSS-in-JS
- Styles explicites et maîtrisés

### Typographie

- Styles globaux centralisés dans `global.css`
- Classes utilitaires réutilisées dans tous les composants :
  - `.text-section-title`
  - `.text-section-description`

### Responsive

- Approche **mobile / tablette / desktop**
- Adaptation progressive avec `@media`
- Breakpoints strictement alignés avec la maquette Figma

---

## Choix d’implémentation clés

- **Pixel-perfect**
  - Marges, paddings, tailles et alignements respectés
- **Flexbox exclusivement**
  - Aucun layout en CSS Grid
- **Simplicité volontaire**
  - Architecture claire sans abstraction inutile
- **Lisibilité du code**
  - Composants courts, responsabilités claires
- **Accessibilité**
  - Boutons natifs (`<button>`)
  - Images avec texte alternatif
  - Attributs ARIA lorsque nécessaire

---

## Lancer le projet

### Installer les dépendances
```bash
npm install
```

### Lancer le serveur de développement
```bash
npm run dev
```

### Créer un build de production
```bash
npm run build
```

### Prévisualiser le build de production
```bash
npm run preview
```

### Vérifier la qualité du code
```bash
npm run lint
```
