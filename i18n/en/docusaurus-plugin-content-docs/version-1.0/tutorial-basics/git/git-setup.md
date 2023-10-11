---
sidebar_position: 1
title: Installer et démarrer avec git
---

# Installer et Démarrer avec Git

## Étape 1 : Installation de Git

### Windows

1. Téléchargez l'installateur Git depuis le site officiel : [Git for Windows](https://gitforwindows.org/).
2. Exécutez l'installateur téléchargé et suivez les instructions par défaut.
3. Choisissez l'éditeur de texte que vous souhaitez utiliser avec Git (par exemple, Notepad++, Visual Studio Code) lors de l'installation.

### MacOS

1. Sur MacOS, vous pouvez installer Git à l'aide de [Homebrew](https://brew.sh/), un gestionnaire de paquets. Ouvrez Terminal et exécutez la commande suivante :
   ```bash
   brew install git
   ```

### Linux

1. Sur les distributions basées sur Debian (comme Ubuntu), utilisez le gestionnaire de paquets :
   ```bash
   sudo apt-get update
   sudo apt-get install git
   ```

2. Sur les distributions basées sur Red Hat (comme Fedora), utilisez :
   ```bash
   sudo dnf install git
   ```

## Étape 2 : Configuration de Git

1. Ouvrez votre terminal (ou invite de commande pour Windows).
2. Configurez votre nom d'utilisateur avec la commande :
   ```bash
   git config --global user.name "Votre Nom"
   ```

3. Configurez votre adresse e-mail avec la commande :
   ```bash
   git config --global user.email "votre@email.com"
   ```

## Étape 3 : Création d'un nouveau dépôt Git

1. Créez un nouveau dossier pour votre projet et accédez-y via le terminal.
   ```bash
   mkdir mon_projet
   cd mon_projet
   ```

2. Initialisez un nouveau dépôt Git dans ce dossier.
   ```bash
   git init
   ```

## Étape 4 : Ajout de fichiers au suivi de Git

1. Ajoutez un fichier à votre projet (par exemple, `index.html`).
2. Ajoutez le fichier au suivi de Git.
   ```bash
   git add index.html
   ```

## Étape 5 : Effectuer un commit

1. Effectuez un commit pour enregistrer les modifications.
   ```bash
   git commit -m "Premier commit : ajout de index.html"
   ```

## Étape 6 : Opérations courantes

- **Vérifier l'état du dépôt :**
  ```bash
  git status
  ```

- **Voir l'historique des commits :**
  ```bash
  git log
  ```

- **Modifier un fichier et effectuer un nouveau commit :**
  ```bash
  git add fichier_modifié
  git commit -m "Description du changement"
  ```

- **Récupérer les dernières modifications depuis le dépôt distant :**
  ```bash
  git pull origin master
  ```

- **Envoyer vos commits vers le dépôt distant :**
  ```bash
  git push origin master
  ```

Félicitations ! Vous avez maintenant installé Git, configuré votre identité, créé un dépôt local, et effectué vos premiers commits. Explorez davantage les fonctionnalités avancées de Git pour tirer le meilleur parti de ce puissant outil de gestion de version.