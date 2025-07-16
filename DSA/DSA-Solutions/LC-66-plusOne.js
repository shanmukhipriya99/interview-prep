// ✅ Problem: Plus One
// 🔗 Link: https://leetcode.com/problems/plus-one/description/?envType=problem-list-v2&envId=array

// 📝 Description:
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// 🔒 Constraints:
// - 1 <= digits.length <= 100
// - 0 <= digits[i] <= 9
// - digits does not contain any leading 0's.

// 🔍 Approach:
// Start iterating from the last digit (least significant digit).
// - If the digit is not 9, simply increment it and return the array.
// - If it is 9, set it to 0 and continue checking the digit to the left.
// - If all digits are 9, they’ll all be set to 0, and a 1 needs to be inserted at the beginning (e.g., [9,9] → [1,0,0]).

// ⏱️ Time Complexity: O(n)
// 🧠 Space Complexity: O(n) in worst case (e.g., when a new digit is added)

// ⚠️ Edge Cases:
// - Input is [9] → Output should be [1, 0]
// - Input is [9, 9, 9] → Output should be [1, 0, 0, 0]
// - Input is [1, 2, 3] → Output should be [1, 2, 4]

// Solution
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i] += 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};
