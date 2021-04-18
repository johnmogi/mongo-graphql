const dal = require("../data/access-layer");
const Book = require("../models/Book")

dal.connectAsync()
    .then(db => console.log("We're connected to  books on mongodb"))
    .catch(err => console.log(err))

function addBookAsync(book) {
    return book.save();

}

function getAllBooksAsync() {
    return new Promise((res, rej) => {
        Book.find({}, (err, books) => {
            if (err) {
                rej(err)
                return
            }
            res(books)
        })
    })
}
module.exports = {

    getAllBooksAsync, addBookAsync
}