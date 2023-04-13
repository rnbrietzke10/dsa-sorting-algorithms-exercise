function merge(arr1, arr2) {
  let mergedArr = [];
  i = 0;
  j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }
  return mergedArr;
}

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;
  // Find mid point of array
  const mid = Math.floor(arr.length / 2);
  // create array from left of mid
  const left = mergeSort(arr.slice(0, mid));
  // create array from right of mid
  const right = mergeSort(arr.slice(mid));
  // merge left and right arrays together
  return merge(left, right);
}

module.exports = { merge, mergeSort };
