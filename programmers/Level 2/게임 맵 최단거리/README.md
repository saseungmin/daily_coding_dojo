# ✔ 게임 맵 최단거리

## 👉 LEVEL 2

### 🎯 찾아라 프로그래밍 마에스터

#### 📚 배운 점
- 최단거리 최단거리!!!! 최단거리를 구하는거면 DFS가 아니라 BFS로 풀어야 한다.
- 처음에 DFS로 푸니까 효율성 실패가 된다.

```js
// 효율성 실패한 dfs
function solution(maps) {
  const newMaps = [...maps];

  const answer = [];
  const lenX = maps.length - 1;
  const lenY = maps[0].length - 1;

  const dx = [-1, 0, 1, 0]; // 상, 우, 하, 좌
  const dy = [0, 1, 0, -1]; // 상, 우, 하, 좌

  function dfs(x, y, count) {
    if (x === lenX && y === lenY) {
      answer.push(count); // 여기가 중요한데 dfs는 모든 경우의 수를 다 찾게 되어 배열로 받는다.
      return;
    }

    for (let i = 0; i < 4; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];

      // 길이 있을 때
      if (newX <= lenX && newX >= 0 && newY <= lenY && newX >= 0 && newMaps[newX][newY] === 1) {
        newMaps[newX][newY] = 0; // 간 길을 0으로 변경하고

        dfs(newX, newY, count + 1); // count 증가

        newMaps[newX][newY] = 1; // 재귀에서 빠져나올 땐 1로 다시 변경해준다.
      }
    }
  }


  // 사실 의미없음
  if (newMaps[0][0] === 0) {
    return -1;
  }

  // 시작은 무조건 간거니까 0
  newMaps[0][0] = 0;
  // 시작부터 카운트 1로 시작
  dfs(0, 0, 1);

  // 배열에 아무것도 없으면 갈 수 없으니 -1, 갈 수 있는 경로 중에 가장 최단 거리 Return
  return answer.length ? Math.min(...answer) : -1;
}
```

- BFS로 푸니까 깔끔하게 성공

```js
function solution(maps) {
  const newMaps = [...maps];

  let answer = -1;
  const lenX = maps.length - 1;
  const lenY = maps[0].length - 1;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const queue = [];
  queue.push([0, 0, 1]);

  while (queue.length) {
    const [x, y, count] = queue.shift();

    if (x === lenX && y === lenY) {
      // 무조건 최단 거리 즉, 조건에 성립하는 맨 처음 들어오는 queue의 count가 최단 거리를 반환
      // 그렇기 때문에 찾으면 끝난다. 
      answer = count;
      break;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx <= lenX && ny >= 0 && ny <= lenY && newMaps[nx][ny] === 1) {
        newMaps[nx][ny] = 0;
        queue.push([nx, ny, count + 1]);
      }
    }
  }

  return answer;
}
```

---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/1844?language=javascript
