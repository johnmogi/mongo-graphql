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