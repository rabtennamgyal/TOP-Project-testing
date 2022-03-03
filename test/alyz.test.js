const alyz = require('../code/alyz');

test('Does the function returns an object ?', () => {
    expect(alyz([1,8,3,4,2,6])).toEqual(obj = {average: 4, min: 1, max: 8, length: 6});
});
