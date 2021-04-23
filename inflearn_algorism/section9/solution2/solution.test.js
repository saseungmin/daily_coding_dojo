/* eslint-disable no-restricted-syntax */
function solution(n, arr) {
  const graph = Array.from(Array(n + 1), () => []);
  const check = Array.from({ length: n + 1 }, () => false);
  let result = 0;

  for (const [a, b] of arr) {
    graph[a].push(b);
  }

  // console.log(graph);

  function dfs(v) {
    if (v === n) {
      result += 1;
      return;
    }

    for (let i = 0; i < graph[v].length; i++) {
      const node = graph[v][i];

      if (!check[node]) {
        check[node] = true;

        dfs(node);

        check[node] = false;
      }
    }
  }

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
