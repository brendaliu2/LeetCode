let twoSum = (nums, target) => {
  const pairs = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let difference = target - num;

    if(pairs[difference] !== undefined) {
      return [i, pairs[difference]];
    } else {
      pairs[num] = i;
    }
  }
};