<================ Question ========================>

![image](https://github.com/shanmukhipriya99/interview-prep/assets/37501487/64110c67-b2ea-4aab-894c-221f6050e117)

<=========================== Notes =============================>

## Understanding the problem:
We are given an array of coin values, and we need to return the minimum amount of change that we cannot create with the given coin values.

## Approach - 1
Since we are dealing with minimum amount, we could sort the array in ascending order first. Then, we can declare a variable to hold the value of the change that can be created, with the values we have so far (initially, 0).
With every iteration, we update the value of change, such that, we can create all values upto the value of change.

For this, the logic is to have a for loop and at every iteration, we must compare the value of the coin and the change. 
If the value is less than or equal to change, then we should add the value of the coin to the change (as this case means that we can construct change upto the value of change).
Else, we must return the value of change+1 as we can construct up to change and so we the minimum non-constructible change would be change+1.
This would have a time complexity of *O(nlogn)* and a space complexity of *O(1)*.
