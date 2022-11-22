var lengthOfLongestSubstring = function(s) {
    let letters = new Map();
    let substring = [];
    let maxLength = 0;
    let i = 0

    while(i < s.length) {
      const letter = s[i];
      if (letters.has(letter)) {
        maxLength = Math.max(maxLength, substring.length);
        const index = letters.get(letter);
        substring = [s[index]];
        letters = new Map();
        letters.set(s[index], index);
        i = index + 1;
      } else {
        letters.set(letter, i);
        substring.push(letter);
        i++;
      }
    }

    return maxLength;
};