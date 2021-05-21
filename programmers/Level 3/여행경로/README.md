# ✔ 여행경로

## 🌈 LEVEL 3

### ✌ 깊이/너비 우선 탐색(DFS/BFS)

### ✌ 풀이 방법 및 배운점
- 모든 경우의 수를 판단하기 위해서 DFS를 활용하여 문제를 풀 수 있었다.
- 처음에 개똥같이 생각해서 좀 시간이 오래걸렸고, 한가지 문제로 테스트 케이즈가 깨졌는데, 그 이유는 경로를 담는 위치가 잘못되서 그랬다.


```js
function solution(tickets) {
  const answer = [];

  // 경로를 다녀갔는지 체크하는 배열
  let check = Array.from({ length: tickets.length }, () => false);

  function dfs(level, ticket, path) {
    if (level === tickets.length) { // level이 ticket 길이와 같을 경우
      answer.push(path); // 해당 경로들을 배열에 담는다.
      return;
    }

    for (let i = 0; i < tickets.length; i++) {
      const destination = tickets[i][1];

      // 경로를 다녀가지 않은 배열이거나, 넘겨받은 마지막 목적지와 다음의 시작점이 같은 경우
      if (!check[i] && ticket === tickets[i][0]) {
        check[i] = true; // 경로를 들렸으니 true로 바꿔준다.
        // level을 1증가시겨주고, 목적지를 넘겨주고, 목적지도 담긴 경로를 같이 넘겨준다.
        dfs(level + 1, destination, [...path, destination]);
        // 재귀가 끝나면 check배열을 false로 변경해준다.
        check[i] = false;
      }
    }
  }

  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i][0] === 'ICN') { // 출발점은 ICN일 때만
      check[i] = true; // ICN의 위치는 true로 변경
      dfs(1, tickets[i][1], [...tickets[i]]);
      // 재귀가 한번 끝나면 check배열을 초기화
      check = Array.from({ length: tickets.length }, () => false);
    }
  }

  answer.sort();

  return answer[0];
}
```
--- 

- 📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/43163?language=javascript
