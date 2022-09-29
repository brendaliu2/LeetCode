var findClosestElements = function (arr, k, x) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    (((x - arr[mid]) > (arr[mid + k] - x))) ? start = mid + 1 : end = mid;

  }
  return arr.slice(start, start + k);
};