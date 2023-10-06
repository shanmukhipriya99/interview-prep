<================ Question ========================>

![image](https://github.com/shanmukhipriya99/interview-prep/assets/37501487/272f6c54-0794-448c-95c9-8f61e949931d)

<=========================== Notes =============================>

## Understanding the problem:
We are given an array of integers that are sorted in ascending order. We need to square each number in the array and ensure that the new array is sorted at the end.

## Approach - 1
We can use the map() and sort() methods to square each number in the array and sort the resulting array.
This would have a time complexity of *O(nlogn)* and a space complexity of *O(n)*.

## Approach - 2
We can have two pointers comparing the lowest and highest values as we do in a binary search. We can iterate through the input array from right to left and compare the absolute values at low and high.
Whichever value is greater, add that value to the current index in a new array and increment or decrement the low and high values accordingly. (Could be solved with for() or while()).
This would have a time complexity of *O(n)* and a space complexity of *O(n)*.
