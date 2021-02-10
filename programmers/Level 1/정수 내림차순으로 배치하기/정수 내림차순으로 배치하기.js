const result = solution(118372);
console.log(result);

function solution(n) {
  return parseInt(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join(''),
    10,
  );
}
