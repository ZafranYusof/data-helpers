const { chunk } = require('./arrays');
const { pick } = require('./objects');

function flatten(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

function unique(arr) {
  return [...new Set(arr)];
}

function omit(obj, keys) {
  return Object.keys(obj)
    .filter(k => !keys.includes(k))
    .reduce((acc, k) => { acc[k] = obj[k]; return acc; }, {});
}

function merge(...objects) {
  return objects.reduce((acc, obj) => {
    Object.keys(obj).forEach(key => {
      if (typeof acc[key] === 'object' && typeof obj[key] === 'object') {
        acc[key] = merge(acc[key], obj[key]);
      } else {
        acc[key] = obj[key];
      }
    });
    return acc;
  }, {});
}

module.exports = { chunk, flatten, unique, pick, omit, merge };