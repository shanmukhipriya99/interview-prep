<================ Question ========================>

There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).

Example 1:
Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1

Example 2:
Input: nums = [1,5,0,2,-3]
Output: 0
Explanation: The product of all values in the array is 0, and signFunc(0) = 0

Example 3:
Input: nums = [-1,1,-1,1,-1]
Output: -1
Explanation: The product of all values in the array is -1, and signFunc(-1) = -1
 
Constraints:

- 1 <= nums.length <= 1000
- -100 <= nums[i] <= 100

<=========================== Notes =============================>

## Understanding the problem:
We are given an array of numbers. We need to multiply all of the numbers in the array and determine if its +ve, -ve or equal to 0 and return a value accordingly.

## Approach - 1
We can use the reduce() method to perform the calculation and a ternary operation determine the sign. (Don't need to perform the complete multiplication)
*Note:* We need to pass an initial value, 1 to the accumulator in order to deal with empty arrays.
This would have a time complexity of *O(n)* and a space complexity of *O(1)*.
