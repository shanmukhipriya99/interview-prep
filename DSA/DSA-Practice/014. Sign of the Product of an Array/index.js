/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    return nums.reduce((init, num) => init * num == 0 ? 0 : init * num < 1 ? -1 : 1, 1)
};
