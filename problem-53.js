var maxSubArray = function (nums) {
  let max = -Infinity;
  let sum = 0;

  for (let num of nums) {
    sum += num;
    max = Math.max(max, sum);
    sum < 0 ? sum = 0 : sum = sum;
  }

  return max;
};