---
sidebar_position: 4
title: Comprendre les API Graphql
---

# Introduction aux API GraphQL

## Comprendre GraphQL

GraphQL est un langage de requête et un serveur d'exécution pour les API, créé par Facebook. Il permet aux clients de spécifier exactement les données dont ils ont besoin et rien de plus. Voici les concepts clés :

### Schéma GraphQL

Un schéma définit les types de données disponibles et les relations entre eux. Il sert de contrat entre le client et le serveur.

Exemple de schéma GraphQL pour une application de blog :
```graphql
type Article {
  id: ID!
  titre: String!
  contenu: String!
  auteur: Utilisateur!
}

type Utilisateur {
  id: ID!
  nom: String!
  articles: [Article!]!
}

type Query {
  articles: [Article!]!
  utilisateur(id: ID!): Utilisateur!
}
```

### Requêtes GraphQL

Les clients envoient des requêtes GraphQL pour demander des données spécifiques. La requête ressemble à la forme des données souhaitées.

Exemple de requête GraphQL :
```graphql
query {
  articles {
    titre
    contenu
    auteur {
      nom
    }
  }
}
```

### Mutations GraphQL

Les mutations sont utilisées pour effectuer des modifications sur les données du serveur, comme la création, la mise à jour ou la suppression.

Exemple de mutation GraphQL :
```graphql
mutation {
  creerArticle(titre: "Nouvel Article", contenu: "Contenu de l'article", auteurId: "1") {
    id
    titre
    contenu
  }
}
```

## Exemple d'API GraphQL Simple

Considérons une API GraphQL pour une bibliothèque.

### Schéma GraphQL

```graphql
type Livre {
  id: ID!
  titre: String!
  auteur: String!
}

type Query {
  livres: [Livre!]!
  livre(id: ID!): Livre!
}

type Mutation {
  ajouterLivre(titre: String!, auteur: String!): Livre!
  supprimerLivre(id: ID!): ID!
}
```

### Requêtes et Mutations GraphQL

#### Récupérer la Liste des Livres

```graphql
query {
  livres {
    titre
    auteur
  }
}
```

#### Récupérer un Livre Spécifique

```graphql
query {
  livre(id: "1") {
    titre
    auteur
  }
}
```

#### Ajouter un Nouveau Livre

```graphql
mutation {
  ajouterLivre(titre: "GraphQL 101", auteur: "Auteur Inconnu") {
    titre
    auteur
  }
}
```

#### Supprimer un Livre

```graphql
mutation {
  supprimerLivre(id: "1")
}
```

## Outils pour Tester les API GraphQL

### GraphiQL

GraphiQL est une interface interactive pour explorer et tester les API GraphQL. Elle est souvent intégrée dans les serveurs GraphQL.

### Insomnia

Insomnia est un outil de test d'API qui prend en charge GraphQL. Vous pouvez y envoyer des requêtes et voir les réponses de manière claire.

## Conclusion

GraphQL offre une flexibilité accrue par rapport aux API REST en permettant aux clients de spécifier exactement les données dont ils ont besoin. Explorez, testez et pratiquez pour bien comprendre et maîtriser l'utilisation des API GraphQL dans vos projets.