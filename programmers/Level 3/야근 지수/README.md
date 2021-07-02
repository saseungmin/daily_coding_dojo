# ✔ 야근 지수

## 🌈 LEVEL 3

### ✌ 연습문제

### ✌ 풀이 방법
- 우선순위 힙을 사용하여 풀 수도 있을 거 같다.
- 풀고 싶었지만, JavaScript는 우선순위힙이 없다.
- 효율성에 있어서 sort를 한 번만 사용해야 되기 때문에 max값을 사용하여 문제를 풀 수 있었다.
- 가장 첫번째 인덱스번호가 max값을 유지하게 시키기 위해 안에서 for문을 돌아 max값보다 같거나 큰 친구들을 -1을 해줌으로써 해결 할 수 있었다.

```js
function solution(n, works) {
  if (works.reduce((cal, work) => cal + work) <= n) {
    return 0;
  }

  works.sort((a, b) => b - a);

  while (n > 0) {
    const max = works[0];

    for (let i = 0; i < works.length; i++) {
      if (max <= works[i]) {
        works[i] -= 1;
        n -= 1;
      }

      if (!n) {
        break;
      }
    }
  }

  return works.reduce((cal, work) => cal + work ** 2, 0);
}
```

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12927?language=javascript
