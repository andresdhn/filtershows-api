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
    // Check invalid JSON format
    if (!parseJson(req.body)) {
        return res
            .status(400)
            .json({ error: 'Could not decode request: JSON parsing failed' });
    }

    try {
        let newData = filter(req.body);
        return res.status(200).json(newData);
    } catch (err) {
        return res
            .status(400)
            .json({ error: 'Could not decode request: JSON parsing failed' });
    }
});

module.exports = router;
