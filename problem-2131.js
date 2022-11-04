var longestPalindrome = function(words) {
  if(!words.length) return 0;

  const nonSamePairs = {};
  const samePairs = {};

  for (let word of words) {
    if(word[0] === word[1]) {
      samePairs[word] ? samePairs[word]++ : samePairs[word] = 1;
    } else {
      nonSamePairs[word] ? nonSamePairs[word]++ : nonSamePairs[word] = 1;
    }
  }

  let longest = 0;
  let oneOdd = false;

  for(let pair in samePairs) {
    if(samePairs[pair] % 2 === 0) {
      longest += samePairs[pair] * 2;
    } else if (samePairs[pair] % 2 === 1 && !oneOdd) {
      longest += samePairs[pair] * 2;
      oneOdd = true;
    } else if (samePairs[pair] % 2 === 1 && oneOdd) {
      longest += (samePairs[pair] - 1) * 2;
    }
  }

  if (!Object.keys(nonSamePairs).length) return longest;

  for (let pair in nonSamePairs) {
    let reflection = pair[1] + pair[0];
    if (nonSamePairs[reflection]){

      let count;
      if(nonSamePairs[pair] > nonSamePairs[reflection]) {
        count = nonSamePairs[reflection]
      } else {
        count = nonSamePairs[pair]
      }

      nonSamePairs[pair] = nonSamePairs[pair] - count;
      nonSamePairs[reflection] = nonSamePairs[reflection] - count;

      if(nonSamePairs[pair] === 0) delete nonSamePairs[pair];
      if(nonSamePairs[reflection] === 0) delete nonSamePairs[reflection];

      longest += count*4;
    }
  }

  return longest;
};