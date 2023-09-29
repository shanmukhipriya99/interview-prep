<================ Question ========================>

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

<=========================== Notes =============================>

## Understanding the problem:
We will be given a string and need to determine if the string is valid. The validity conditions are given above.

## Approach - 1
First, we can check if the given string is empty; if so, we return false. The next step would be to declare an object, where the opening braces are the keys and the closing braces are the values. Then, we declare an empty array. 
In a for loop, for each character in the string, we check if that character is a key in the object, if so, we push it into the array (To keep track of all the opening braces). In the else condition, we take the last char in the array and check if this value in the object id equal to the current character.
If so, we pop the last element in the array. Else, we return false. Ultimately, we return true if the array length is 0 and false otherwise.
This would have a time complexity of *O(n)* and a space complexity of *O(n)*.

