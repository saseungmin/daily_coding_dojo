### 📚 크레인 인형뽑기 게임 (2019 카카오 개발자 겨울 인턴십)
- [문제 참고](https://programmers.co.kr/learn/courses/30/lessons/64061)

#### 🎯 정리
- 스택을 사용한 문제.
- 이전에 풀어봤던 문제였다. ([programmers](https://github.com/saseungmin/daily_coding_dojo/tree/master/programmers/Level%201/%ED%81%AC%EB%A0%88%EC%9D%B8%20%EC%9D%B8%ED%98%95%EB%BD%91%EA%B8%B0%20%EA%B2%8C%EC%9E%84))
- 다시 풀려니 잠시 햇갈렸지만, 전에 문제 풀었을 때보다 훨씬 간단하게 풀 수 있었다.
- `moves`를 for문을 돌고 2차원 배열을 다시 for문을 돈다.

```js
moves.forEach((move) => {
  for (let i = 0; i < board.length; i++) {
    // ..
  }
});
```

- 만약 `board[i][move - 1]` 위치가 0이 아닐 때, 스택의 top부분이랑 `board[i][move - 1]`값과 같으면 answer 2를 더해주고 `pop`을 해준다.
- 그게 아니면 `push`를 해준다.
- 그리고 `board[i][move - 1]`를 0으로 바꿔준다.

```js
for (let i = 0; i < board.length; i++) {
  const tile = board[i][move - 1];

  if (tile !== 0) {
    if (stack[stack.length - 1] === tile) {
      answer += 2;
      stack.pop();
    } else if (stack[stack.length - 1] !== tile) {
      stack.push(tile);
    }

    board[i][move - 1] = 0;
    break;
  }
}
```