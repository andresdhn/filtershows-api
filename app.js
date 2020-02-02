const dotenv = require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const app = express();
const port = process.env.PORT;

const indexRouter = require('./routes/index');

// Midlewares
app.use(express.json());

// Root
app.use('/', indexRouter);

// 404
app.use((req, res) => {
    return res.status(404).send({ error: 'Page ' + req.url + ' Not found.' });
});

// 500 - Any server error
app.use((err, req, res) => {
    return res.status(500).send({ error: err });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
