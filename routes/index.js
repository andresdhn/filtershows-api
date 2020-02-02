const express = require('express');
const router = express.Router();
const parseJson = require('../utils/parseJson');
const filter = require('../utils/filter');

router.get('/', (req, res) => {
    res.send({ response: 'Invalid request' });
});

router.put('/', (req, res) => {
    res.send({ response: 'Invalid request' });
});

router.delete('/', (req, res) => {
    res.send({ response: 'Invalid request' });
});

router.post('/', (req, res) => {
    let newData = filter(req.body);
    res.status(200).json(newData);
});

module.exports = router;
