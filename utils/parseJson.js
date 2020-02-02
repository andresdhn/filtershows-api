// ParseJson.js
// Utitlity function
//      returns: Boolean valid JSON format
const paseJson = str => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

module.exports = paseJson;
