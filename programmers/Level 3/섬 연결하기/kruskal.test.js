// const changePerceptionSet = (perceptionSet) => (start, end) => perceptionSet
//   .map((perception) => {
//
//   if (perception === end) {
//     return start;
//   }

//   return perception;
// });

// function solution(n, costs) {
//   let answer = 0;
//   let count = 0;

//   costs.sort((a, b) => a[2] - b[2]);
//   let perceptionSet = Array.from({ length: n }, (_, i) => i);

//   while (count < n - 1) {
//     const [start, end, weight] = costs.shift();
//     const changeSet = changePerceptionSet(perceptionSet);

//     if (perceptionSet[start] !== perceptionSet[end]) {
//       perceptionSet = changeSet(perceptionSet[start], perceptionSet[end]);
//       count += 1;
//       answer += weight;
//     }
//   }

//   return answer;
// }

const hasVertex = (connected) => (x, y) => connected.has(x) && !connected.has(y);

function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);

  const cost = costs.shift();

  const connected = new Set([cost[0], cost[1]]);
  let answer = cost[2];

  while (connected.size < n) {
    const has = hasVertex(connected);
    const index = costs.findIndex(([from, to]) => has(from, to) || has(to, from));

    const [[from, to, weight]] = costs.splice(index, 1);

    answer += weight;
    connected.add(from).add(to);
  }

  return answer;
}

describe('섬 연결하기', () => {
  it('solution', () => {
    expect(solution(4, [
      [0, 1, 1],
      [0, 2, 2],
      [1, 2, 5],
      [1, 3, 1],
      [2, 3, 8],
    ])).toBe(4);
  });
});
