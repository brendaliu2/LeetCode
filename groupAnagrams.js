var groupAnagrams = function (strs) {
  if (strs.length === 1) return [strs];

  const group = {};

  for (let str of strs) {
    let word = str.split('').sort().join('');

    group[word] ? group[word].push(str) : group[word] = [str]
  }

  return Object.values(group);
};
