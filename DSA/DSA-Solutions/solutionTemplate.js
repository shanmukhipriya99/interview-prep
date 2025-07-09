// ✅ Problem: Two Sum
// 🔗 Link: https://leetcode.com/problems/two-sum/

// 📝 Description:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// 🔒 Constraints:
// - 2 <= nums.length <= 10^4
// - -10^9 <= nums[i] <= 10^9
// - Only one valid answer exists

// 🔍 Approach:
// 1. Iterate through the array while storing visited numbers in a hash map.
// 2. For each number, check if the complement (target - num) exists in the map.
// 3. If yes, return the indices.

// ⏱️ Time Complexity: O(n)
// 🧠 Space Complexity: O(n)

// ⚠️ Edge Cases:
// - Array with duplicate numbers
// - Negative numbers
// - Large input size

// Solution
