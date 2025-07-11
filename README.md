﻿# Tangram Interactif

![Image](https://github.com/user-attachments/assets/f482401c-3a5d-4d4a-b29b-e4ea633e44fd)

## Description

Projet collaboratif de création d'un **tangram animé et interactif** en équipe de 3. Application web permettant de visualiser et animer différentes figures du tangram avec transitions fluides entre les modèles. Développé dans le cadre d'un exercice pédagogique sur la transmission et la communication technique.

## Concept pédagogique

Ce projet explore la communication technique à travers un jeu de rôles où chaque participant endosse tour à tour :

- **La voix** : guide verbal pour reproduire un modèle
- **La main** : exécute les instructions via l'inspecteur du navigateur  
- **Les yeux** : observe et analyse les échanges

---

## Démo

🔗 [Voir la démo en ligne](https://retrogreg.github.io/Tangram/)

---

## Fonctionnalités

### 🎨 **Figures disponibles**

- **Carré** : Figure de base du tangram
- **Chat** : Silhouette féline reconnaissable
- **Oie** : Oiseau en position de repos
- **Canard** : Palmipède stylisé
- **Cœur** : Forme romantique
- **Tortue** : Reptile avec carapace
- **Bateau** : Voilier simplifié
- **Mystères 1, 2 & 3** : Figures secrètes à découvrir

### 🌓 **Mode sombre**

- Bascule jour/nuit avec lanterne chinoise animée
- Adaptation visuelle complète de l'interface
- Ambiance zen préservée dans les deux modes

### 🎯 **Animations**

- Transitions fluides entre chaque figure
- Rotations et transformations CSS3
- Effet de morphing entre les modèles

### 🔊 **Indices sonores**

- Son spécifique pour chaque figure
- Aide à la reconnaissance des formes
- Bouton d'indice interactif

---

## Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Animations et transformations avancées
- **JavaScript** : Logique d'interaction et gestion des états
- **SVG** : Icônes personnalisées pour les boutons
- **Audio API** : Gestion des sons d'indices

---

## Architecture du projet

```
tangram/
├── index.html          # Page principale
├── figure.css          # Styles de base et layout
├── square.css          # Positionnement figure carré
├── cat.css            # Positionnement figure chat
├── swan.css           # Positionnement figure oie
├── duck.css           # Positionnement figure canard
├── heart.css          # Positionnement figure cœur
├── turtle.css         # Positionnement figure tortue
├── boat.css           # Positionnement figure bateau
├── mystery1.css       # Figure mystère 1
├── mystery2.css       # Figure mystère 2 (multi-figures)
├── mystery3.css       # Figure mystère 3
├── script.js          # Logique JavaScript
├── svgInjector.js     # Injection des icônes SVG
├── img/               # Images de fond et habillage
└── sons/              # Fichiers audio pour indices
```

---

## Points techniques notables

### 🔧 **Architecture modulaire**

- Un fichier CSS par figure pour une maintenance facilitée
- Chargement dynamique des styles selon la figure sélectionnée
- Séparation claire entre structure, style et comportement

### 🎪 **Système de classes CSS**

- Classes préfixées par figure (`.container.chat`, `.container.oie`)
- Transformations CSS complexes avec `rotate()`, `skew()`, `scale()`
- Utilisation de variables CSS pour les ajustements

### 🎮 **Interactivité JavaScript**

- Gestion d'état pour les transitions
- Chargement asynchrone des ressources
- Event listeners optimisés

### 🌐 **Responsive Design**

- Adaptation aux écrans mobiles et tablettes
- Interface tactile fonctionnelle
- Préservation des proportions du tangram

---

## Équipe de développement

Projet réalisé en **équipe de 3** :

- **[Grégoire](https://github.com/RetroGreg)**
- **[Philippe Bourgeois](https://github.com/Pbourgeois62)**
- **[Térence Créteur](https://github.com/Lembont)**

### Répartition du travail

- Développement collaboratif sur branches séparées
- Merge sur branche de production

---

## Apprentissages clés

Ce projet nous a permis de :

- Pratiquer le travail collaboratif avec Git
- Explorer les transformations CSS avancées
- Comprendre l'importance de la communication technique claire
- Développer des compétences en animation web
- Appréhender les défis de la transmission d'instructions techniques

---

## Contexte pédagogique

Projet réalisé dans le cadre de la formation développeur web. L'objectif était de créer un outil interactif pour enseigner le tangram tout en explorant les dynamiques de communication technique entre développeurs.

### Modalités d'évaluation

- Reconstitution d'un modèle via l'inspecteur en 15 minutes
- Rotation sur les 3 rôles (voix, main, yeux)
- Analyse des bonnes pratiques de communication

---

## Auteur du brief

**[Nicolas Herbez](https://github.com/nicolas-herbez)** - Formateur

---

## Licence

Ce projet est développé dans un cadre pédagogique.
