# ✔ 배달

## 👉 LEVEL 2

### 🎯 Summer/Winter Coding(~2018)

#### 📚 배운 점
- 다익스트라 알고리즘
- 우선순위 큐를 사용하여 구현
- 자바스크립트는 우선순위 큐가 없다.. 다른 언어는 기본 내장 언어인데.. 자바스크립트는 직접 구현해야 한다.
- 우선순위 큐를 원래 최소힙으로 사용하여 구현해야야 하지만, 그럴려면 구현에 있어서 너무나 많은 소요시간이 소모된다. 그렇기에 배열을 사용하여 간단하게? 우선순위큐를 구현할 수 있다.
- 우선순위 큐 구현은 인터넷을 참고했다.

```js
class PriorityQueue {
  constructor(dist) {
    this.queue = [];
    this.dist = dist;
  }

  enqueue(nodeIndex) {
    this.queue.push(nodeIndex);
  }

  // 시작점에서부터 해당 정점까지의 거리가 제일 작은 정점의 인덱스를 dist 배열에서 빼냄
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
```

- 힙을 이용하면 수행시간은 O(ElogV)시간이 소요된다. 배열로 구현할 땐 O(EV)가 소요된다.
- 우선순위큐를 힙을 사용해 구현은 다음 링크를 참고하자.
  - https://zereight.tistory.com/732
  - https://jun-choi-4928.medium.com/javascript%EB%A1%9C-heap-priority-queue-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-8bc13bf095d9
- 구현한 우선순위큐를 사용하여 다익스트라 알고리즘을 사용하여 문제를 해결할 수 있다.

```js
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
```
---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/12978?language=javascript
