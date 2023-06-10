# Book Collection

### Introduction
This repository contains a simple and efficient RESTful API built with Express.js and Mongoose, allowing you to perform basic CRUD (Create, Read, Update, Delete) operations on a collection of books.

### Features
+ **Create:** Add new books to the collection with their Title(required), Author(required), Description(optional), PublishedYear(optional).
+ **Read:** Retrieve information about specific books or get a list of all books in the collection.
+ **Update:** Modify the details of existing books.
+ **Delete:** Remove books from the collection as needed.

### Technologies Used
The API is built using the following technologies:

+ **Express.js:** A flexible and minimalist web application framework for Node.js, providing a robust set of features for web and mobile applications.
+ **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js, simplifying the interaction with the MongoDB database.
+ **MongoDB:** A popular NoSQL database solution known for its scalability, flexibility, and ease of use.
+ **RESTful Architecture:** The API follows the principles of Representational State Transfer (REST), providing a standard and predictable way to interact with resources.

### Getting Started
To get started with the Bookstore RESTful API, follow these steps:

1. Clone the repository: `git clone https://github.com/Hasib192/basic-book-crud-api.git`
2. Install the dependencies: `cd basic-book-crud-api` and run `npm install`
3. Create an .env file in your project root folder and add your variables. See .env.example for assistance.
4. Start the server: Run `npm start` to launch the API.
5. You can now interact with the API endpoints using tools like [Postman](https://www.postman.com/).

### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /api/v1/books | To create a new book ( Title(required), Author(required), Description(optional), PublishedYear(optional) ) |
| GET | /api/v1/books | To retrieve all book |
| GET | /api/v1/books/:id | To retrieve details of a single book ( id(required), Title(required), Author(required), Description(optional), PublishedYear(optional) ) |
| PUT | /api/v1/books/:id | To updated the details of a single book ( id(required), Title(required), Author(required), Description(optional), PublishedYear(optional) ) |
| DELETE | /api/v1/books/:id | To delete a single book ( id(required) ) |

### Authors
[Hasib](https://github.com/Hasib192)
