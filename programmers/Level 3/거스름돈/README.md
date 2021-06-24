# ✔ 거스름돈

## 🌈 LEVEL 3

### ✌ 연습문제 / DP

### ✌ 풀이 방법
- 냅색 알고리즘
- 코드는 간단해보이지만, 이해하는데 시간이 오래걸렸다. 인프런에서 공부했던 냅색 알고리즘 DP를 적용해서 풀 수 있었다.

```js
function solution(n, money) {
  const dp = Array.from({ length: n + 1 }, () => 0);
  
  // 0원 1원 2원 3원 4원 5원
  // [0, 0, 0, 0, 0, 0]

  money.forEach((unit) => {
    dp[unit] += 1;

    for (let i = unit + 1; i <= n; i++) {
      dp[i] += dp[i - unit];
    }
  });

  // [ 0, 1, 2, 2, 3, 4 ]
  return dp[n];
}
```

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12907?language=javascript
