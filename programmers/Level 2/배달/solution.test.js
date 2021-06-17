class PriorityQueue {
  constructor(dist) {
    this.queue = [];
    this.dist = dist;
  }

  enqueue(nodeIndex) {
    this.queue.push(nodeIndex);
  }

  dequeue() {
    let entry = 0;
    let entryIndex = this.queue[entry];

    this.queue.forEach((nodeIndex, index) => {
      if (this.dist[entryIndex] > this.dist[nodeIndex]) {
        entryIndex = nodeIndex;
        entry = index;
      }
    });

    return this.queue.splice(entry, 1);
  }
}

function solution(N, road, K) {
  const graph = Array.from({ length: N }, () => []);

  road.forEach(([x, y, weight]) => {
    graph[x - 1].push([y - 1, weight]);
    graph[y - 1].push([x - 1, weight]);
  });

  const dist = Array.from({ length: N }, () => Infinity);
  const visited = Array.from({ length: N }, () => false);
  const pq = new PriorityQueue(dist);

  pq.enqueue(0);
  dist[0] = 0;

  while (pq.queue.length) {
    const [v] = pq.dequeue();

    if (!visited[v]) {
      visited[v] = true;

      graph[v].forEach(([to, weight]) => {
        if (dist[v] + weight < dist[to]) {
          dist[to] = dist[v] + weight;
          pq.enqueue(to);
        }
      });
    }
  }

  return dist.filter((d) => d <= K).length;
}

describe('배달', () => {
  it('solution', () => {
    expect(solution(5, [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ], 3)).toBe(4);

    expect(solution(6, [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ], 4)).toBe(4);
  });
});
