function alyz(arr) {
    const len = arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const avg = arr.reduce((a, b) => a + b) / len;

    return obj = {
        average: avg,
        min: min,
        max: max,
        length: len
    }
};

module.exports = alyz;