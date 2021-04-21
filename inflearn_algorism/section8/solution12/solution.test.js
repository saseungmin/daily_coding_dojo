function solution(n, r) {
  const dynamic = Array.from(Array(n + 1), () => Array(r + 1).fill(0));

  function dfs(a, b) {
    if (dynamic[a][b] > 0) {
      return dynamic[a][b];
    }

    if (a === b || b === 0) {
      return 1;
    }

    dynamic[a][b] = dfs(a - 1, b - 1) + dfs(a - 1, b);

    return dynamic[a][b];
  }

  return dfs(n, r);
}

describe('solution', () => {
  it('조합의 경우의 수를 리턴받는다.', () => {
    expect(solution(5, 3)).toBe(10);
    expect(solution(33, 19)).toBe(818809200);
  });
});
