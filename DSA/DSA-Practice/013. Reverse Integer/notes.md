<================ Question ========================>

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Constraints:

-2^31 <= x <= 2^31 - 1

<=========================== Notes =============================>

## Understanding the problem:
We are given a number and we need to return the reversed number keeping the constraints in mind.

## Approach - 1
We can try converting the number into a string, splitting it (`split('')`), and then reversing it.
We should have an if-else condition block to check if the input is negative, if so, we have to remove the negative sign before reversing the number
(`slice()`). Then, before returning the reversed number, we need to check if it falls within the range (-2^31 <= x <= 2^31 - 1) and return a value accordingly.
<img width="695" alt="image" src="https://github.com/shanmukhipriya99/interview-prep/assets/37501487/c61e292a-b5a8-4f6b-8758-0c6a8b099361">

<img width="670" alt="image" src="https://github.com/shanmukhipriya99/interview-prep/assets/37501487/56e87de1-91d4-4fcb-878b-c1141e46d746">


