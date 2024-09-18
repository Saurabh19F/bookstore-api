const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// In-memory book array to store book data
let books = [];

// GET /books: Retrieve all books
router.get('/', (req, res) => {
  res.json(books);
});

// GET /books/:id: Retrieve a specific book by ID
router.get('/:id', (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
});

// POST /books: Add a new book
router.post('/', (req, res) => {
  const { title, author, isbn, publicationDate, genre } = req.body;
  const newBook = new Book(title, author, isbn, publicationDate, genre);
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id: Update an existing book by ID
router.put('/:id', (req, res) => {
  const { title, author, isbn, publicationDate, genre } = req.body;
  const bookIndex = books.findIndex(b => b.id === req.params.id);
  if (bookIndex === -1) return res.status(404).json({ message: 'Book not found' });

  // Update book data
  books[bookIndex] = { ...books[bookIndex], title, author, isbn, publicationDate, genre };
  res.json(books[bookIndex]);
});

// DELETE /books/:id: Delete a book by ID
router.delete('/:id', (req, res) => {
  const bookIndex = books.findIndex(b => b.id === req.params.id);
  if (bookIndex === -1) return res.status(404).json({ message: 'Book not found' });

  // Remove book from the array
  books.splice(bookIndex, 1);
  res.json({ message: 'Book deleted successfully' });
});

module.exports = router;
