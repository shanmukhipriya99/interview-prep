/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ans;
    if (x < 0) {
        ans = x.toString().split('').slice(1).reverse().join('');
        return ans*-1 >= (-2)**31 ? ans*-1 : 0;
    } else {
        ans = x.toString().split('').reverse().join('');
        return ans <= (2)**31-1 ? ans : 0;
    }
};
