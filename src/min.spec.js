const min = require('./min');

describe('Min', () => {

    it('min([1,2,3,4]) should be "1"', () => {
        expect(min([1,2,3,4])).toEqual(1);
    });

    it('min([]) should be "undefined"', () => {
        expect(min([])).toEqual(undefined); 
     });
})