<================ Question ========================>

<img width="711" alt="image" src="https://github.com/shanmukhipriya99/interview-prep/assets/37501487/f13a0aea-2bff-462b-b33b-b295c7cf273d">

<img width="711" alt="image" src="https://github.com/shanmukhipriya99/interview-prep/assets/37501487/0ddc7439-0c07-45ed-9638-a61ca22fc4a5">



<=========================== Notes =============================>

## Understanding the problem:
We are given a matrix and we need to return the transpose of the matrix.

## Approach - 1
We can declare a variable rows to keep track of the rows of the new/transposed matrix and also declare a new empty array.
We can use a while loop such that it works as long as the value of row is less than `matrix[0].length` (the number of columns in the new matrix).
For every row, we need to initialize a sub-array within the new matrix to prevent errors.
Then, using a for loop, we can use the following logic: `transpose[row][i] = matrix[i][row]`, increment row after the for loop and finally return transpose.
This would have a time complexity of *O(m*n)* and a space complexity of *O(m*n)*, where m*n is the size of the matrix.

## Approach - 2
The second apporach uses a similar logic but utilizes two for loops instead. The first for loop for `matrix.length` and the second for `matrix[i].length`.
Since we are dealing with the old matrix's rows first, we need to have an if block to check if the row in the transpose is initialized or not, then follow the same logic.
This would have a time complexity of *O(m*n)* and a space complexity of *O(m*n)*, where m*n is the size of the matrix.
