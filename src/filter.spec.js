const filter = require('./filter');

describe('Filter', () => {

    it('filter([], x => true) should give "[]"', () => {
        expect(filter([], x => true)).toEqual([]);
    });

    it('filter([1,2,3], x => true) should give "[1,2,3]"', () => {
        expect(filter([1,2,3], x => true)).toEqual([1,2,3]);
    });
})