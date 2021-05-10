/* eslint-disable no-restricted-syntax */
// function solution(N, road, K) {
//   const graph = Array.from(Array(N + 1), () => []);
//   const dist = [0, 0];
//   const queue = [];

//   for (let i = 0; i < N - 1; i++) {
//     dist.push(Number.MAX_SAFE_INTEGER);
//   }

//   for (const [a, b, c] of road) {
//     graph[a].push({ to: b, time: c });
//     graph[b].push({ to: a, time: c });
//   }

//   queue.push({ to: 1, time: 0 });

//   while (queue.length) {
//     const v = queue.shift();

//     graph[v.to].forEach((next) => {
//       if (dist[next.to] > dist[v.to] + next.time) {
//         dist[next.to] = dist[v.to] + next.time;

//         let isAdded = false;
//         for (let i = 0; i < queue.length; i++) {
//           if (queue[i].time > queue.time) {
//             queue.splice(i, 0, next);
//             isAdded = true;
//             break;
//           }

//           if (!isAdded) {
//             queue.push(next);
//           }
//         }
//       }
//     });
//   }

//   console.log(queue);
// }

// class PriorityQueue {
//   constructor() {
//     this.memory = [];
//     this.length = 0;
//   }

//   push(newItem) {
//     this.length++;

//     let isAdded = false;

//     for (let i = 0; i < this.memory.length; ++i) {
//       if (this.memory[i].weight > newItem.weight) {
//         this.memory.splice(i, 0, newItem);
//         isAdded = true;
//         break;
//       }
//     }

//     if (!isAdded) this.memory.push(newItem);
//   }

//   pop() {
//     this.length--;
//     return this.memory.shift();
//   }
// }

// function solution(N, road, K) {
//   const pq = new PriorityQueue();
//   const adj = Array.from(Array(N + 1), () => []);
//   const dist = [0, 0];

//   for (let i = 0; i < N - 1; ++i) dist.push(Number.MAX_VALUE);

//   road.forEach((info) => {
//     const a = info[0];
//     const b = info[1];
//     const c = info[2];

//     adj[a].push({ to: b, weight: c });
//     adj[b].push({ to: a, weight: c });
//   });

//   console.log(adj);

//   pq.push({
//     to: 1,
//     weight: 0,
//   });

//   (function () {
//     while (pq.length) {
//       const edge = pq.pop();
//       adj[edge.to].forEach((next) => {
//         if (dist[next.to] > dist[edge.to] + next.weight) {
//           dist[next.to] = dist[edge.to] + next.weight;
//           pq.push(next);
//         }
//       });
//     }
//   }());

//   console.log(dist);
//   let answer = 0;
//   for (let i = 1; i < N + 1; ++i) {
//     if (dist[i] <= K) answer++;
//   }

//   return answer;
// }

// describe('배달', () => {
//   const road1 = [
//     [1, 2, 1],
//     [2, 3, 3],
//     [5, 2, 2],
//     [1, 4, 2],
//     [5, 3, 1],
//     [5, 4, 2],
//   ];

//   const road2 = [[1, 2, 1], [1, 3, 2], [2, 3, 2], [3, 4, 3], [3, 5, 2], [3, 5, 3], [5, 6, 1]];
//   it('solution', () => {
//     expect(solution(5, road1, 3)).toBe(4);
//     expect(solution(6, road2, 4)).toBe(4);
//   });
// });
