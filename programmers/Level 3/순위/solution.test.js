// function solution(n, results) {
//   const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

//   results.forEach(([win, lose]) => {
//     graph[win][lose] = 1;
//     graph[lose][win] = -1;
//     graph[win][win] = 0;
//     graph[lose][lose] = 0;
//   });

//   for (let k = 1; k < n + 1; k++) {
//     for (let i = 1; i < n + 1; i++) {
//       for (let j = 1; j < n + 1; j++) {
//         if (graph[i][k] === 1 && graph[k][j] === 1) {
//           graph[i][j] = 1;
//         }

//         if (graph[i][k] === -1 && graph[k][j] === -1) {
//           graph[i][j] = -1;
//         }
//       }
//     }
//   }

//   return graph.reduce((completeCount, result) => {
//     const filteredInfinity = result.filter((v) => v !== Infinity);

//     if (filteredInfinity.length === n) {
//       return completeCount + 1;
//     }

//     return completeCount;
//   }, 0);
// }

function solution(n, results) {
  const adjMatrix = Array
    .from({ length: n }, (_, i) => Array(n)
      .fill(Infinity).map((v, j) => (i === j ? 0 : v)));

  results.forEach(([win, lose]) => {
    adjMatrix[win - 1][lose - 1] = 0;
  });

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        adjMatrix[i][j] = Math.min(adjMatrix[i][j], adjMatrix[i][k] + adjMatrix[k][j]);
      }
    }
  }

  return adjMatrix.reduce((completeCount, result, i) => {
    let count = 0;

    const filteredZeroCount = result.filter((v) => v === 0).length;

    for (let j = 0; j < n; j++) {
      if (i !== j && adjMatrix[j][i] === 0) {
        count += 1;
      }
    }

    if (filteredZeroCount + count === n) {
      return completeCount + 1;
    }

    return completeCount;
  }, 0);
}

describe('플로이드-워샬 알고리즘으로 풀기', () => {
  it('solution', () => {
    expect(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]])).toBe(2);
  });
});
