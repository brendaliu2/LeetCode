var isValid = function(s) {
  const pairs = {
    '(':')',
    '{':'}',
    '[':']',
  }

  const stack = [];

  for (let paren of s) {
    stack.push(paren);
    if(stack.at(-1) === pairs[stack.at(-2)]) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length ? false : true;
};