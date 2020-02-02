function isValidJSON(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

if (isValidJSON(request)) {
    console.log('Not vaid');
} else {
    console.log('Valid');
}

let filtered = {
    respose: request.payload
        .filter(show => show.drm === true && show.episodeCount > 0)
        .map(data => ({
            image: data.image.showImage,
            slug: data.slug,
            title: data.title,
        })),
};

console.log(filtered);
