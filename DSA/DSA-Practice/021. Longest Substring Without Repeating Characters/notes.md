<================ Question ========================>

Given a string `s`, find the length of the longest substring without repeating characters.

Example 1:

Input: `s = "abcabcbb"`
Output: `3`
Explanation: The answer is "`abc`", with the length of 3.

Example 2:

Input: `s = "bbbbb"`
Output: `1`
Explanation: The answer is "`b`", with the length of 1.

Example 3:

Input: `s = "pwwkew"`
Output: `3`
Explanation: The answer is "`wke`", with the length of 3.

Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:

- `0 <= s.length <= 5 * 104`
- `s` consists of English letters, digits, symbols and spaces.

<=========================== Notes =============================>

## Understanding the problem:
We are given an input: `s`, which is a `string`. We need to determine the length of the longest substring without any repeated characters.

## Approach - 1

We could try solving the problem with something similar to the `sliding window` approach. This would require having two pointers and two for loops.
The first for loop to traverse through the string, and the second for loop to make sure that there isn't any repetition in the substring.
But this would give a time complexity of `O(n^2)` and a space complexity of `O(1)`.

## Approach - 2

We could combine the usage of the `sliding window` approach and `set/map`.
We could have the first for loop as in the previous approach, inside which we can have an if block to check if the char has already been traversed previously in the current substring.
This would give a time complexity of `O(n)` and a space complexity of `O(n)`.