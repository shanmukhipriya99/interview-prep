<================ Question ========================>

Given an integer x, return true if x is a palindrome and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1

<=========================== Notes =============================>

## Understanding the problem:
The function gets an integer as an input, and we need to determine if it is a palindrome and return a boolean value accordingly.

## Approach - 1
We can convert the number to a string, then to an array, reverse it, and compare the new value to the original value. If they are the same, we return true; else, we return false.
This would have a time complexity of *O(n)* and a space complexity of *O(n)*.

## Approach - 2
Another approach is to perform mathematical operations on the number to reverse it and then compare it to the original value. If they are the same, we return true; else, we return false.
This would have a time complexity of *O(logn)* and a space complexity of *O(1)*.
