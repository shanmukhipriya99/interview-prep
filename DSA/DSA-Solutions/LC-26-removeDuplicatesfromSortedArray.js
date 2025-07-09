// ✅ Problem: Remove Duplicates from Sorted Array
// 🔗 Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=problem-list-v2&envId=array

// 📝 Description:
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
// - Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// - Return `k`.

// 🔒 Constraints:
// - 1 <= nums.length <= 3 * 10^4
// - -100 <= nums[i] <= 100
// - nums is sorted in non-decreasing order.

// 🔍 Approach:
// We use the **two-pointer technique**, where:
// - One pointer `i` reads each element.
// - Another pointer `insertAt` keeps track of the position to write the next unique element.
// Starting from the second element, we compare the current element with the previous one. If it's different, it's a new unique element, and we move it to the `insertAt` position.
// After the loop, the first `insertAt` elements are the unique ones, and we return `insertAt` as the count `k`.

// ⏱️ Time Complexity: O(n)
// We traverse the array once using a single loop.

// 🧠 Space Complexity: O(1)
// No extra space is used; the input array is modified in-place.

// ⚠️ Edge Cases:
// - Array has only one element → should return 1.
// - All elements are the same → should return 1.
// - All elements are unique → should return the array length.
// - Large input array → should still run efficiently due to O(n) time.

// ✅ Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let insertAt = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[insertAt] = nums[i];
      insertAt++;
    }
  }
  return insertAt;
};
