/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        'I': 1, 
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let number = 0;
    for(let i=0; i<s.length; i++) {
        if(i+1 < s.length && roman[s[i]] < roman[s[i+1]]) {
            number += (roman[s[i+1]] - roman[s[i]])
            i++
        } else {
            number += roman[s[i]]
        }
    }
    return number;
};
