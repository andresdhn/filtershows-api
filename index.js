const express = require('express');
const dotenv = require('dotenv').config({
    silent: process.env.NODE_ENV === 'production',
});
const PORT = process.env.PORT || 8080;

const parseJson = require('./utils/parseJson');
const filter = require('./utils/filter');

const handleRequest = (req, res) => {
    // Check invalid JSON format
    if (!parseJson(req.body)) {
        return res
            .status(400)
            .json({
                response: {
                    error: 'Could not decode request: JSON parsing failed',
                },
            });
    }

    // Filter request
    let newData = JSON.stringify(filter(req.body));
    return res.json(newData);
};

express()
    .use(express.json())
    .post('/', handleRequest)
    .all((req, res) => res.status(405).sed())
    .listen(PORT, () => console.log(`Listening on port ${PORT}`));
