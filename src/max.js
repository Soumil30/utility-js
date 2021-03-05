const head = require('./head');
const tail = require('./tail');

const max = (collection) => {

    if (collection.length == 0) {
        return undefined;
    }

    var currentValue = head(collection)
    if (collection.length == 1) {
        return currentValue;
    }

    var currentMax = max(tail(collection));
    return (currentValue > currentMax) ? currentValue : currentMax;
}
module.exports = max;