var halvesAreAlike = function (s) {
  const aHalf = s.slice(0, s.length / 2);
  const bHalf = s.slice(s.length / 2);

  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  let countA = 0;
  let countB = 0;

  for (let letter of aHalf) {
    if (vowels.has(letter)) countA++;
  }

  for (let letter of bHalf) {
    if (vowels.has(letter)) countB++;
  }

  return countA === countB;
};