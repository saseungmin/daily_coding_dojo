# ✔ 피보나치 수

## 👉 LEVEL 2

### 🎯 연습문제

#### 📚 배운 점
- 재귀의 스택오버플로우..
- 처음 풀었던 건 재귀를 사용해서 풀었고, 그다음에 실패하자 dp를 사용해서 이전에 찾은 값은 dp 배열에 저장해두고 찾았는 식으로 시간복잡도를 낮출려고 했었다. 하지만 테케 13, 14가 런타임 에러.
- 다음과 같이 for문으로 해결할 수 있었다.

```js
function solution(n) {
  const fibo = [0, 1];

  if (n < 2) {
    return fibo[n];
  }

  for (let i = 2; i <= n; i++) {
    fibo.push((fibo[i - 2] + fibo[i - 1]) % 1234567);
  }

  return fibo[n];
}
```

---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/12945?language=javascript
