const express = require('express');

const productRoutes = require('./routes/people');
const morgan = require('morgan');

const app = express();

// Setting up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));

// Setting up routes
app.use('/people', productRoutes);

// Creating a server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});