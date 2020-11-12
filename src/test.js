function fn(arr, x) {
  let start = 0,
    end = arr.length - 1,
    midIndex;
  while (start <= end) {
    midIndex = Math.floor((start + end) / 2);
    if (arr[midIndex] === x) return midIndex;
    else if (arr[midIndex] > x) end = midIndex - 1;
    else start = midIndex + 1;
  }

  return -1;
}

console.log(fn([1, 2, 3, 4, 5], 6));
console.log(fn([1, 2, 3, 4, 5], 0));
console.log(fn([1, 2, 3, 4, 5], 2));
console.log(fn([5, 2, 6, 7, 4], 5));
console.log(fn([5, 2, 6, 7, 4], 7));
