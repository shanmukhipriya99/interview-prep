<================ Question ========================>

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

Example 3:

Input: nums = [1, 2], k = 2
Output: [1, 2]
Explanation: You gotta find 2 most frequent elements in list. It does not mean to return elements with occurrence/frequency of 2 or more. So if you count occurrence of each element, then sort it by highest to lowest occurrence, your answer will be top 2 elements in that list. In this case both element [1,2] have occurred once and we need to return top 2 elements with highest occurrence so answer is [1,2].

Constraints:

- 1 <= nums.length <= 105
- -104 <= nums[i] <= 104
- k is in the range [1, the number of unique elements in the array].
- It is **guaranteed** that the answer is unique.

<=========================== Notes =============================>

## Understanding the problem:
We have an array of numbers, and we have a number `k`. We need to return the `k` most frequent elements in the array.

## Approach - 1
First, use a `map` to count the frequency of the elements. Then, create an array and push the key-value pairs to the array. Then sort the array and return the sliced keys. 

#### This would have a time complexity of *O(nlogn)* and a space complexity of *O(n)*.

## Approach - 2
