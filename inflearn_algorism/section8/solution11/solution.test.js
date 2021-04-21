function solution(factorial) {
  function dfs(n, acc) {
    if (n === 1) {
      return acc;
    }

    return dfs(n - 1, acc * n);
  }

  return dfs(factorial, 1);
}

describe('solution', () => {
  it('팩토리얼한 값을 반환한다', () => {
    expect(solution(5)).toBe(120);
  });
});
