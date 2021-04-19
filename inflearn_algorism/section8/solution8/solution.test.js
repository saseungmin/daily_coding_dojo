function solution(n, m) {
  const result = [];
  const temp = Array.from({ length: m }, () => 0);

  function dfs(level) {
    if (level === m) {
      result.push(temp.slice());
      return;
    }

    for (let i = 1; i <= n; i++) {
      temp[level] = i;
      dfs(level + 1);
    }
  }

  dfs(0);

  return result;
}

describe('solution', () => {
  const result = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]];
  it('중복순열을 오름차순으로 반환한다.', () => {
    expect(solution(3, 2)).toEqual(result);
  });
});
