/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 0) {
        return false
    }
    let stack = [];
    let brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    if(!brackets[s[0]]) return false;
    for(let i = 0; i < s.length; i++){
        if(brackets[s[i]]) {
            stack.push(s[i]);
        } else if ( brackets[stack[stack.length - 1]] === s[i]) {
            stack.pop();
        } else return false;
    }
    return stack.length === 0
};
