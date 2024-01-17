<================ Question ========================>

Given an integer array `nums`, return an array answer such that `answer[i]` is equal to the product of all the elements of nums except `nums[i]`.

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:

- 2 <= nums.length <= 105
- -30 <= nums[i] <= 30
- The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

#### Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

<=========================== Notes =============================>

## Understanding the problem:
We have an array of numbers. We need to return an array such that each element is the product of all other elements from the original array except the actual number in that position.

## Approach - 1
One pattern to notice here is that this can be achieved by multiplying the product of the left-hand elements and the product of the right-hand elements.
So, we can have three arrays: `result`, `prefix`, `suffix`.
The `prefix` array can contain the product of all elements from left to right, and the `suffix` array can contain the product of all elements from right to left. 
In the `result` array, we can multiply the elements of `prefix` and `suffix`.
#### This would have a time complexity of *O(n)* and a space complexity of *O(n)*.

## Approach - 2
This approach is similar to the first approach, except the way we store the elements. We'll have one `result` array. 
Declare `prefix` and `suffix` as variables with `1` as their initial value.
In the forward loop, we deal with prefix and result array. Loop through the input array, assign the prefix value to the current index of result. Then, update prefix to be the product of itself and the element at the current position in the input array.
In the backward loop, we deal with suffix and result array. Loop through the input array, update the value of result to be the product of itself and suffix. Then, update suffix to be the product of itself and the element at the current position in the input array.
Return the result array.
**Note:** The follow-up says that `the output array does not count as extra space for space complexity analysis`.
#### This would have a time complexity of *O(n)* and a space complexity of *O(1)*.
