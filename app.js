const express = require('express');
const createError = require('http-errors');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
