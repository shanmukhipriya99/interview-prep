// ✅ Problem: Merge Sorted Array
// 🔗 Link: https://leetcode.com/problems/merge-sorted-array/description/?envType=problem-list-v2&envId=array

// 📝 Description:
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// 🔒 Constraints:
// - nums1.length == m + n
// - nums2.length == n
// - 0 <= m, n <= 200
// - 1 <= m + n <= 200
// - -10^9 <= nums1[i], nums2[j] <= 10^9

// 🔍 Approach:
// Start from the end of nums1 (index m + n - 1) and compare elements from nums1 and nums2 backwards.
// Place the larger of the two at the current position in nums1.
// Decrement the appropriate pointers (i, j, k) accordingly.
// If nums2 has remaining elements after nums1 is exhausted, copy them directly.

// ⏱️ Time Complexity: O(m + n)
// 🧠 Space Complexity: O(1) => in-place

// ⚠️ Edge Cases:
// - If nums2 is empty (n === 0), nums1 remains unchanged.
// - If nums1 is empty (m === 0), copy all of nums2 into nums1.
// - If nums1 has all larger elements than nums2, they will be moved to the end correctly.
// - Don't forget to handle leftover nums2 elements at the beginning if nums1 runs out first.

// ✅ Solution
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};
