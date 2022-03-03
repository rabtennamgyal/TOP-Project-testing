const rev = require('./rev');

test('Is the string reversed ?', () => {
    expect(rev('rabten')).toBe('netbar');
});