<================ Question ========================>

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

`Input: nums = [1,2,3,1]`

`Output: true `

Example 2:

`Input: nums = [1,2,3,4]`

`Output: false`

Example 3:

`Input: nums = [1,1,1,3,3,4,3,2,4,2]`

`Output: true`
 
Constraints:

- 1 <= `nums.length` <= 105
- -109 <= `nums[i]` <= 109

<=========================== Notes =============================>

## Understanding the problem:
We have an array of numbers. We need to check if the array has any repeated numbers and return true even if there is a single duplicate number. False, in vice-versa.

## Approach - 1
Since we need to check for duplicates, we can create a Set() and compare the lengths of the set and the array.
#### This would have a time complexity of *O(n)* and a space complexity of *O(n)*.

## Approach - 2
Another approach is to check the frequency of the numbers. We can use Objects/HashMaps as the order of the elements doesn't matter.
#### This would have a time complexity of *O(n)* and a space complexity of *O(n)*.
