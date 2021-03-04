const reduce = require('./reduce');

describe('Reduce', () => {

    it('reduce([],(x,y)=>x+y) should be "undefined"', () => {
        expect(reduce([], (x,y) => x + y)).toEqual(undefined);
    });

    it('reduce([],v(x,y)=>x+y,10) should be "10"', () => {
        expect(reduce([], (x,y) => x + y, 10)).toEqual(10);
    });
})