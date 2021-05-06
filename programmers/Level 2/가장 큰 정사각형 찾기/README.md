# ✔ 가장 큰 정사각형 찾기

## 👉 LEVEL 2

### 🎯 연습 문제

#### 📚 배운 점
- `Math.pow` 대신 `**`를 사용하자.
- DP 문제
- 많이 부족하다. 솔직히 잘 모르겠다.

```js
function solution(board) {
  let answer = 0;

  const xLen = board[0].length;
  const yLen = board.length;

  if (xLen < 2 || yLen < 2) {
    return 1;
  }

  // [[1,1,1]]
  // [[1,1,0]]
  // [[0,0,1]]
  for (let i = 1; i < yLen; i++) { // [1.1] 부터 탐색 시작
    for (let j = 1; j < xLen; j++) { // [1.1] 부터 탐색 시작
      if (board[i][j] > 0) { // 해당 위치가 0보다 클 때
        // 중심점?의 왼쪽, 좌상단, 상단이 세곳을 비교하여 가작 작은 값을 찾는다.
        const min = Math.min(board[i - 1][j - 1], board[i][j - 1], board[i - 1][j]);

        board[i][j] = min + 1;
        // 아래 행렬처럼 변경된다.
        // [[1,1,1]]
        // [[1,2,1]]
        // [[0,1,1]]
      }

      // 0, 1, 2 순으로 위 행렬에서 2를 찾아 변경
      if (answer < board[i][j]) {
        answer = board[i][j];
      }
    }
  }

  // 정사각형 2**2
  return answer ** 2;
}
```

---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/12905?language=javascript
