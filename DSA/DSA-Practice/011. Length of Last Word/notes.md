<================ Question ========================>

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 
Constraints:

- 1 <= s.length <= 104
- s consists of only English letters and spaces ' '.
- There will be at least one word in s.

<=========================== Notes =============================>

## Understanding the problem:
We are given a string that can contain words and spaces. We need to return the length of the last word in the string, keeping the spaces that may exist at the end.

## Approach - 1
We can use the trim() method to remove the whitespaces at the start and end of the string, then convert it into an array (`split('')`) and return the length of the last value in the array.
This would have a time complexity of *O(n)* and a space complexity of *O(n)*.
