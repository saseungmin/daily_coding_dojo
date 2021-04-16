function solution(N) {
  const result = [];

  function dfs(K) {
    if (K === 0) {
      return;
    }

    result.unshift(K);
    dfs(K - 1);
  }

  dfs(N);
  return result;
}

describe('solution', () => {
  it('재귀함수를 사용하여 반환한다.', () => {
    expect(solution(3)).toEqual([1, 2, 3]);
  });
});
