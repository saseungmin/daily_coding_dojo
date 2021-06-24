function solution(n, money) {
  const dp = Array.from({ length: n + 1 }, () => 0);

  money.forEach((unit) => {
    dp[unit] += 1;

    for (let i = unit + 1; i <= n; i++) {
      dp[i] += dp[i - unit];
    }
  });

  return dp[n];
}

describe('거스름돈', () => {
  it('solution', () => {
    expect(solution(5, [1, 2, 5])).toBe(4);
  });
});
