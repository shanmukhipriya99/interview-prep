// ✅ Problem: Remove Element
// 🔗 Link: https://leetcode.com/problems/remove-element/description/?envType=problem-list-v2&envId=array

// 📝 Description:
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// 🔒 Constraints:
// - 0 <= nums.length <= 100
// - 0 <= nums[i] <= 50
// - 0 <= val <= 100

// 🔍 Approach:
// Use the **Two Pointer - Read & Write** technique.
// - Use `i` as the read pointer to iterate through the array.
// - Use `insertAt` as the write pointer to overwrite values not equal to `val`.
// This allows us to modify the array in-place without using extra memory.

// ⏱️ Time Complexity: O(n)
// 🧠 Space Complexity: O(1)

// ⚠️ Edge Cases:
// - nums is an empty array → should return 0
// - All elements are equal to val → should return 0
// - No element is equal to val → should return nums.length

// ✅ Example:
// Input: nums = [3, 2, 2, 3], val = 3
// Output: 2 → nums becomes [2, 2, _, _] (order beyond k doesn't matter)

// Solution
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let insertAt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[insertAt] = nums[i];
      insertAt++;
    }
  }
  return insertAt;
};
