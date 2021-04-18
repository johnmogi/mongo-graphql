const mongoose = require("mongoose")

const AuthorSchema = mongoose.Schema({
    authorName: String,
    books: Array,
    birthDate: Date,
    isAlive: Boolean
}, {
    versionKey: false
})

const Author = mongoose.model("Author", AuthorSchema, "authors");

module.exports = Author;