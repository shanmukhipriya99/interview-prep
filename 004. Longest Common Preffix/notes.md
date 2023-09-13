<================ Question ========================>

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

<=========================== Notes =============================>

## Understanding the problem:
We are given an array of strings as the input. Our aim is to identify the longest common prefix among all the strings in the array and return it. 
If there is no common value, we return an empty string.

## Approach - 1
We can declare an empty string, prefix, first. Then, we use a for loop to iterate over all the characters of the first string in the array. 
In every iteration, we store the char at that index in a variable, and have an if condition that uses the **every()** method to check:
`strs.every(str => str[i] === char)` => `char = strs[0][i]`. In the cases where the if condition is true, add this char to the prefix. Else, break the for loop and return the prefix.
This would have a time complexity of *O(m*n)* : m => length of the first string in the array; n => length of the array
A space complexity of *O(n)* : n => length of the shortest string in the array

