function cae(str) {
    let upperCase = str.toUpperCase()
    let regex = /[A-Z]/g

    let code = []

    for (let i = 0; i < upperCase.length; i++) {
        if (upperCase[i].match(regex)) {
            code.push(upperCase.charCodeAt(i))
        } else {
            code.push(upperCase[i])
        }
    }

    let ans = []

    for (let i = 0; i < code.length; i++) {
        if (typeof code[i] === 'number') {
            if (code[i] <= 77) {
                ans.push(String.fromCharCode(code[i] + 13))
            } else {
                ans.push(String.fromCharCode(code[i] - 26 + 13))
            }
        } else {
            ans.push(code[i])
        }
    }

    return ans.join('').toLowerCase();
}

module.exports = cae;