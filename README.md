# mongo-graphql

$ npm i mongoose cors joi express



0. models/Book - //
const mongoose = require("mongoose")
   //create Schema of a book: מה יש במוצר
   const BookSchema = mongoose.Schema({
   name: String,
   price: Number,
   stock: Number
   }, {
   versionKey: false // לא להוסיף פרמטר נוסף עבור גרסה
   })
   const Book = mongoose.model("Book", BookSchema, "books") // MODELNAME,SCHEMA,COLLECTION
   module.exports = Book;

0. DAL -
const mongoose = require("mongoose");
function connectAsync() {
    return new Promise((res, rej) => {
        mongoose.connect("mongodb://localhost:27017/Books", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (err, mongo) => {
            if (err) {
                rej(err)
                return
            }
            res(mongo)
        })

    })
}
module.exports = {
    connectAsync
}

1. controllers/book-controller.js
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

0. logic/books-logic :
const dal = require("../data/access-layer");
const Book = require("../models/Book")
dal.connectAsync()
    .then(db => console.log("We're connected to  books on mongodb"))
    .catch(err => console.log(err))
// function addProductAsync(product) {
//     return product.save();
// }
function getAllBooksAsync() {
    return new Promise((res, rej) => {
        Book.find({}, (err, books) => { //החזר את כל המוצרים = {}
            if (err) {
                rej(err)
                return
            }
            res(books)
        })
    })
}
module.exports = {
    getAllBooksAsync
}

0. 