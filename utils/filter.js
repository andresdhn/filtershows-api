// Filter.js
//    returns: filtered JSON data
const filter = data => {
    return {
        response: data.payload
            .filter(show => show.drm === true && show.episodeCount > 0)
            .map(data => ({
                image: data.image.showImage,
                slug: data.slug,
                title: data.title,
            })),
    };
};

module.exports = filter;
