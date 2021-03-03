const head = require('./head');
const tail = require('./tail');

const map = (collection, func) => {
    if (collection.length == 0) {
        return collection;
    }

    var mappedArray = map(tail(collection), func);
    mappedArray.unshift(func(head(collection)));
    return mappedArray;
}
module.exports = map;