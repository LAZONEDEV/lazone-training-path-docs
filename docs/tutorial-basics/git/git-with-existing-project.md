---
sidebar_position: 2
title: Git avec un projet existant
---

# Travaillez avec un projet existant

## Git Clone

Lorsque vous souhaitez travailler sur un projet existant, vous utilisez la commande `git clone` pour créer une copie locale du dépôt distant sur votre machine.

1. Naviguez vers le répertoire où vous souhaitez cloner le projet.
   ```bash
   cd chemin/vers/le/repertoire
   ```

2. Clonez le dépôt en utilisant la commande `git clone` avec l'URL du dépôt :
   ```bash
   git clone https://lien-vers-le-depot.git
   ```

Cela créera un répertoire avec le nom du projet dans votre répertoire actuel, contenant tous les fichiers du dépôt. Vous aurez ainsi une copie locale prête à être modifiée.

## Git Status

La commande `git status` est utilisée pour afficher l'état des fichiers dans votre répertoire de travail par rapport au dernier commit.

1. Naviguez vers le répertoire du projet cloné.
   ```bash
   cd chemin/vers/le/projet
   ```

2. Exécutez la commande `git status` :
   ```bash
   git status
   ```

Cette commande vous montrera les fichiers modifiés, les fichiers prêts à être commités, et d'autres informations utiles sur l'état de votre dépôt.

## Git Rebase

La commande `git rebase` est utilisée pour intégrer les modifications d'une branche sur une autre. Cela est souvent utilisé pour maintenir un historique de commits propre et linéaire.

1. Assurez-vous d'être sur la branche que vous souhaitez mettre à jour.
   ```bash
   git checkout ma_branche
   ```

2. Effectuez un rebase avec la branche cible (par exemple, `master`) :
   ```bash
   git rebase master
   ```

3. Résolvez les éventuels conflits s'il y en a, suivez les instructions de Git.

4. Après avoir résolu les conflits, continuez le rebase :
   ```bash
   git rebase --continue
   ```

5. Une fois le rebase terminé, mettez à jour la branche distante :
   ```bash
   git push origin ma_branche --force-with-lease
   ```

Attention : Utilisez `--force` avec précaution, car cela réécrit l'historique du dépôt distant.

Ces commandes `git clone`, `git status`, et `git rebase` sont des outils essentiels pour travailler efficacement avec Git. Assurez-vous de comprendre comment les utiliser correctement pour une gestion de version optimale.