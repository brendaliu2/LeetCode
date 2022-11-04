var isPalindrome = function(x) {
    if(x < 0) return false;

    let left = 1;
    let right = getDigitCount(x);

    while (left < right) {
      let leftDigit = getDigit(x, left);
      let rightDigit = getDigit(x, right);

      if(leftDigit.toString() !== rightDigit.toString()) return false;

      left++;
      right--;
    }

    return true;
};

function getDigit(number, n) {
  return Math.floor((number / Math.pow(10, n - 1)) % 10);
}

function getDigitCount(number) {
  return Math.max(Math.floor(Math.log10(Math.abs(number))), 0) + 1;
}