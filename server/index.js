const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const router = require('./routes');
const model = require('../database/index');

const app = express();

const port = 3000;

// add middleware
app.use(bodyParser.json());


app.listen(port, () => console.log(`Listening on port ${port}`));
