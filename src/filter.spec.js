const filter = require('./filter');

describe('Filter', () => {

    it('filter([], x => true) should give "[]"', () => {
        expect(filter([], x => true)).toEqual([]);
    });
})