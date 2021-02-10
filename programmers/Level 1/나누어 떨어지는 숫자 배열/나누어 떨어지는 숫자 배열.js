function solution(arr, divisor) {
  const filter = arr.filter((val) => val % divisor === 0).sort((a, b) => a - b);
  return !filter.length ? [-1] : filter;
}
