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

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000', // หรือโดเมนต้นทางของแอป React ของคุณ
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));

// Setting up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));

// Setting up routes
app.use('/peoples', productRoutes);

// Creating a server
app.listen(8000, () => {
  console.log('Listening on port 8000');
});