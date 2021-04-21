function solution(m, n) {
  const result = [];
  const len = n.length;

  const temp = Array.from({ length: m }, () => 0);
  const check = Array.from({ length: len }, () => false);

  function dfs(level) {
    if (level === m) {
      result.push(temp.slice());
      return;
    }

    for (let i = 0; i < len; i++) {
      if (!check[i]) {
        temp[level] = n[i];
        check[i] = true;

        dfs(level + 1);

        check[i] = false;
      }
    }
  }

  dfs(0);

  return result;
}

describe('solution', () => {
  const result = [
    [3, 6],
    [3, 9],
    [6, 3],
    [6, 9],
    [9, 3],
    [9, 6],
  ];
  it('오름차순으로 순열을 반환한다.', () => {
    expect(solution(2, [3, 6, 9])).toEqual(result);
  });
});
