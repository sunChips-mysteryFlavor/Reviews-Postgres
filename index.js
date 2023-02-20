const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv').config( {path: '.env'} );
// const ghAuth = require('./middleware/ghAuth.js');
// const decryptKey = require('./middleware/accessTokenAuthDecrypt.js');

const reviewsRouter = require('./server/routes.js');

const app = express();

app.use(express.json());

app.use(cors());
app.use(morgan('dev'));

//Github Authorization
// app.use(decryptKey);
// app.use(ghAuth);

// Routers
app.use('/', reviewsRouter);


app.listen(3020);
console.log(`Listening at 3020`);