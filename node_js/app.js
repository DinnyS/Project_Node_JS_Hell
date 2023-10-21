const express = require('express');
const morgan = require('morgan');

const productRoutes = require('./peoples/peoples.controller');
const { connect, sync } = require('./config/database');

async function initializeDatabase() {
  await connect();
  await sync();
}

initializeDatabase();

const app = express();

// Setting ตัว cors
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};



// middleware มี cors และ morgan
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));

// routes
app.use('/peoples', productRoutes);


app.listen(8000, () => {
  console.log('Listening on port 8000');
});