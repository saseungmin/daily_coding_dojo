# ✔ [1차] 셔틀버스

## 🌈 LEVEL 3

### ✌ 2019 카카오 개발자 겨울 인턴쉽

### ✌ 풀이 방법
- DFS를 사용하여 문제를 풀었다.
- `banned_id`와 `user_id`가 일치하는지 검증하는 로직

```js
const isMatchId = (bannedId) => (userId) => {
  // . : 줄바꿈 문자(\n)를 제외한 모든 문자와 일치. 공백포함
  const convertAsterisk = bannedId.replace(/\*/g, '.');
  const regex = new RegExp(`^(${convertAsterisk})$`);

  return regex.test(userId);
};
```

- 경우의 수를 구할 때 조건이 좀 까다로웠다.
- 순서변경, 중복 부분 순열이 존재해서는 안되었다. 즉, 순서도 달라도 일치하는 하는것으로 체크되기 때문에 count에서 제거해줘야 한다.

```
Set(3) {
  'abc123crodofrodofrodoc',
  'abc123fradifrodofrodoc',
  'abc123crodofradifrodoc'
}
```

- 그렇기에 `Set`을 사용했다.

```js
function solution(user_id, banned_id) {
  const result = new Set(); // 중복 제거
  // 중복 순열 제거, 방문했는지 체크 배열
  const check = Array.from({ length: user_id.length }, () => false);
  // 조건에 일치하는 user_id을 담는 배열
  const temp = Array.from({ length: banned_id.length }, () => 0);

  function dfs(level) {
    // level과 밴아이디의 길이가 같을 때는 올바른 경우의 수
    if (level === banned_id.length) {
      // 배열을 정렬을 시킨뒤 join을 시키는 이유는 순서가 달라도 일치하기 때문에
      // 중복을 제거하기 위해 Set을 사용
      result.add(temp.slice().sort().join(''));
      return;
    }

    // 커링의 클로저로 현재 banned_id 저장
    const match = isMatchId(banned_id[level]);

    for (let i = 0; i < user_id.length; i++) {
      // 방문하지 않고, user_id가 banned_id와 일치할 때
      if (!check[i] && match(user_id[i])) {
        // temp 배열에 담아주고
        temp[level] = user_id[i];
        // 방문했다 표시
        check[i] = true;

        // level을 1증가 후 재귀
        dfs(level + 1);

        // 재귀에서 빠져나올 때 false로 다시 변경
        check[i] = false;
      }
    }
  }

  dfs(0);

  // Set의 사이즈를 반환
  return result.size;
}
```


<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/64064?language=javascript
