function solution(m, coins) {
  const dy = Array.from({ length: m + 1 }, () => 1000);

  dy[0] = 0;

  coins.forEach((coin) => {
    for (let i = coin; i <= m; i++) {
      dy[i] = Math.min(dy[i], dy[i - coin] + 1);
    }
  });

  return dy[m];
}

describe('동전교환', () => {
  it('solution', () => {
    expect(solution(15, [1, 2, 5])).toBe(3);
  });
});
