function solution(n, t, m, p) {
  let answer = '';
  let count = 0;
  let conversion = '';

  for (let i = 0; i < t * m; i++) {
    conversion += count.toString(n);
    count++;
  }

  for (let i = p - 1; i < conversion.length; i += m) {
    answer += conversion[i];
    if (answer.length === t) break;
  }
  return answer.toUpperCase();
}
