# ✔ 숫자의 표현

## 👉 LEVEL 2

### 🎯 연습문제

#### 📚 푼방법
- DFS를 사용하여 문제를 풀었다.

```js
function solution(n) {
  let answer = 0;

  function dfs(level, sum) {
    if (sum > n) { // 합이 n보다 크면 쓸모없음
      return;
    }

    if (sum === n) { // 같으면  + 1 해준다.
      answer += 1;
      return;
    }

    dfs(level + 1, sum + level); // 재귀
  }

  for (let i = 1; i <= n; i++) {
    dfs(i, 0); // 1부터 15까지
  }

  return answer;
}
```

---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/12924?language=javascript
