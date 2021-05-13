/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
// function solution(n, edge) {
//   const graph = Array.from(Array(n + 1), () => []);
//   const check = Array.from({ length: n + 1 }, () => false);
//   const answer = [];

//   for (const [a, b] of edge) {
//     graph[a].push(b);
//     graph[b].push(a);
//   }

//   let temp = [];

//   function dfs(v, end, count) {
//     if (v === end) {
//       temp.push(count);
//       return;
//     }

//     for (let i = 0; i < graph[v].length; i++) {
//       const node = graph[v][i];

//       if (!check[node]) {
//         check[node] = true;
//         count += 1;

//         dfs(node, end, count);

//         count -= 1;
//         check[node] = false;
//       }
//     }
//   }

//   for (let i = 2; i <= n; i++) {
//     check[1] = true;
//     dfs(1, i, 0);

//     answer.push(Math.min(...temp));
//     temp = [];
//   }

//   const max = Math.max(...answer);

//   return answer.filter((value) => value === max).length;
// }

function solution(n, edge) {
  const check = Array.from({ length: n + 1 }, () => false);
  const graph = Array.from({ length: n + 1 }, () => []);

  edge.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  const queue = [[1, 1]];
  const answer = [];

  check[1] = true;

  while (queue.length) {
    const [v, level] = queue.shift();

    answer[level] = answer[level] ? answer[level] + 1 : 1;

    for (let i = 0; i < graph[v].length; i++) {
      const node = graph[v][i];

      if (!check[node]) {
        check[node] = true;
        queue.push([node, level + 1]);
      }
    }
  }

  return answer[answer.length - 1];
}

describe('가장 먼 노드', () => {
  it('solution', () => {
    expect(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])).toBe(3);
  });
});
