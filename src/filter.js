const head = require('./head');
const tail = require('./tail');

const filter = (collection, func) => {
    if (collection.length == 0) {
        return collection;
    }

    var filteredArray = filter(tail(collection), func);
    if (func(head(collection))) {
        filteredArray.unshift(head(collection));
    }
    return filteredArray;
}
module.exports = filter;