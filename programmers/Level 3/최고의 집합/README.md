# ✔ 최고의 집합

## 🌈 LEVEL 3

### ✌ 연습문제

### ✌ 풀이 방법
- 처음에는 단순히 DFS를 사용했지만, 시간초과.
- 블로그를 참고했다.
- 배열의 원소들의 차가 가장 적은 것이 최고의 집합.

```js
function solution(n, s) {
  if (n > s) {
    return [-1];
  }

  const mid = Math.floor(s / n); // 가운데 값을 구한다.
  const answer = Array.from({ length: n }, () => mid); // 중간 값으로 n크기 만큼 초기화

  // 남은 자리? 나머지? 만큼 맨 뒤에부터 +1을 증가해주어
  // 요구하는 s의 값 만큼 맞춰준다.
  for (let i = 0; i < s % n; i++) {
    answer[answer.length - 1 - i] += 1;
  }

  return answer;
}
```

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12938?language=javascript
