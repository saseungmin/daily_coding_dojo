function solution(n, m) {
  const result = [];
  const temp = Array.from({ length: m }, () => 0);
  const check = Array.from({ length: n }, () => false);

  function dfs(level, start) {
    if (level === m) {
      result.push(temp.slice());
      return;
    }

    for (let i = start; i <= n; i++) {
      if (!check[i]) {
        temp[level] = i;
        check[i] = true;

        dfs(level + 1, i + 1);

        check[i] = false;
      }
    }
  }

  dfs(0, 1);

  return result;
}

describe('solution', () => {
  const result = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [3, 4],
  ];
  it('가장 윗줄에 있는 숫자들을 반환한다.', () => {
    expect(solution(4, 2)).toEqual(result);
  });
});
