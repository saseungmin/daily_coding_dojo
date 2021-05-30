function solution(n) {
  let answer = 0;

  function dfs(level, sum) {
    if (sum > n) {
      return;
    }

    if (sum === n) {
      answer += 1;
      return;
    }

    dfs(level + 1, sum + level);
  }

  for (let i = 1; i <= n; i++) {
    dfs(i, 0);
  }

  return answer;
}

describe('숫자의 표현', () => {
  it('solution', () => {
    expect(solution(15)).toBe(4);
  });
});
