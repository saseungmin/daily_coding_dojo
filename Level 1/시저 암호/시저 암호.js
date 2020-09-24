const alpabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const result = solution('a B z', 4);
console.log(result);

function solution(s, n) {
  const findStr = (str) => (alpabet) => {
    const index = alpabet.findIndex((value) => value === str.toUpperCase()) + n;
    return index > alpabet.length - 1 ? alpabet[index % alpabet.length] : alpabet[index];
  };
  const isLowerCase = (str) => str === str.toLowerCase() && str !== str.toUpperCase();

  const result = s.split('').map((value) => {
    if (value === ' ') {
      return value;
    }
    return isLowerCase(value) ? findStr(value)(alpabet).toLowerCase() : findStr(value)(alpabet).toUpperCase();
  });

  return result.join('');
}
