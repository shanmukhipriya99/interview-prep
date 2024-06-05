/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const numMap = new Map();
  // count frequencies of elements
  for (let i = 0; i < nums.length; i++) {
    numMap.set(nums[i], numMap.get(nums[i]) + 1 || 1);
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

// <========Solution-2===========>
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let obj = {};
  let buckets = [];
  let result = [];
  for (const num of nums) {
    obj[num] = (obj[num] || 0) + 1;
  }

  for (let i = 0; i <= nums.length; i++) {
    // since the 0 index will not be touched
    buckets[i] = [];
  }

  for (let [key, val] of Object.entries(obj)) {
    buckets[val].push(key);
  }

  for (let i = buckets.length - 1; i > 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }

  return result.slice(0, k);
};
