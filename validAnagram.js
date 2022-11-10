var isAnagram = function(s, t) {
  if(s === t) return true;
  if(s.length !== t.length) return false;

  let sFreq = {};

  for (let ltr of s) {
    sFreq[ltr] ? sFreq[ltr]++ : sFreq[ltr] = 1;
  }

  for (let ltr of t) {
    if (!sFreq[ltr]) return false;
    sFreq[ltr] -= 1;
  }

  return true;
};