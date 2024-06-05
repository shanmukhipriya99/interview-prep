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
We can use the bucket sort approach to solve with time complexity of O(n).
- First, use the `map` or `object` to track the element and their frequency.
- Then use a for loop to create a bucket for every element in the input array. Basically an array of arrays, where each child array is a bucket and create one extra bucket as the 0th index won't be touched => `i<=nums.length`.
- Then populate the buckets based on the frequency. As in treat the frequency as the index and the element as the value to be pushed into the bucket.
- Now, use the bucket sort method.
- Since we are dealing with top k elements, we need to loop in decreasing fashion.
- For each bucket, if the bucket length is greater than 0, then push it into the result array. 
- Make sure you use the spread operatoe to push into the result array to flatten (handling multiple elements with same frequency).
- return the sliced result array.

Time complexity: O(n)

Space complexity: O(n)