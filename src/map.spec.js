const map = require('./map');
const cube = require('./cube');
const identity = require('./identity');

describe('Map', () => {

    it(`map([], cube) should give "[]"`, () => {
        expect(map([], cube)).toEqual([]);
    });

    it(`map([1,2,3], identity) should give "[1,2,3]"`, () => {
        expect(map([1,2,3], identity)).toEqual([1,2,3]);
    });
})