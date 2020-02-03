const dotenv = require('dotenv').config({
    silent: process.env.NODE_ENV === 'production',
});
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

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

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
