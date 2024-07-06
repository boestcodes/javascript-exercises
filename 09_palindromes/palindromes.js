const palindromes = function (str) {
    const strReversed = str
        .replace(/[^a-zA-Z0-9]/g, '')
        .toLowerCase()
        .split("")
        .reverse()
        .join("")
    return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === strReversed;
    
};

// Do not edit below this line
module.exports = palindromes;
