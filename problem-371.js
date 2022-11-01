var getSum = function (a, b) {
  if (a === b) return a * 2;
  if (!a) return b;
  if (!b) return a;

  let sum = a;

  if (b > 0) {
    for (let i = 0; i < b; i++) {
      sum++;
    }
  } else {
    for (let i = 0; i > b; i--) {
      sum--;
    }
  }

  return sum;
};