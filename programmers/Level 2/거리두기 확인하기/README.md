# ✔ 거리두기 확인하기

## 👉 LEVEL 2

### 🎯 2021 카카오 채용연계형 인턴십

#### 📚 배운 점
- 이런 구현 문제는 단계별로 TDD를 적용하여 문제 풀기가 좋다.
- 배운점은 이 문제를 카카오 인턴 코테때 봤었는데 그때 테스트 케이스가 2개가 실패했었다. 원인은 하.. 실수.. 다 풀어놓고, 아래와 같이 같은 변수명을 썼었다..

```js
const isSuccessOneManhattan = isOneManhattanDistance(waitingRoom);
const isSuccessDiagonal = isSuccessDiagonalDistancing(waitingRoom); // 같은 조건
const isSuccessTwoManhattan = isSuccessDiagonalDistancing(waitingRoom); // 같은 조건
```

- 소름 돋는건 이번에도 똑같은 실수를 했다는거... 미친..
- 각 단계에 별로 풀었다.
1. 현재 사람의 위치에서 동, 서, 남, 북으로 거리가 1이면 무조건 실패

```js
// [-1, 0], [0, 1], [1, 0], [0, -1] => 무조건 거리두기 실패
const isOneManhattanDistance = (waitingRoom) => (x, y) => {
  const oneManhattans = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  for (let i = 0; i < oneManhattans.length; i++) {
    const newX = x + oneManhattans[i][0];
    const newY = y + oneManhattans[i][1];

    if (newX >= 0 && newX < 5 && newY >= 0 && newY < 5) {
      if (waitingRoom[newX][newY] === 'P') {
        return false;
      }
    }
  }

  return true;
};
```

2. 대각선으로 4방향을 체크한다. 이때 각 대각선 위치의 양 옆중 하나라도 `X`(파티션)가 존재하지 않으면 거리두기 실패다.

```js
// [1, -1], [-1, 1], [1, 1], [-1, -1] => 양 옆에 파티션이 존재하면 성공, 양 옆에 파티션이 존재하지 않거나 하나만 존재하면 실패
const isSuccessDiagonalDistancing = (waitingRoom) => (x, y) => {
  const betweenLocation = [[-1, 0, 0, 1], [0, 1, 1, 0], [1, 0, 0, -1], [0, -1, -1, 0]];
  const diagonalManhattan = [[-1, 1], [1, 1], [1, -1], [-1, -1]];

  for (let i = 0; i < diagonalManhattan.length; i++) {
    const newX = x + diagonalManhattan[i][0];
    const newY = y + diagonalManhattan[i][1];

    if (newX >= 0 && newX < 5 && newY >= 0 && newY < 5) {
      if (waitingRoom[newX][newY] === 'P') {
        const [fx, fy] = [x + betweenLocation[i][0], y + betweenLocation[i][1]];
        const [sx, sy] = [x + betweenLocation[i][2], y + betweenLocation[i][3]];

        if (waitingRoom[fx][fy] !== 'X' || waitingRoom[sx][sy] !== 'X') {
          return false;
        }
      }
    }
  }

  return true;
};
```

3. 동서남북으로 거리가 2일때 사이에 파티션이 존재하지 않으면 실패다.

```js
// [0, 2], [-2, 0], [2, 0], [0, -2] => 사이에 파티션이 존재하면 성공, 파티션이 존재하지 않으면 실패
const isTwoManhattanDistance = (waitingRoom) => (x, y) => {
  const twoManhattans = [[0, 2], [-2, 0], [2, 0], [0, -2]];
  const oneManhattans = [[0, 1], [-1, 0], [1, 0], [0, -1]];

  for (let i = 0; i < twoManhattans.length; i++) {
    const newX = x + twoManhattans[i][0];
    const newY = y + twoManhattans[i][1];

    if (newX >= 0 && newX < 5 && newY >= 0 && newY < 5) {
      if (waitingRoom[newX][newY] === 'P') {
        const [ox, oy] = [x + oneManhattans[i][0], y + oneManhattans[i][1]];

        if (waitingRoom[ox][oy] !== 'X') {
          return false;
        }
      }
    }
  }

  return true;
};
```

- 다 푼뒤 다른 사람 풀이를 봐보았지만, 이렇다할 참고해볼만한 코드는 보이지 않았다. 다 제각각이였다.
- 아쉬운점은 위 세 코드에 명확하게 중복되는 코드들이 보인다. 추상화해볼려했지만 쉽지않았다.

---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/81302?language=javascript
