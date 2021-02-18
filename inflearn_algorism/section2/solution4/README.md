### 📚 점수계산
1. OX 문제
2. 연속으로 답을 맞히는 경우는 가산점
3. 1번 문제가 맞는 경우에는 1점
4. 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점
5. 연속으로 답을 맞으면 두 번째 2점, 세 번째 3점.. K번째 문제는 K점
6. 틀린 문제는 0점
7. 1이 정답 0이 오답

#### 🎯 정리
- 처음 진행한 방법은 `map`을 사용한 방법이였다.

```javascript
function solution(arr) {
  let count = 0;

  const resultArr = arr.map((value) => {
    if (value !== 0) {
      count += 1;

      return count;
    }

    count = 0;
    return count;
  });

  return resultArr.reduce((a, b) => a + b, 0);
}
```

- 하지만, `count` 때문에 side effect가 발생하기 떄문에 좋지 않은 코드여서 변경하였다.
- 또한, 배열 메서드인 `map`과 `reduce` 두개를 사용하기 때문에 성능적으로 좋지 않을 것이다.
- 그래서 side effect를 없애고 immutable한 `reduce`만 사용해서 문제를 풀어봤다.

```javascript
const sumCorrectAnswer = (pre, cur) => {
  if (cur !== 0) {
    const count = pre.count + 1;

    return {
      count,
      sum: pre.sum + count,
    };
  }

  return {
    ...pre,
    count: 0,
  };
};

function solution(arr) {
  const { sum } = arr.reduce(sumCorrectAnswer, { count: 0, sum: 0 });

  return sum;
}
```