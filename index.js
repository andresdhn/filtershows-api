const express = require('express');
const dotenv = require('dotenv').config({
    silent: process.env.NODE_ENV === 'production',
});
const PORT = process.env.PORT || 8080;

// const filter = require('./utils/filter');

express()
    .use(
        express.json({
            verify: (req, res, buf, encoding) => {
                try {
                    JSON.parse(buf);
                } catch (e) {
                    res.status(400).json({
                        error: 'Could not decode request: JSON parsing failed',
                    });
                    throw Error('invalid JSON');
                }
            },
        })
    )
    .post('/', (req, res) => {
        // Filter request
        let data = req.body;
        let newData = data.payload
            .filter(show => show.drm === true && show.episodeCount > 0)
            .map(data => ({
                image: data.image.showImage,
                slug: data.slug,
                title: data.title,
            }));

        res.json(JSON.stringify({ response: newData }));
    })
    .all((req, res) => res.status(405).sed())
    .listen(PORT, () => console.log(`Listening on port ${PORT}`));
