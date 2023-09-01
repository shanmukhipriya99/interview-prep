function sortedSquaredArray(array) {
  // Write your code here.
  let arr = [];
  let small = 0, large = array.length - 1;
  for(let i = array.length - 1; i >= 0; i--) {
    if(Math.abs(array[small]) > Math.abs(array[large])) {
      arr[i] = array[small] * array[small];
      small++;
    } else {
      arr[i] = array[large] * array[large];
      large--;
    }
  }
  return arr;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
