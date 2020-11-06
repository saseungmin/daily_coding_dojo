function solution(a, b) {
  let i = 0;
  let sum = 0;

  while (i < a.length) {
    sum += a[i] * b[i];
    i++;
  }

  return sum;

  // return a.reduce((acc, _current, i) => acc += a[i] * b[i], 0);
}

const result = solution([1, 2, 3, 4], [-3, -1, 0, 2]);

console.log(result);
