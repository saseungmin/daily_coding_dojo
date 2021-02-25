### 📚 멘토링
1. M번의 수학테스트 등수를 가지고 멘토 멘티를 정한다.
2. 만약 A학생이 멘토, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 한다.
3. 멘토 멘티가 되는 짝을 만들 수 있는 경우의 수를 구하라
4. 만약, 한 줄에 `N = 4`이고, 테스트 결과가 `[3, 4, 1, 2]`로 입력되었다면  3번이 1등 4번이 2등, 1번이 3등, 2번이 4등이다.

#### 🎯 정리
- 완전 탐색 문제.
- 총 4번의 `for`문으로 풀어야했다. 모든 경우의 수를 찾아야했다.
- 일단, 학생 수 만큼의 모든 경우의 수를 찾아야 한다. 학생 수가 N명이면 짝이 될 경우의 수는 `(N * N) - N` 경우의 수이다. (자기 자신 제외)
- 그렇기 때문에 이중 포문으로 모든 학생이 짝이 될 수 있는 경우의 수를 찾아야 한다. N명의 학생이니 N으로 이중 포문을 돈다. 그리고 자기자신일떄, 즉 `i`와 `j`가 같을 때는 루프 계산에서 제외시켜준다.

```js
function solution(arr) {
  const testCaseLen = arr.length;
  const studentLen = arr[0].length;

  let result = 0;

  for (let i = 1; i <= studentLen; i++) {
    for (let j = 1; j <= studentLen; j++) {
      if (i === j) {
        continue;
      }
      // 생략..
    }
  }

  return result;
}
```

- 이제 테스트 결과를 이중 for문을 돌아서 확인한다. (1행부터 차레로)
- 짝이 될 수 있는 `i` 학생과 `j`학생이 각각 테스트 결과의 `(k, s)`학생번호랑 숫자가 같으면 `s`(즉, 자신의 등수)를 기억해야 한다.
- `i`의 `pi`(등수) 와 `j`(학생번호)의 `pj`(등수)를 비교하여 `i`학생번호가 등수(`pi`)가 더 높으면 `count`를 1 증가시켜준다.

```js
let count = 0;

for (let k = 0; k < testCaseLen; k++) {
  let pi = 0;
  let pj = 0;

  for (let s = 0; s < studentLen; s++) {
    if (arr[k][s] === i) {
      pi = s;
    }

    if (arr[k][s] === j) {
      pj = s;
    }
  }

  if (pi < pj) {
    count += 1;
  }
}
```

- `count`가 테스트 길이(`testCaseLen`) 즉, 모든 테스트에서 등수가 높다면 짝이 될 수 있다.
- `result`에 1을 더해준다.

```js
for (let i = 1; i <= studentLen; i++) {
  for (let j = 1; j <= studentLen; j++) {
    let count = 0;
    // 생략..
    if (count === testCaseLen) {
      result += 1;
    }
  }
}
```

- 코드는 마음에 안든다.
- 어떻게 풀어야 더 깔끔하게 풀 수 있을까..
- 완점탐색이라 사실 깔끔하게 풀 수는 없어보인다.
- 이렇게 풀면 효율성도 좋지 못할 거 같다.