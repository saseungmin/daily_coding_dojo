# ✔ 예상 대진표

## 👉 LEVEL 2

### 🎯 2017 팁스타운

#### 📚 배운 점

```js
function solution(n, a, b) {
  let answer = 1;

  while (true) {
    if ((a % 2 === 0 && a - 1 === b) || (a % 2 !== 0 && a + 1 === b)) {
      return answer;
    }

    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    answer += 1;
  }
}
```

- 좀 더 간단한 다른 분이 푼문제

```js
function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    answer += 1;
  }

  return answer;
}
```

---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/12985?language=javascript
