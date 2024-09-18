const { v4: uuidv4 } = require('uuid');

class Book {
constructor(title, author, isbn, publicationDate, genre) {
    this.id = uuidv4(); // Generate a unique ID for each book
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.publicationDate = publicationDate;
    this.genre = genre;
}
}

module.exports = Book;
