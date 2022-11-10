var removeDuplicates = function (s) {
  const stack = [];

  for (let ltr of s) {
    stack.push(ltr);
    while(stack.length > 1 && stack.at(-1) === stack.at(-2)) {
      stack.pop();
      stack.pop()
    }
  }

  return stack.join('');
}