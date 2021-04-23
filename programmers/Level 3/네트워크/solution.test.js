function solution(n, computers) {
  const check = Array.from({ length: n }, () => false);
  let answer = 0;

  function dfs(v) {
    check[v] = true;

    for (let i = 0; i < n; i++) {
      if (computers[v][i] === 1 && !check[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < check.length; i++) {
    if (!check[i]) {
      dfs(i);
      answer += 1;
    }
  }

  return answer;
}

describe('solution', () => {
  it('섬의 개수를 반환한다.', () => {
    expect(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])).toBe(2);
  });
});
