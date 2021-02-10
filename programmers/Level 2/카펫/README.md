# ✔ 카펫
## 📌 LEVEL 2
### 🌈 문제 풀이
- 둘레(brown)과 둘레를 제외한(yellow)를 더하면 사각형의 넓이(area)를 구할 수 있다.
- `area`를 2로 나눈 값을 시작으로 `for` 루프를 돈다.
- 그중에 `area`를 `i`로 나눈 나머지가 0이면 `for`문을 건너뛴다.

```javascript
if (area % i !== 0) {
  continue;
}
```

- i는 가로가 되고, area를 i로 나눈 몫이 세로가 된다. (가로는 항상 세로보다 길거나 같다.)
- 그 후 둘레를 제외한 넓이가 yellow랑 같을 때 가로와 세로의 길이를 배열로 리턴해준다.

```javascript
if ((width - 2) * (height - 2) === yellow) {
  return [width, height];
}
```

---

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/42842?language=javascript