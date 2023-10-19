---
sidebar_position: 1
title: Commencer avec NodeJs
---


# Tutoriels de développement avec Node.js

Node.js est une plateforme basée sur le moteur JavaScript V8 de Chrome, conçue pour construire des applications réseau rapides et évolutives. Suivez ce tutoriel pour démarrer avec Node.js.

## Étape 1 : Installer Node.js

Commencez par installer Node.js sur votre machine. Vous pouvez le télécharger à partir du [site officiel de Node.js](https://nodejs.org/).

Vérifiez l'installation en ouvrant un terminal et exécutez les commandes suivantes :
```bash
node -v
npm -v
```
Ces commandes devraient afficher les versions de Node.js et npm.

## Étape 2 : Créer un Projet Node.js

1. Créez un dossier pour votre projet :
    ```bash
    mkdir mon-projet-node
    cd mon-projet-node
    ```

2. Initialisez votre projet Node.js en créant un fichier `package.json`. Répondez aux questions interactives ou utilisez la commande suivante :
    ```bash
    npm init -y
    ```

3. Vous avez maintenant un fichier `package.json` qui définit votre projet.

## Étape 3 : Créer un Premier Fichier JavaScript

Créez un fichier JavaScript simple, par exemple `app.js`, et ouvrez-le dans votre éditeur de texte favori.

Ajoutez le code suivant pour créer un serveur HTTP basique :
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Bonjour, ceci est un serveur Node.js!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
```

## Étape 4 : Exécuter le Serveur

De retour dans votre terminal, exécutez le serveur avec la commande :
```bash
node app.js
```

Votre serveur est maintenant en cours d'exécution sur `http://localhost:3000`. Ouvrez votre navigateur et visitez cette URL pour voir le message de salutation.

## Étape 5 : Utiliser des Modules NPM

Node.js utilise npm (Node Package Manager) pour gérer les dépendances et les modules tiers. Par exemple, installez le module `express` pour créer un serveur web plus avancé :
```bash
npm install express
```

Modifiez votre fichier `app.js` pour utiliser Express :
```javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Bonjour, ceci est un serveur Express!');
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
```


## Exercices Pratiques avec Nodeschool
Installer Nodeschool :

```bash
npm install -g learnyounode
learnyounode
```

Suivez les instructions pour compléter les exercices pratiques qui vous apprendront les bases de Node.js.


## Conclusion

Félicitations, vous avez créé votre premier projet Node.js! Explorez davantage en ajoutant des routes, en intégrant des bases de données, et en découvrant la vaste gamme de modules npm disponibles. Node.js offre une flexibilité énorme pour le développement côté serveur, et c'est une excellente compétence à acquérir pour les développeurs web.