function solution(n, f) {
  const type = [];
  const dynamic = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  const temp = Array.from({ length: n }, () => 0);
  const check = Array.from({ length: n }, () => false);

  let result;
  let flag = false;

  function combine(a, b) {
    if (dynamic[a][b] > 0) {
      return dynamic[a][b];
    }

    if (a === b || b === 0) {
      return 1;
    }

    dynamic[a][b] = combine(a - 1, b - 1) + combine(a - 1, b);
    return dynamic[a][b];
  }

  function dfs(level, sum) {
    if (flag) {
      return;
    }

    if (level === n && sum === f) {
      result = temp.slice();
      flag = true;
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!check[i]) {
        temp[level] = i;
        check[i] = true;

        dfs(level + 1, sum + (type[level] * temp[level]));

        check[i] = false;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    type.push(combine(n - 1, i));
  }

  dfs(0, 0);

  return result;
}

describe('solution', () => {
  it('가장 윗줄에 있는 숫자들을 반환한다.', () => {
    expect(solution(4, 16)).toEqual([3, 1, 2, 4]);
  });
});
