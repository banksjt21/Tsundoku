# TSUNDOKU

![Tsundoku Banner](/public/images/banner.png "Tsundoku")




#### Table of Contents
> 1. [Tsundoku](#tsundoku)
> 2. [Introduction](#introduction)
> 3. [Features](#features)
> 4. [Technologies Used](#technologies-used)




<br><br>

## Introduction

Tsundoku refers to the phenomenon of acquiring reading materials, but letting them pile up in one's home without reading them. It is also used to refer to books ready for reading later when they are on a bookshelf.

Tsundoku, as an app, was developed to allow users to easily manage their ever-growing book collection. Books can be added to your collection by simplying utilizing the search page. This feature, which is powered by the Google Books API, returns a page of ten books which closely match your search terms. Once the desired book is located, simply press the 'Add to Collection' button and Voilà!

Note: This app is currently in its alpha phase and is still in active development. As such, certain pages, features, etc. and your saved books may be added, modified, and/or deleted without notice.

Tsundoku is available for preview [here](https://tsundoku-crpc.onrender.com).




<br><br>

## Features

#### Current features:
- [x] User Registration
- [x] Add a Book via Search (using the Google Books API)
- [x] Add a Book Manually
- [x] Edit Book Details
- [x] Delete Books
- [x] Update book medium as 'Physical / Digital / Audio'
- [x] Update book status as 'Read / Unread'

#### Potential upcoming features:
- [ ] Update book status as 'Owned / Wishlist'
- [ ] Add notes to book details (reflections, thoughts, study reminders)
- [ ] Add links for book purchasing
- [ ] Search for a book within a user's collection
- [ ] Pagination for large collections
- [ ] Sorting of books (category, publication date, author)
- [ ] Add additional book details
- [ ] Responsive website
- [ ] Forgot username / password
- [ ] Accessibility options (screen reader, language translation)




<br><br>

## Technologies Used

Tsundoku was built using the HTML, CSS, and JavaScript languages.
It was developed using the MERN stack:
| [MONGODB](https://www.mongodb.com/) | [EXPRESS](https://expressjs.com/) | [REACT](https://reactjs.org/) | [NODE](https://nodejs.org/en/) |
| :-----------: | :-----------: | :-----------: | :-----------: |
| ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white) | ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express&logoColor=white) | ![React.js](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white) |
| MongoDB is a Document Database, which stores all schema and records in documents using a JSON (JavaScript Object Notation) like syntax. | Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js | React is a free and open-source front-end JavaScript library for building user interfaces based on UI components | Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser. |




#### CRUD Operations

| Operation  | API route| HTTP method |
| ----------- | ----------- | ------- |
| Fetch all books in a user's collection | /api/books | GET |
| Create/Add a book | /api/books | POST |
| Update a book by id  | /api/books/q/:id | PUT |
| Delete a book by id | /api/books/q/:id | DELETE |
| Fetch a specific book by id  | /api/books/q/:id | GET |