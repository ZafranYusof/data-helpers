// Object helpers
function pick(obj, keys) { return keys.reduce((acc, k) => { if (k in obj) acc[k] = obj[k]; return acc; }, {}); }
module.exports = { pick };