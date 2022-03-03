const cap = require('./cap');

test('Is the first letter capitalized ?', () => {
    expect(cap('rabten')).toBe('Rabten')
});

test('For more than one words', () => {
    expect(cap('tenzin')).toBe('Tenzin')
});