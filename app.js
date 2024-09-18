const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');

const app = express();
const PORT = 3000;

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Book routes
app.use('/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
