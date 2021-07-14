# ✔ [1차] 추석 트래픽

## 🌈 LEVEL 3

### ✌ 2018 KAKAO BLIND RECRUITMENT

### ✌ 풀이 방법
- 그리디 문제
- 주어진 `'2016-09-15 01:00:04.002 2.0s'`시간을 숫자로 변환해야 한다.

```js
const splitConvertLines = (lines) => lines.flatMap((line) => convertToLineTimeStatus(line.split(' ')));

const convertToLineTimeStatus = (lines) => {
  const date = new Date(lines[0]); // 날짜를 넣어준다.

  const [h, m, seconds] = lines[1].split(':'); // 시, 분, 초
  const [s, ms] = seconds.split('.'); // 초를 밀리초까지 나눠준다.

  // 처리 시간을 끝난시간에서 빼줘야 하기 때문에 s를 없앤 후, .로 나눠준다.
  const processingTime = lines[2].replace(/s/g, '').split('.');

  // endTime에 h, m, s, ms를 각각 넣어준뒤 1초동안 유지되는걸 확인해야하기 때문에
  // 1000을 해줘야 한다. 하지만, 처음 시작시간을 포함하여 처리시간을 계산해야하기 때문에 1000이 아닌 999를 더해준다.
  const endTime = date.setHours(h, m, s, ms) + 999;

  // 밀리초가 없을 수 있다.
  const milliseconds = processingTime.length === 2 ? processingTime[1] : 0;

  // 시작 시간을 구해준다.
  const startTime = date.setSeconds(
    date.getSeconds() - processingTime[0], // 초
    (date.getMilliseconds() - milliseconds) + 1, // 밀리 초
  );

  return [['s', startTime], ['e', endTime]];
};
```

- 정렬을 오름차순으로 해주어야 하는데, 만약 시작시간과 끝시간이 같으면 시작 시간부터 나오게 해야한다.

```js
const sortByEndTimeAsc = (linesTime) => linesTime.sort((a, b) => {
  if (a[1] === b[1]) {
    return -1;
  }

  return a[1] - b[1];
});
```

- 그리디로 문제를 해결한다.

```js
function solution(lines) {
  let answer = 0;
  let count = 0;

  const sortedTimeLines = sortByEndTimeAsc(splitConvertLines(lines));
  // [
  //   [ 's', 1473940797053 ], [ 's', 1473940797071 ],
  //   [ 's', 1473940797648 ], [ 's', 1473940798180 ],
  //   [ 's', 1473940798292 ], [ 'e', 1473940798420 ],
  //   [ 's', 1473940798718 ], [ 's', 1473940798999 ],
  //   [ 's', 1473940799161 ], [ 'e', 1473940799232 ],
  //   [ 'e', 1473940799298 ], [ 'e', 1473940799687 ],
  //   [ 's', 1473940800005 ], [ 's', 1473940800586 ],
  //   [ 'e', 1473940800590 ], [ 'e', 1473940801463 ],
  //   [ 'e', 1473940801740 ], [ 'e', 1473940801747 ],
  //   [ 'e', 1473940801965 ], [ 'e', 1473940803065 ]
  // ]

  sortedTimeLines.forEach((timeLine) => {
    if (timeLine[0] === 's') { // 시작시간일때
      count += 1; // 카운트 + 1
      answer = Math.max(count, answer); // answer와 count를 비교해 크걸로 변경
    }

    if (timeLine[0] === 'e') { // 끝난 시간이면 제외해줘야한다.
      count -= 1; // 카운트 - 1
    }
  });

  return answer;
}
```
<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/17676?language=javascript
