<================ Question ========================>
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

- 1 <= s.length, t.length <= 5 * 104
- s and t consist of lowercase English letters.

## Understanding the problem:
We have two strings passed as inputs and we need to check they are anagrams and return true if they are, else false.

## Approach - 1
We can count the frequency of the characters and then check if the number of times each character is repeated is the same for both strings.

#### This would have a time complexity of *O(n)* and a space complexity of *O(n)*.

