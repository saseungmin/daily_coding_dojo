function solution(N) {
  function dfs(K, result) {
    if (K === 0) {
      return result;
    }

    return dfs(K - 1, [K, ...result]);
  }

  return dfs(N, []);
}

describe('solution', () => {
  it('재귀함수를 사용하여 1부터 N까지 반환한다.', () => {
    expect(solution(3)).toEqual([1, 2, 3]);
  });
});
