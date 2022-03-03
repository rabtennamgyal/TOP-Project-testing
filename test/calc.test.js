const calc = require('./calc');

test('are all the arthemetics correct ?', () => {
    expect(calc.add(1, 2)).toBe(3)
    expect(calc.sub(1, 2)).toBe(-1)
    expect(calc.mul(1, 2)).toBe(2)
    expect(calc.div(1, 2)).toBe(0.5)
});