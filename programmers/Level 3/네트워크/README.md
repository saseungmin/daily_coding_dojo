# ✔ 네트워크
## 🌈 LEVEL 3
### ✌ DFS
### ✌ 풀이 방법
- dfs 문제.

```js
function solution(n, computers) {
  const check = Array.from({ length: n }, () => false); // 체크를 하기 위한 배열
  let answer = 0;
  
  function dfs(v) {
    check[v] = true; // 일단 재귀를 돌면 해당 check를 true로 바꿔서 다시 재귀호출을 못하게 변경
    
    for (let i = 0; i < n; i++) {
      // 1일때가 연결되어있는 상태이기 떄문에, check가 false면 아직 안간것
      if(computers[v][i] === 1 && !check[i]) {
        dfs(i);
      }
    }
  }
  
  for (let i = 0; i < check.length; i++) {
    if (!check[i]) {
      dfs(i);
      answer += 1; // 네트워크 개수를 카운트
    }
  }
  
  return answer;
}
```

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/43162?language=javascript