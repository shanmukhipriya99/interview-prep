// ✅ Problem: Search Insert Position
// 🔗 Link: https://leetcode.com/problems/search-insert-position/description/?envType=problem-list-v2&envId=array

// 📝 Description:
// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// 🔒 Constraints:
// - 1 <= nums.length <= 104
// - -104 <= nums[i] <= 104
// - nums contains distinct values sorted in ascending order.
// - -104 <= target <= 104

// 🔍 Approach:
// Since the array is sorted and we need O(log n) time, we use binary search.
// If the target is found at `mid`, return `mid`.
// If the target is less than nums[mid], shift high to mid - 1.
// If the target is greater than nums[mid], shift low to mid + 1.
// If the loop ends, `low` is the correct insert position.

// ⏱️ Time Complexity: O(log n) — due to binary search
// 🧠 Space Complexity: O(1) — constant space

// ⚠️ Edge Cases:
// - Target is less than all elements (should return 0)
// - Target is greater than all elements (should return nums.length)
// - Target is in the middle
// - Target equals the first or last element

// Solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (target < nums[mid]) {
      high = mid - 1;
    } else if (target > nums[mid]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return low; // this is the correct insertion point
};
