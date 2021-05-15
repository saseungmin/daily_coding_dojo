function solution(n) {
  const dy = Array.from({ length: n + 1 }, () => 0);

  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  return dy[n];
}

describe('계단 오르기', () => {
  it('solution', () => {
    expect(solution(7)).toBe(21);
  });
});
