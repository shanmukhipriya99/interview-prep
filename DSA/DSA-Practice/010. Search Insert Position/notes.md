<================ Question ========================>

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity. 

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
 
Constraints:

- 1 <= nums.length <= 104
- -104 <= nums[i] <= 104
- nums contains distinct values sorted in ascending order.
- -104 <= target <= 104

<=========================== Notes =============================>

## Understanding the problem:
We have a sorted array and a target. If the target is present in the array, we need to return the index of it in the array, else we need to return the index, if it were present in the array.

## Approach - 1
We can use the `includes()` method in this case.
The first case is where the target is present in the array, for which we can use an if block to check if the array includes the target and if so, return its index using `indexOf()`.
The second case is where the target is not present in the array. Here, we can insert the target into the array `[...arr, target]`, sort it `sort()`, and then return the targets index.
This would have a time complexity of *O(nlogn)* (sort() has a time complexity of O(nlogn)) and a space complexity of *O(n)*.

## Approach - 2
We can use the binary search approach in this case.
We can have a `low`, `high`, and `mid`. While `low <= high`, calculate `mid = Math.floor((low+high)/2)`. Compare value at mid and target and proceed. At the end, returning the `low` will suffice.
This would have a time complexity of *O(logn)* (since search space is halved in each iteration) and a space complexity of *O(1)*.
