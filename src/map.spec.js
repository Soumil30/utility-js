const map = require('./map');
const cube = require('./cube');

describe('Map', () => {

    it(`map([], cube) should give "[]"`, () => {
        expect(map([], cube)).toEqual([]);
    });
})