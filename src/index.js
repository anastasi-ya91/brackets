module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openingBrackets = new Set(bracketsConfig.map(([opening, _]) => opening));
  const closingBrackets = new Map(bracketsConfig.map(([opening, closing]) => [closing, opening]));
  
  for (const char of str) {
    if (openingBrackets.has(char)) {
      stack.push(char);
    } else if (closingBrackets.has(char)) {
      const matchingOpeningBracket = closingBrackets.get(char);
      if (stack.length === 0 || stack[stack.length - 1] !== matchingOpeningBracket) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  
  return stack.length === 0;
}
