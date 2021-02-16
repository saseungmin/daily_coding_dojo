### 📚 일곱 난쟁이
1. 일곱 난쟁이가 아닌 9명이였다.
2. 일곱 난쟁이의 키의 합은 100이였다.
3. 9명의 난쟁이의 키가 주어졌을 때, 일곱 난쟁이를 찾아라.
4. 정답이 여러 가지인 경우 아무거나 출력

#### 🎯 정리
- 문제는 완전탐색문제였다.
- 아무거나 출력하라여서 다음과 같이 해도되겠지만, 효휼성에 문제가 있을 거 같다.

```javascript
function solution(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        return arr.filter((dwarf) => dwarf !== arr[i] && dwarf !== arr[j]);
      }
    }
  }

  return null;
}
```

- 그래서 그냥 배열을 잘라 리턴했다.

```javascript
function solution(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  let answer = arr;

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }

  return answer;
}
```