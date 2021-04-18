the idea is to use a prebuilt mongo Server
and hook into it with graphql

explore various graphql features.

install:
robo3t

create a new mongo db:

books database:

books collection:
_id (auto)
bookName
bookDate
bookPrice
genre

authors collection:
_id (auto)
authorName
books (connection to books by id - same as category)
birthDate
isAlive


