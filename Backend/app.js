const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const app = express();
app.use(cors());





// Basic route
app.get('/', (req, res) => {
  res.send('Hello world');
});

module.exports = app;