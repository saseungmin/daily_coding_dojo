# ✔ 순위

## 🌈 LEVEL 3

### ✌ 그래프 / 플로이드-워샬 알고리즘

### ✌ 풀이 방법
- 플로이드-워샬 알고리즘을 사용하여 문제를 풀 수 있었다.
- 처음 방법은 플로이드-워샬 알고리즘을 기반으로 조금 변형한 풀이방법이다.
- 이 방법이 좀더 직관적이지만, 시간복잡도에서는 아래 풀이방법보다 느리다.

```js
function solution(n, results) {
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

  results.forEach(([win, lose]) => {
    graph[win][lose] = 1;
    graph[lose][win] = -1;
    graph[win][win] = 0;
    graph[lose][lose] = 0;
  });

  for (let k = 1; k < n + 1; k++) {
    for (let i = 1; i < n + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        // i가 k를 이겼고, k가 j를 이겼다면
        if (graph[i][k] === 1 && graph[k][j] === 1) {
          // i가 j를 이긴다.
          graph[i][j] = 1;
        }

        // i가 k한테 지고, k가 j한테 졌으면
        if (graph[i][k] === -1 && graph[k][j] === -1) {
          // i는 j한테도 진다.
          graph[i][j] = -1;
        }
      }
    }
  }

  // Infinity 분리, 알 수 있는 결과 정보만 있을 때 count + 1
  return graph.reduce((completeCount, result) => {
    const filteredInfinity = result.filter((v) => v !== Infinity);

    if (filteredInfinity.length === n) {
      return completeCount + 1;
    }

    return completeCount;
  }, 0);
}
```

- 다음방법은 플로이드 워샬 알고리즘의 `min` 비교 로직이 포함된 풀이 방법이다.
- 위 풀이 방법보다 시간복잡도 상으로는 빠르지만, 위보다 직관적이지 못하다.

```js
function solution(n, results) {
  // 다음과 인접 행렬 생성
  // [
  //   [ 0, Infinity, Infinity, Infinity, Infinity ],
  //   [ Infinity, 0, Infinity, Infinity, Infinity ],
  //   [ Infinity, Infinity, 0, Infinity, Infinity ],
  //   [ Infinity, Infinity, Infinity, 0, Infinity ],
  //   [ Infinity, Infinity, Infinity, Infinity, 0 ]
  // ]
  const adjMatrix = Array
    .from({ length: n }, (_, i) => Array(n)
      .fill(Infinity).map((v, j) => (i === j ? 0 : v)));

  // 결과 정보를 행렬에 0으로 초기화
  results.forEach(([win, lose]) => {
    adjMatrix[win - 1][lose - 1] = 0;
  });

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // 중간정점이 포함되어 있는 것과 포함되어 있지 않은 것 중에 더 작은 것으로 변경
        adjMatrix[i][j] = Math.min(adjMatrix[i][j], adjMatrix[i][k] + adjMatrix[k][j]);
      }
    }
  }

  return adjMatrix.reduce((completeCount, result, i) => {
    let count = 0;

    // 0이 값들의 개수
    const filteredZeroCount = result.filter((v) => v === 0).length;

    for (let j = 0; j < n; j++) {
      // 열을 for문으로 돌아서 i와 j가 같지 않고 0이면 
      if (i !== j && adjMatrix[j][i] === 0) {
        count += 1;
      }
    }

    // n과 개수가 같을 때
    if (filteredZeroCount + count === n) {
      return completeCount + 1;
    }

    return completeCount;
  }, 0);
}
```

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/49191
