function cap(str) {
    const x = str.split('')[0].toUpperCase();
    const y = str.split('').splice(1).join('');

    return x + y;
}

module.exports = cap;