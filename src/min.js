const head = require('./head');
const tail = require('./tail');

const min = (collection) => {

    var currentValue = head(collection)
    if (collection.length == 1) {
        return currentValue;
    }

    var currentMin = min(tail(collection));
    return (currentValue < currentMin) ? currentValue : currentMin;
}
module.exports = min;