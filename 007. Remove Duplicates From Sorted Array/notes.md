<================ Question ========================>

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.

<=========================== Notes =============================>

## Understanding the problem:
We have a sorted array in ascending order. We need to remove the duplicates and return the number of unique elements.

## Approach - 1
Since we are dealoing with unique elements, we can start by creating a new Set. Then, using a for loop and the add() method, we can add all the elements of the input array to this set (this set now contains only the unique elements of the input array).
At this point, the length of set (set.size) and returning it should suffice but we have a custom judge here that tests input array. Therefore, we have to perform the following steps.
Now, let's create a new array and copy the elements of the set into it using the spread operator.
Then using another for loop, lets copy the elements of the new array into the input array. The input array now consists of only the unique elements and we can return the length of this array.
This would have a time complexity of *O(n)* and a space complexity of *O(n)*.

