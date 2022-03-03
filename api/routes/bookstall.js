const bookstall = require('express').Router();
const booksController = require('../controller/bookstallController')

//Heartbeat route
bookstall.get('/heartbeat', (request, response) => {
    response.send("Application is live.")
})

// Fethc all books 
bookstall.get('/books', booksController.getAllBooks)

// Get book by id
bookstall.get('/books/:id', booksController.getBookByID)

module.exports = bookstall;