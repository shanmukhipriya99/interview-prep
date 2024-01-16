<================ Question ========================>

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]
 
Constraints:

- 1 <= strs.length <= 104
- 0 <= strs[i].length <= 100
- strs[i] consists of lowercase English letters.

<=========================== Notes =============================>

## Understanding the problem:
We have an array of strings, and we need to group all anagrams and return the final array.

## Approach - 1
First, We create a new `Map()`. Then, we start a for loop and sort each string in the array of strings. If the sorted string already exists in the Map, then we push the unsorted string into the values array, else create a new array and add the unsorted string.
`key: sorted string` => `value: [unsorted strings]`

#### This would have a time complexity of *O(nk logk)* and a space complexity of *O(nk)*; where: n=> number of strings in the input array, k=> avg length of a string

## Approach - 2
We can implement the same using Objects as well.
