---
sidebar_position: 3
title: Understanding REST APIs
---

# Understanding REST APIs

## Introduction to REST APIs

REST APIs (Representational State Transfer) are an architectural style for designing web services. They rely on fundamental principles that make them simple, scalable, and easy to understand. Here are the key concepts:

### Resources

A resource is an entity that you can manipulate via the API. This can be an object, data, or even a service.

### URI (Uniform Resource Identifier)

Each resource is uniquely identified by a URI. For example, for a user resource, the URI could be `/users`.

### HTTP Methods

HTTP methods (GET, POST, PUT, DELETE, etc.) are used to perform actions on resources. For example, using GET on `/users` can retrieve the list of users.

### Representations

The data of a resource can be represented in different formats such as JSON, XML, HTML, etc.

## Example of a Simple REST API

Let's consider an API for managing a task list.

### Resource: Tasks

- **Collection URI:** `/tasks`
- **Methods:**
  - `GET` retrieves the list of tasks.
  - `POST` creates a new task.

- **Individual URI:** `/tasks/{id}`
- **Methods:**
  - `GET` retrieves details of a specific task.
  - `PUT` updates an existing task.
  - `DELETE` deletes a task.

## Interacting with the REST API

### Retrieve List of Tasks

- **Method:** `GET`
- **URI:** `/tasks`
- **Example Response (JSON):**
  ```json
  [
    {"id": 1, "title": "Go grocery shopping"},
    {"id": 2, "title": "Learn REST API concepts"}
  ]
  ```

### Create a New Task

- **Method:** `POST`
- **URI:** `/tasks`
- **Request Body (JSON):**
  ```json
  {"title": "Write a tutorial on REST APIs"}
  ```
- **Example Response (JSON):**
  ```json
  {"id": 3, "title": "Review REST concepts"}
  ```

### Retrieve Details of a Task

- **Method:** `GET`
- **URI:** `/tasks/3`
- **Example Response (JSON):**
  ```json
  {"id": 3, "title": "Review REST concepts"}
  ```

### Update an Existing Task

- **Method:** `PUT`
- **URI:** `/tasks/3`
- **Request Body (JSON):**
  ```json
  {"title": "Review REST concepts once more"}
  ```

### Delete a Task

- **Method:** `DELETE`
- **URI:** `/tasks/3`
- **Response (No Body):** `204 No Content`

## Tools for Testing REST APIs

### Postman

Postman is a user-friendly tool for testing API requests and responses. You can create requests for each HTTP method and see the responses.

### cURL

cURL is a command-line tool that allows you to send HTTP requests directly from the terminal.

## Conclusion

Understanding the basic principles of REST APIs is essential for working in modern development. Continue to explore, test, and practice to master the use of REST APIs in your projects.
