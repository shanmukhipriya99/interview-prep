/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const numMap = new Map();
  // count frequencies of elements
    for (let i = 0; i < nums.length; i++) {
        numMap.set(nums[i], (numMap.get(nums[i]) + 1) || 1);
    }
    let result = [];
  // populate the result array
    for (let [key, value] of numMap) {
        result.push([key, value]);
    }
  // sort the result array based on values
    result.sort((a, b) => b[1] - a[1]);
  // return the first k keys
    return result.slice(0, k).map((x) => x[0]);
};
