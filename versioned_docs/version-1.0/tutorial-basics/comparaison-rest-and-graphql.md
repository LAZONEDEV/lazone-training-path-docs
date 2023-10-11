---
sidebar_position: 5
title: API Rest vs API Graphql
---

# Comparaison entre les API REST et les API GraphQL

Les API REST (Representational State Transfer) et les API GraphQL sont deux approches différentes pour concevoir des interfaces pour les services web. Chacune a ses propres avantages et est adaptée à des cas d'utilisation spécifiques. Voici une comparaison entre les deux :

## Architecture

### API REST

- **Architecture basée sur les ressources :** Les ressources (par exemple, `/utilisateurs`, `/articles`) sont exposées en tant que points d'accès distincts.
- **Point de terminaison unique pour chaque ressource :** Chaque ressource a généralement un point de terminaison dédié (URL) pour effectuer des opérations CRUD.

### API GraphQL

- **Architecture basée sur le graphe :** Les données sont modélisées sous forme de graphe, où les relations entre les entités sont clairement définies.
- **Point de terminaison unique pour toutes les requêtes :** Une seule URL est utilisée pour toutes les requêtes GraphQL, avec un schéma décrivant les types et les opérations possibles.

## Flexibilité des Requêtes

### API REST

- **Données prédéfinies :** Les points de terminaison REST renvoient des données prédéfinies, généralement dans un format JSON.
- **Surcharge d'informations :** Les clients peuvent recevoir plus d'informations que nécessaire, ce qui peut entraîner une surcharge de bande passante.

### API GraphQL

- **Requêtes sur mesure :** Les clients spécifient exactement les données dont ils ont besoin, évitant ainsi la surcharge d'informations inutiles.
- **Récupération de données optimisée :** Les clients peuvent obtenir toutes les données nécessaires en une seule requête.

## Performance

### API REST

- **Sous-fetching et sur-fetching :** Les clients peuvent souffrir de sous-fetching (pas assez de données) ou de sur-fetching (trop de données) en fonction de la conception des points de terminaison.

### API GraphQL

- **Évite le sous-fetching et le sur-fetching :** Les clients obtiennent exactement les données dont ils ont besoin, évitant les problèmes de sous-fetching ou de sur-fetching.

## Versioning

### API REST

- **Versioning explicite :** Souvent, le versioning est géré en ajoutant une version à l'URL (par exemple, `/v1/utilisateurs`).

### API GraphQL

- **Évolution du schéma :** Les changements dans le schéma GraphQL peuvent être gérés de manière plus souple, évitant le besoin de versioning explicite dans l'URL.

## Conclusion

En résumé, le choix entre une API REST et une API GraphQL dépend des besoins spécifiques du projet. Les API REST offrent une approche simple basée sur les ressources, tandis que les API GraphQL offrent une flexibilité accrue en permettant aux clients de spécifier les données exactes dont ils ont besoin. Choisir entre les deux dépend du contexte, des besoins de l'application et des préférences de l'équipe de développement.