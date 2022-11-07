var maximum69Number  = function(num) {
  num = String(num);

  for (let i = 0; i < num.length; i++) {
      if (num[i] === '6') {
          return 10**(num.length - i - 1)*3 + Number(num);
      }
  }

  return Number(num);
};