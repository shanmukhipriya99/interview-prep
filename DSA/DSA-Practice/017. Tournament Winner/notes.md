<================ Question ========================>

<img width="704" alt="image" src="https://github.com/shanmukhipriya99/interview-prep/assets/37501487/93e21ca8-dc57-4edc-b1a3-bdc918aab9cc">

<img width="704" alt="image" src="https://github.com/shanmukhipriya99/interview-prep/assets/37501487/74c029a2-012b-4faa-af2f-55557981f148">

<=========================== Notes =============================>

## Understanding the problem:
We have two arrays: competitions ([[homeTeam, awayTeam], [homeTeam, awayTeam],...]) and results (0 => awayTeam won, 1 => homeTeam won).
Every time a team wins, they are awarded 3 points, and there are no ties. We need to return the team with the highest points at the end of the tournament.


## Approach - 1
We can create a new Map(). Then, iterate through the results array with a for loop. In each iteration, check if the result is 0 (awayTeam) or 1 (homeTeam).
If the result is 0, that means, the away team has won, meaning, we need to access the 2nd team in the current sub-array of competitions. 

To do that, we can do: `competitions[i][Number(!results[i])]`. If result[i] is 0, then `Number(!results[i])` converts 0 to true and then 1, allowing us to access the 2nd team in the array.

Using this, we can check if the winning team exists in the Map(), is so, increase their score by 3, else, add the team to the Map() and set the score to 3. Use the similar logic for the else block too.

Then we can use the `reduce()` to access the entries of the Map() using:

`const [team, score] = [...scoreBoard.entries()].reduce((initPair, maxPair) => {
    return initPair[1] > maxPair[1] ? initPair : maxPair}, [-1, -Infinity]);`.

`[...scoreBoard.entries()]` returns an array of sub-arrays, where each sub-array contains they key and value. And we provide [-1, -Infinity] as the initial value of the key and value. 
Finally, we can return the value of the team variable.
    
This would have a time complexity of *O(n)* and a space complexity of *O(n)*, where n is the number of competitions (or results).

## Approach - 2

This would have a time complexity of *O(n)* and a space complexity of *O(n)*, where n is the number of competitions (or results).
