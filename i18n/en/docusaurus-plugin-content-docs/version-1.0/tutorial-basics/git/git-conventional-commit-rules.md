---
sidebar_position: 3
title: Git convention
---

# Règles générales

### 1. Tester avant de commit

Il est crucial de résister à la tentation de committer un code que l'on "pense" être fonctionnel. Avant de committer, effectuez des tests méticuleux pour garantir le bon fonctionnement et éviter les effets secondaires non désirés.

## 2. Avoir un commit atomique

Un commit atomique se concentre sur un seul sujet. Par exemple, résoudre deux bugs différents devrait résulter en deux commits distincts. Cela facilite la compréhension des changements par l'équipe et permet des rollbacks ciblés en cas de problème.

## 3. Faire des commits réguliers

Des commits réguliers maintiennent un historique clair, atomique et facile à intégrer. Évitez les commits volumineux partagés rarement pour faciliter la collaboration et minimiser les conflits.

## 4. Ne pas faire de commit non fonctionnel

Évitez les commits de changements non fonctionnels, incomplets ou qui ne font pas compiler le projet. Utilisez plutôt un [stash](https://git-scm.com/docs/git-stash) pour maintenir un répertoire de travail propre.

## 5. Avoir un titre de commit descriptif

Des titres de commits informatifs facilitent la compréhension des changements. Évitez les titres vagues ; décrivez clairement le contenu du commit.

## 6. Ajouter du contexte à son commit dans le body

Associez un body à votre commit pour fournir des détails et du contexte. Cela facilite la compréhension des changements, même des mois plus tard.

## 7. Ressortir ultimement dans le contexte qu'est-ce qui a changé et pourquoi

Répondez aux questions "Qu'est-ce qui a changé ?" et "Pourquoi cela a changé ?" dans le body du commit sans répéter le code lui-même.

## 8. Ne pas avoir de bloc de code commenté

Évitez les blocs de code commenté dans les commits, car ils sont considérés comme des changements superflus.

# Règles de formatage

## 1. Utiliser les conventions conventionalcommits

Les commits suivront les spécifications de [conventionalcommits](https://www.conventionalcommits.org/).

## 2. Types de commits supplémentaires

En plus des types spécifiés par [conventionalcommits](https://www.conventionalcommits.org/), utilisez les types dérivés de la convention [Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type).

- **build**: changements affectant le build ou les dépendances externes (exemples : gulp, broccoli, npm)
- **ci**: changements aux fichiers de configuration CI et scripts (exemple de scopes : Travis, Circle, BrowserStack, SauceLabs).
- **docs**: changements sur la documentation.
- **perf**: changements résultant à une amélioration des performances.
- **refactor**: changements ne résolvant pas un bug et n'ajoutant pas de fonctionnalité.
- **style**: changements n’affectant pas le sens du code (espaces, formattage, point-virgules manquants, etc)
- **test**: changements pour l'ajout de tests ou la modification de tests existants.

## 3. Limiter le titre du commit

Limitez le titre du commit à 50 caractères idéalement. La limite stricte est de 72 caractères. Évitez le contenu superflu pour rester concis.

## 4. Ne pas terminer le titre avec une ponctuation

Le titre du commit ne doit pas se terminer par une ponctuation.

## 5. Avoir un titre à la forme impérative

Utilisez la forme impérative pour décrire le but du commit de manière claire et concise.

## 6. Séparer le titre du commit d'un saut de ligne

Séparez le titre du commit du body par un saut de ligne, sauf s'il n'y a pas de body.

## 7. Limiter les lignes du body

Limitez les lignes du body du commit à 72 caractères pour faciliter la lisibilité.

## 8. Utiliser les tirets pour les listes

Utilisez le tiret (-) entre deux espaces pour les listes dans le body du commit.

## 9. Utiliser la forme impersonnelle

Évitez l'usage des pronoms personnels (je, tu, etc.) dans le titre et le body du commit. Préférez la forme impersonnelle ou passive.
