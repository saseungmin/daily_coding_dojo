# ✔ 행렬의 곱셈

## 👉 LEVEL 2

### 🎯 연습문제

#### 📚 배운 점
- 행렬의 곱셉을 다시 배웠다.
- [행렬의 곱셈](https://mathbang.net/562)
- for 문으로 해결 할 경우

```js
function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const temp = [];

    for (let k = 0; k < arr2[0].length; k++) {
      let sum = 0;

      for (let j = 0; j < arr2.length; j++) {
        sum += arr1[i][j] * arr2[j][k];
      }

      temp.push(sum);
    }

    answer.push(temp);
  }

  return answer;
}
```

- Array로 해결

```js
function solution(arr1, arr2) {
  return Array(arr1.length).fill()
    .map((r, i) => Array(arr2[0].length).fill()
      .map((v, j) => arr1[i].reduce((a, c, k) => a + c * arr2[k][j], 0)));
}
```
---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/12949
