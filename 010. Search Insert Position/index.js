/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// <======== Solution - 1 =================>

var searchInsert = function(nums, target) {
    if(nums.includes(target)) {
      return nums.indexOf(target);
    } 
    return [...nums, target].sort((a, b) => a-b).indexOf(target);  // sort() => O(nlogn)
};

// <========= Solution - 2 ============>

var searchInsert = function(nums, target) {
    let low = 0, high = nums.length - 1;
    let mid = 0;
    while(low <= high) {
      mid = Math.floor((low+high)/2);
      if(nums[mid] == target) {
        return mid;
      } else if (nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return low;
};
