const express = require("express");
const booksLogic = require("../logic/books-logic");
const Book = require("../models/Book");
const router = express.Router();

// GET http://localhost:3000/api/books
router.get("/", async (request, response) => {
    try {
        const books = await booksLogic.getAllBooksAsync();
        response.json(books);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;