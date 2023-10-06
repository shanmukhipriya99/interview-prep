<================ Question ========================>

![image](https://github.com/shanmukhipriya99/interview-prep/assets/37501487/11989577-18ad-480e-ab23-429da6da48bd)

<=========================== Notes =============================>

## Understanding the problem:
We have two arrays and we have to check if the second array is a subsequence of the first array. 

## Approach - 1
We can declare an integer variable, initially 0, to handle the index of the second array. 
Then, using a for loop, we can iterate through each element of the first array and check if the value is equal to value of the second array at the declared index. If equal, the increment the declared index.
At the end, we can compare the length of the second array and the value of the index.
This would have a time complexity of *O(n)* and a space complexity of *O(1)*.
