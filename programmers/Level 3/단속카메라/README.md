# ✔ 단속카메라

## 🌈 LEVEL 3

### ✌ Greedy

### ✌ 풀이 방법
- 전형적인 그리디 알고리즘 문제
- 회의실 배정문제와 동일

```js
function solution(routes) {
  let answer = 0;
  let endPoint = -30001; // 문제에서 -30000까지

  routes.sort((a, b) => a[1] - b[1]); // 진출 지점이 빠른 순으로 정렬

  routes.forEach(([input, output]) => {
    // 카메라의 지점이 진입지점보다 빠를 때는 카메라를 설치해야 한다.
    if (endPoint < input) {
      // 카메라를 설치했으니 위치를 변경
      endPoint = output;
      answer += 1;
    }
  });

  return answer;
}
```

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/42884?language=javascript
