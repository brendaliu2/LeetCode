var reverseVowels = function (s) {
  const vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);

  const vowelCollection = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) {
      vowelCollection.push(s[i]);
    }
  }

  let reversed = [];
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) {
      let vowelToAdd = vowelCollection.pop();
      reversed.push(vowelToAdd);
    } else {
      reversed.push(s[i]);
    }
  }

  return reversed.join('');
};