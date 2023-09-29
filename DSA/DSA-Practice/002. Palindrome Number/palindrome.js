/**
 * @param {number} x
 * @return {boolean}
 */

// <=============== Solution-1 ======================>
// x.toString(): Converting an integer to a string takes O(log(x)) time
// .split('').reverse().join(''): This series of operations involves splitting the string into an array of characters, reversing the array, and joining it back into a string. Each of these operations takes O(n) time
// Number(...): Converting the reversed string back to a number takes O(n) time
var isPalindrome = function(x) {
    return Number(x.toString().split('').reverse().join('')) === x;
};

// <=============== Solution-2 ======================>
// O(logN)
var isPalindrome = function(x) {
    let reversed = 0;
    let num = x;
    if(x < 0) {
        return false;
    }
    while(x>0) {
        reversed = reversed * 10 + (x % 10); // get the last digit of x and add it to reversed
        x = Math.floor(x/10); // remove the last digit of x
    }
    return num === reversed;
};
