const reduce = require('./reduce');

describe('Reduce', () => {

    it('reduce([],(x,y)=>x+y) should be undefined', () => {
        expect(reduce([], (x,y) => x + y)).toEqual(undefined);
    });
})