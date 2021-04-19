function solution(types, m) {
  const len = types.length;
  let result = Number.MAX_SAFE_INTEGER;

  function dfs(level, sum) {
    if (sum > m) {
      return;
    }

    if (level >= result) {
      return;
    }

    if (sum === m) {
      result = Math.min(result, level);
      return;
    }

    for (let i = 0; i < len; i++) {
      dfs(level + 1, sum + types[i]);
    }
  }

  dfs(0, 0);

  return result;
}

describe('solution', () => {
  it('거슬러 줄 동전의 최소 개수를 반환한다.', () => {
    expect(solution([1, 2, 5], 15)).toBe(3);
  });
});
