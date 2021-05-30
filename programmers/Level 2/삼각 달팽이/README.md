# ✔ 삼각 달팽이

## 👉 LEVEL 2

### 🎯 월간 코드 챌린지 시즌1

#### 📚 푼 방법
1. 삼각형을 다음과 같이 지각 삼각형 형태로 만든 후 초기화 해준다.

```js
const answer = Array.from({ length: n }, (_, i) => Array(i + 1).fill(null));

// [
//   [ null ],
//   [ null, null ],
//   [ null, null, null ],
//   [ null, null, null, null ],
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null, null ]
// ]
```

2. 맨 위에서 아래로 숫자를 증가하면 값을 넣는다.

```js
for (let i = 0; i < n; i++) {
  x += 1;
  count += 1;

  answer[x][y] = count;
}

// [
//   [ 1 ],
//   [ 2, null ],
//   [ 3, null, null ],
//   [ 4, null, null, null ],
//   [ 5, null, null, null, null ],
//   [ 6, null, null, null, null, null ]
// ]
```

3. 맨 왼쪽에서 오른쪽 끝까지 값을 넣는다.

```js
for (let i = 0; i < n - 1; i++) {
  y += 1;
  count += 1;

  answer[x][y] = count;
}

// [
//   [ 1 ],
//   [ 2, null ],
//   [ 3, null, null ],
//   [ 4, null, null, null ],
//   [ 5, null, null, null, null ],
//   [ 6, 7, 8, 9, 10, 11 ]
// ]

```

4. 대각선으로 아래서 맨 위까지 값을 넣는다.

```js
for (let i = 0; i < n - 2; i++) {
  x -= 1;
  y -= 1;
  count += 1;
  
  answer[x][y] = count;
}

// [
//   [ 1 ],
//   [ 2, 15 ],
//   [ 3, null, 14 ],
//   [ 4, null, null, 13 ],
//   [ 5, null, null, null, 12 ],
//   [ 6, 7, 8, 9, 10, 11 ]
// ]
```

5. 이 3가지의 과정을 n이 0이 될때까지 반복한다.

```js
[
  [ 1 ],
  [ 2, 15 ],
  [ 3, 16, 14 ],
  [ 4, 17, 21, 13 ],
  [ 5, 18, 19, 20, 12 ],
  [ 6, 7, 8, 9, 10, 11 ]
]
```

6. `flat`을 사용해 모든 배열을 나열 후 반환한다.ㅁ

```js
answer.flat();

[1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11]
```

---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/68645?language=javascript
