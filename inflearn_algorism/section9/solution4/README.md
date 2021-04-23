### 📚 이진트리 넓이우선탐색(BFS)
1. 이진트리를 넓이우선탐색하라.

#### 🎯 정리
- 넓이우선탐색은 `queue`를 사용해야한다. 먼저 들어온게 먼저 나간다.
- 넓이우선탐색은 최단거리를 찾을때 사용한다.

```js
function solution(n) {
  let result = '';
  const queue = [];

  queue.push(1);

  while (queue.length) {
    const v = queue.shift();

    if (v > n) {
      break;
    }

    result += `${v} `;
    queue.push(v * 2);
    queue.push(v * 2 + 1);
  }

  return result.trim();
}
```
