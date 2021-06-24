# ✔ 입국심사

## 🌈 LEVEL 3

### ✌ 이분탐색

### ✌ 풀이 방법

```js
function solution(n, times) {
  times.sort((a, b) => a - b); // 오름차순 정렬

  let answer = Number.MAX_SAFE_INTEGER;
  let smallest = 1;
  let largest = n * times[times.length - 1];

  while (smallest <= largest) {
    // 전체 중간 시간을 찾는다
    const mid = Math.floor((smallest + largest) / 2);
    let count = 0;

    for (let i = 0; i < times.length; i++) {
      // 심사관 1인당 몇 명을 심사할 수 있는지
      count += Math.floor(mid / times[i]);

      if (count >= n) {
        answer = Math.min(mid, answer);
        break;
      }
    }

    if (count >= n) {
      largest = mid - 1;
    } else {
      smallest = mid + 1;
    }
  }
  return answer;
}
```

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/43238?language=javascript
