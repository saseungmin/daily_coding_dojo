# ✔ [1차] 셔틀버스

## 🌈 LEVEL 3

### ✌ 2018 KAKAO BLIND RECRUITMENT

### ✌ 풀이 방법

```js
function solution(n, t, m, timetable) {
  //  초로 변환 후 오름차순 정렬
  const secTimeTable = [...getSeconds(timetable)].sort((a, b) => a - b);
  let startTime = 32400; // 시작 09:00

  for (let i = 0; i < n; i++) {
    //  대기하고 있는 crew의 수
    const filteredCrews = secTimeTable.filter((time) => startTime >= time).length;

    // 만약 마지막 셔틀버스일 때
    if (i === n - 1) {
      // 탑승 인원보다 남은 crew가 더 많거나 같을 때
      if (filteredCrews >= m) {
        // 만약 이러면 그 전 서틀버스에 타야한다. 1분을 빼준다.
        startTime = secTimeTable[m - 1] - 60;
      }
    } else {
      // 마지막 셔틀이 아닐 때
      // 대기하고 있는 crew의 수가 m(탑승인원)보다 클 때는 m만큼만 잘라준다.
      // 그게 아니면 crew인원 수 만큼
      secTimeTable.splice(0, filteredCrews > m ? m : filteredCrews);
      // 시간을 t * 60 만큼 추가해준다. (운행 간격)
      startTime += (t * 60);
    }
  }

  return convertToClockFormat(startTime);
}
```

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/17678?language=javascript
