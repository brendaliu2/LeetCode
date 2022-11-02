var containsDuplicate = function (nums) {
  let elements = {};

  for (let num of nums) {
    elements[num] ? elements[num]++ : elements[num] = 1;
  }

  let appearances = Object.values(elements);

  return appearances.filter(appear => appear > 1).length;
};