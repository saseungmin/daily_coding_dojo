function solution(n, arr) {
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  const check = Array.from({ length: n + 1 }, () => false);
  const test = [];

  let result = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const [a, b] of arr) {
    graph[a][b] = 1;
  }

  // console.log(graph);
  function dfs(v) {
    if (v === n) {
      // console.log(test);
      result += 1;
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (graph[v][i] === 1 && !check[i]) {
        check[i] = true;
        test.push(i);

        dfs(i);

        check[i] = false;
        test.pop();
      }
    }
  }

  test.push(1);
  check[1] = true;
  dfs(1);

  return result;
}

describe('solution', () => {
  const arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ];

  it('1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 반환한다.', () => {
    expect(solution(5, arr)).toBe(6);
  });
});
