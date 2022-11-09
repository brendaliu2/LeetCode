function isValidPalindrome (phrase) {
  phrase = phrase.toLowerCase().split('').filter(x => x !== ' ').join('').replace(/[^a-zA-Z0-9 ]/g, '');

  let left = 0;
  let right = phrase.length - 1;

  while(left < right) {
    if(phrase[left] !== phrase[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}