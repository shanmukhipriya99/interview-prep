<================ Question ========================>

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

<=========================== Notes =============================>

## Understanding the problem:
We have an array of numbers, and we have a target number. We need to check the array consists of a pair of two numbers whose sum is equal to the target number. We need to return the indices of the two numbers in any order.

## Approach - 1
We can have two *for* loops to check if the sum of the outer for loop's value and the inner for loop's value equals the target value. If so, we can return the two indices.
This would have a time complexity of *O(n^2)* and a space complexity of *O(1)*.

## Approach - 2
We know there is a single solution to the problem, and in such cases, we can use a **Set**.
We can declare a new set which is empty initially. Instead of using two for loops to check each element with the other elements, we can get the difference between the target and each element of the array and check if the difference is present in the input array. 
Another advantage of using a Set here is to deal with duplicates in the array.
We can begin with a for loop having an if condition that checks for the difference. We could directly check if the difference exists in the array, but this approach wouldn't account for the duplicates. So, the if condition should check whether the newly created Set has the difference or not.
If the Set has the difference value, then we can return the current index of the for loop and the index of the difference value obtained from the set. Otherwise, we can add the array number and its index to the Set for the next iterations.
This would have a time complexity of *O(n)* and a space complexity of *O(n)*.
