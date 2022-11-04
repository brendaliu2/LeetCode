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

//andrew method
var productExceptSelf = function(nums) {
  const answer = [];

  const zeros = nums.filter(n => !n);
  if(zeros.length > 1) return new Array(nums.length).fill(0);

  let product = 1;
  let zeroLocation;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i]) {
      product *= nums[i];
    } else {
      zeroLocation = i;
    }
  }

  if(zeros.length === 1) {
    const products = new Array(nums.length).fill(0);
    products[zeroLocation] = product;
    return products;
  }

  for(let num of nums) {
    answer.push(product * num**-1);
  }

  return answer;
};