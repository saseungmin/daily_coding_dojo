# ✔ 섬 연결하기

## 🌈 LEVEL 3

### ✌ 그리디/프림 알고리즘/크루스칼 알고리즘
- n개의 섬 사이에 다리를 건설하는 비용(costs)이 주어질 때, **최소의 비용**으로 **모든 섬이 서로 통행 가능**하도록 만들 때 필요한 최소 비용을 return 하도록 solution을 완성하세요.

### ✌ 풀이 방법 및 배운점
- 문제를 풀 때 크루스칼 알고리즘을 사용하여 문제를 풀었다.

```js
const changePerceptionSet = (perceptionSet) => (start, end) => perceptionSet.map((perception) => {
  if (perception === end) {
    return start;
  }

  return perception;
});

function solution(n, costs) {
  let answer = 0;
  let count = 0;

  costs.sort((a, b) => a[2] - b[2]);
  let perceptionSet = Array.from({ length: n }, (_, i) => i);

  while (count < n - 1) {
    const [start, end, weight] = costs.shift();
    const changeSet = changePerceptionSet(perceptionSet);

    if (perceptionSet[start] !== perceptionSet[end]) {
      perceptionSet = changeSet(perceptionSet[start], perceptionSet[end]);
      count += 1;
      answer += weight;
    }
  }

  return answer;
}
```

#### 🎈 크루스칼 알고리즘을 사용한 풀이
- 좀 더 정석적인 크루스칼 알고리즘 풀이방법

```js
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
```

--- 

- 📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/42861?language=javascript
