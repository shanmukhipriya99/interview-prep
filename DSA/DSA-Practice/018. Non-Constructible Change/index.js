function nonConstructibleChange(coins) {
  // Write your code here.
  let change = 0;
  coins.sort((a, b) => a - b);
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > change+1) {
      return change+1;
    } else {
      change += coins[i];
    }
  }
  return change+1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
