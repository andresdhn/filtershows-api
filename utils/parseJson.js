// ParseJson.js
//    returns: Boolean valid JSON format
const paseJson = str => {
    try {
        JSON.parse(JSON.stringify(str));
    } catch (e) {
        return false;
    }
    return true;
};

module.exports = paseJson;
