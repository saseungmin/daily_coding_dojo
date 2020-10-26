function solution(s) {
  return s
    .split(' ')
    .map((strArr) => strArr
      .split('')
      .map((str, index) => (index % 2 === 0 ? str.toUpperCase() : str.toLowerCase()))
      .join(''))
    .join(' ');
}

const result = solution('try hello world');
console.log(result);
