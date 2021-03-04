const head = require('./head');
const tail = require('./tail');

const reduce = (collection, func, currentValue) => {
    if (collection.length == 0) {
        return currentValue;
    }
    if (currentValue != undefined) {
        return reduce(tail(collection), func, func(currentValue, head(collection)));
    }
    
    return reduce(tail(collection), func, head(collection));
}
module.exports = reduce;