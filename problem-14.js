var longestCommonPrefix = function(strs) {
    let commonPrefix = [];

    let letterIdx = 0;
    let maxLetterIdx = Infinity;

    for (let s of strs) {
      maxLetterIdx = Math.min(maxLetterIdx, s.length);
    }

    while (letterIdx < maxLetterIdx) {
      let currLetter = strs[0][letterIdx];
      for(let s of strs) {
        if (s[letterIdx] !== currLetter){
          return commonPrefix.join('');
        }
      }
      commonPrefix.push(currLetter);
      letterIdx++
    }

    return commonPrefix.join('');
};