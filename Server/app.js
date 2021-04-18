const express = require("express");
const cors = require("cors");
const bookController = require("./controllers/book-controller");
const server = express();
const PORT = 3000;

server.use(cors());
server.use(express.json());
server.use("/api/books", bookController);

server.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));