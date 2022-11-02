var productExceptSelf = function(nums) {
  let answer = [];

  let product = 1;

  for (let num of nums) {
    answer.push(product);
    product *= num;
  }

  product = 1;

  for (let i = nums.length - 1; i >=0; i--) {
    answer[i] *= product;
    product *= nums[i];
  }

  return answer;
};