function bubbleSort(arr) {
  // loop through array
  for (let i = 0; i < arr.length; i++) {
    // Variable to show if the elements are swapped
    let swapped = false;
    // loop through array to compare two elements
    for (let j = 0; j < arr.length; j++) {
      // Check if arr[j] is larger than arr[j+1]
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    // If a number didn't swap break out of the loop
    if (!swapped) break;
  }
  return arr;
}

module.exports = bubbleSort;
