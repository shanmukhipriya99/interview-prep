// ✅ Problem: Two Sum
// 🔗 Link: https://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=array

// 📝 Description:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// 🔒 Constraints:
// - 2 <= nums.length <= 10^4
// - -10^9 <= nums[i] <= 10^9
// - Only one valid answer exists

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// 🔍 Approach/es:
// 1️⃣ Brute Force: Use two nested loops to check all pairs.
// 2️⃣ Optimized: Use a HashMap to store seen numbers and their indices while traversing the array.
//     - For each element `x`, check if `target - x` exists in the map.

// ⏱️ Time Complexity:
// - Brute Force: O(n^2): 2 for loops
// - Optimized HashMap: O(n): single for loop

// 🧠 Space Complexity:
// - Brute Force: O(1): no additional space
// - Optimized HashMap: O(n) for the map storage

// ⚠️ Edge Cases:
// - Array contains duplicate values that form the target
// - Negative numbers
// - Target is 0
// - Only one valid solution exists (as per constraints)

// ✅ Brute Force Solution
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// ✅ Optimized HashMap Solution
var twoSum = function (nums, target) {
  let numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(target - nums[i])) {
      return [numMap.get(target - nums[i]), i];
    }
    numMap.set(nums[i], i);
  }
  return [];
};
