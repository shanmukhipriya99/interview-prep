<================ Question ========================>

You are given a string `word` and an array of strings `forbidden`.

A string is called valid if none of its substrings are present in forbidden.

Return the length of the longest valid substring of the string word.

A substring is a contiguous sequence of characters in a string, possibly empty.

 

Example 1:

Input: word = "cbaaaabc", forbidden = ["aaa","cb"]
Output: 4
Explanation: There are 11 valid substrings in word: "c", "b", "a", "ba", "aa", "bc", "baa", "aab", "ab", "abc" and "aabc". The length of the longest valid substring is 4. 
It can be shown that all other substrings contain either "aaa" or "cb" as a substring. 


Example 2:

Input: word = "leetcode", forbidden = ["de","le","e"]
Output: 4
Explanation: There are 11 valid substrings in word: "l", "t", "c", "o", "d", "tc", "co", "od", "tco", "cod", and "tcod". The length of the longest valid substring is 4.
It can be shown that all other substrings contain either "de", "le", or "e" as a substring. 
 

Constraints:

1 <= word.length <= 105
word consists only of lowercase English letters.
1 <= forbidden.length <= 105
1 <= forbidden[i].length <= 10
forbidden[i] consists only of lowercase English letters.

<=========================== Notes =============================>

## Understanding the problem:
We are given two inputs: `word` and `forbidden`, which are a `string` and an `array of strings` resp. We need to determine the length of the longest substring in `word` that is not present in `forbidden`.

## Approach - 1
One-way could be to use brute-force and check for every substring but this wouldn't be efficient.
So, we could use the sliding window technique to solve this. To begin with, we'd need two pointers, `l` and `r`, both pointing to the first char in the `word`. We can create a `new Set(forbidden)` to make searching more efficient.
In the first for loop, we can traverse by incrementing `r` and in the second/inner for loop, we need to look at the substrings. In the second for loop, we can check for substrings either from the start of from the end.
Checking from the start would result in repetitive checking and therefore, it would be optimal to check form the end. And if the substring is present in the forbiddenSet, we can increment the value of `l` to `start+1`.

Note: The second for loop should make sure that `start>=l` and `r-start<10` to improve efficiency.

Keep track of the length of the substrings.

This would have a time complexity of *O(n)*, where n=>length of word and a space complexity of *O(1)*.
