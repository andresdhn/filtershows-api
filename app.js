const dotenv = require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const app = express();
const port = process.env.PORT;

const indexRouter = require('./routes/index');

app.use(express.json());
app.use('/', indexRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
