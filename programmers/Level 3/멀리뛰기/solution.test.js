function solution(n) {
  const dp = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
}

describe('멀리뛰기', () => {
  it('solution', () => {
    expect(solution(4)).toBe(5);
    expect(solution(3)).toBe(3);
  });
});
