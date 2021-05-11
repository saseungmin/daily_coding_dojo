# ✔ 쿼드압축 후 개수 세기

## 👉 LEVEL 2

### 🎯 월간 코드 챌린지 시즌1

#### 📚 배운 점
- 재귀와 완전탐색 문제
- 푼 방법이 시간복잡도가 굉장히 느렸다. 그래서 점수가 1점이 증가된거 같다.

```js
function solution(array) {
  let zeroCount = 0;
  let oneCount = 0;

  function recursive(arr) {
    // 재귀의 배열은 모두 같은지 확인하기 위해 첫번째 위치의 값을 저장
    const baseValue = arr[0][0];
    const { length } = arr;

    if (length === 1) { // 길이가 1이면 끝
      if (baseValue) { // 그 값이 1 이면
        oneCount += 1; // count + 1
      } else { // 0이면
        zeroCount += 1;
      }
    } else if (isAllSameValue(arr)) { // 현재 배열의 각 값들이 모두 같은 값이면
      if (baseValue) { // 기본 값이 1 이면
        oneCount += 1;
      } else { //기본 값이 0 이면
        zeroCount += 1;
      }
    } else {
      const lengthCompression = length / 2; // 4등분을 하기 위해 2로 길이를 나눈다.
      // 1분할 배열을 length / 2 길이로 생성한다.
      const firstDivision = initArray(lengthCompression);
      const secondDivision = initArray(lengthCompression);
      const thirdDivision = initArray(lengthCompression);
      const fourthDivision = initArray(lengthCompression);

      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          const target = arr[i][j];

          // 4분할 값을 각 분할로 만든 배열에 각각 값을 넣어준다.
          if (i < lengthCompression) {
            if (j < lengthCompression) {
              firstDivision[i][j] = target;
            } else {
              secondDivision[i][j - lengthCompression] = target;
            }
          } else if (j < lengthCompression) {
            thirdDivision[i - lengthCompression][j] = target;
          } else {
            fourthDivision[i - lengthCompression][j - lengthCompression] = target;
          }
        }
      }

      // 각 분할을 다시 재귀한다.
      for (const compression of [firstDivision, secondDivision, thirdDivision, fourthDivision]) {
        recursive(compression);
      }
    }
  }

  recursive(array);

  return [zeroCount, oneCount];
}
```



---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/68936?language=javascript
