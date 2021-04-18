const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({
    bookName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30
    },
    bookDate: Number,
    bookPrice: Number,
    genre: String
}, {
    versionKey: false
})

const Book = mongoose.model("Book", BookSchema, "books");

module.exports = Book;