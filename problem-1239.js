var maxLength = function(arr) {
  const uniqueSet = new Set(['']);
  let max = 0;

  for(let word of arr) {
      const values = [...uniqueSet.values()];

      for(let value of values) {
          let str = value + word;
          uniqueSet.add(str);
          let newStr = [...new Set(str).values()].join('');

          if (str === newStr) {
              max = Math.max(str.length, max);
          }
      }
  }

  return max;
};