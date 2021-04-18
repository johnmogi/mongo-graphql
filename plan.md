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

{
  'bookName' : 'the Lord Of The Rings',
   'bookDate' : '12-12-2020',
    'bookPrice' : 89,
    'genre' : 'Fantasy'
}

authors collection:
_id (auto)
authorName
books (connection to books by id - same as category)
birthDate
isAlive

{
  'authorName' : 'J R R Tolkien',
   'books' : ['607c3cff7e8e35221195bd58']
    'birthDate' : 89,
    'isAlive' : 0
}


