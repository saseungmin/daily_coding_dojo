function solution(n) {
  const dy = Array.from({ length: n + 2 }, () => 0);

  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  return dy[n + 1];
}

describe('돌다리 건너기', () => {
  it('solution', () => {
    expect(solution(7)).toBe(34);
  });
});
