function isValidSubsequence(array, sequence) {
  // Write your code here.
  let ind = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] == sequence[ind]) ind++;
  }
  return ind === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
