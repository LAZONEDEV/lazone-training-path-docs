---
sidebar_position: 4
title: Understanding GraphQL APIs
---

# Introduction to GraphQL APIs

## Understanding GraphQL

GraphQL is a query language and an execution server for APIs, created by Facebook. It allows clients to specify exactly the data they need and nothing more. Here are the key concepts:

### GraphQL Schema

A schema defines the types of data available and the relationships between them. It serves as a contract between the client and the server.

Example GraphQL schema for a blog application:
```graphql
type Article {
  id: ID!
  title: String!
  content: String!
  author: User!
}

type User {
  id: ID!
  name: String!
  articles: [Article!]!
}

type Query {
  articles: [Article!]!
  user(id: ID!): User!
}
```

### GraphQL Queries

Clients send GraphQL queries to request specific data. The query resembles the shape of the desired data.

Example GraphQL query:
```graphql
query {
  articles {
    title
    content
    author {
      name
    }
  }
}
```

### GraphQL Mutations

Mutations are used to make modifications to server data, such as creating, updating, or deleting.

Example GraphQL mutation:
```graphql
mutation {
  createArticle(title: "New Article", content: "Article content", authorId: "1") {
    id
    title
    content
  }
}
```

## Example of a Simple GraphQL API

Let's consider a GraphQL API for a library.

### GraphQL Schema

```graphql
type Book {
  id: ID!
  title: String!
  author: String!
}

type Query {
  books: [Book!]!
  book(id: ID!): Book!
}

type Mutation {
  addBook(title: String!, author: String!): Book!
  deleteBook(id: ID!): ID!
}
```

### GraphQL Queries and Mutations

#### Retrieve List of Books

```graphql
query {
  books {
    title
    author
  }
}
```

#### Retrieve a Specific Book

```graphql
query {
  book(id: "1") {
    title
    author
  }
}
```

#### Add a New Book

```graphql
mutation {
  addBook(title: "GraphQL 101", author: "Unknown Author") {
    title
    author
  }
}
```

#### Delete a Book

```graphql
mutation {
  deleteBook(id: "1")
}
```

## Tools for Testing GraphQL APIs

### GraphiQL

GraphiQL is an interactive interface for exploring and testing GraphQL APIs. It is often integrated into GraphQL servers.

### Insomnia

Insomnia is an API testing tool that supports GraphQL. You can send requests and see responses in a clear manner.

## Conclusion

GraphQL provides increased flexibility compared to REST APIs by allowing clients to specify exactly the data they need. Explore, test, and practice to fully understand and master the use of GraphQL APIs in your projects.
