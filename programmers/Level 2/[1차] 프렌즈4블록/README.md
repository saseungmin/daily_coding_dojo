# ✔ [1차] 프렌즈 4블록

## 👉 LEVEL 2

### 🎯 2018 KAKAO BLIND RECRUITMENT

#### 📚 풀이 방법 및 배운점
1. 일단 4개의 동일한 블럭의 위치를 찾아야 한다.

```js
const matchBlocks = (board) => {
  const foundBlocks = [];

  // 4개의 블록 중 왼쪽 아래를 기준으로 찾는다.
  for (let i = 1; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      const target = board[i][j];

      // true false 여부를 확인해주는 이유는 찾은 블록을 0으로 바꾸기 때문에
      // 0 일 경우는 false가 되야 한다.
      // 4개의 블록이 모두 같은 블록일 때
      if (target && target === board[i][j + 1]
        && target === board[i - 1][j + 1]
        && target === board[i - 1][j]) {
        // 해당 위치를 배열에 담는다.
        foundBlocks.push([i, j]);
      }
    }
  }

  return foundBlocks;
};
```

2. 찾은 동일한 블록을 0으로 변경해준다.

```js
const removeFourBlocks = (board, foundBlocks) => {
  const newBoard = [...board];

  // 찾은 블록의 위치에서 위, 오른쪽, 대각선, 자기자신을 0으로 변경해준다.
  foundBlocks.forEach(([x, y]) => {
    newBoard[x][y] = 0;
    newBoard[x][y + 1] = 0;
    newBoard[x - 1][y + 1] = 0;
    newBoard[x - 1][y] = 0;
  });

  return newBoard;
};
```

1. 0으로 변경된 블록과 0위치 위에 존재하는 블록이랑 위치를 바꿔준다. 이때, 맨 아래 왼쪽부터 차례로 비교해준다.

```js
const relocationBlocks = (board) => {
  const newBoard = [...board];

  // 배열의 크기 만큼 도는데 맨 아래부터 위로..
  for (let i = newBoard.length - 1; i > 0; i--) {
    // 만약 해당 행에 0이 존재할 때만
    if (newBoard[i].some((v) => !v)) {
      // 행을 차례로 찾는다.
      for (let j = 0; j < newBoard[i].length; j++) {
        for (let k = i - 1; k >= 0; k--) {
          // 해당 블록이 0일 때, 해당 블록의 바로 위가 0이 아닌 블록이 존재할 때
          if (!newBoard[i][j] && newBoard[k][j]) {
            // 바로 위 블록이랑 0인 블록이랑 변경해준다.
            newBoard[i][j] = newBoard[k][j];
            newBoard[k][j] = 0;
            break;
          }
        }
      }
    }
  }

  return newBoard;
};
```

---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/17679
