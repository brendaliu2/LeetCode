let twoSum = (nums, target) => {
  const differences = {};

  for (let i = 0; i < nums.length; i++) {
    differences[nums[i]] = i;
  }

  for(let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if(differences[difference] !== undefined && i !== differences[difference]) {
      return [i, differences[difference]];
    }
  }
};