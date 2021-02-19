### 📚 봉우리
1. 지도 정보가 `N * N` 격자판에 주어진다.
2. 각 격자에는 그 지역의 높이
3. 자신의 상하좌우보다 큰 숫자는 봉우리 지역
4. 봉우리가 몇 개있는지?

#### 🎯 정리
- 시간이 꽤나 걸렸다..
- 실제 코테일 때 이런 문제가 나왔다면 리팩토링시 어떻게 해결해야할까?
- 문제를 푸는 것이 중요할까? 리팩토링까지 하는것이 좋은걸까? 
- 서로 의존성이 너무 많아서 리팩토링이 힘들었다.
- 리팩토링은 했지만 했다는 느낌이 안든다. 흠..
- 코드가 마음에 안든다. 일단 `for`문을 3번이나 중첩되어있어서 이렇게 될 수 밖에 없는 거 같다.

```javascript
const isDefinedLocation = (locate, i, j) => (target) => {
  if (target === 0) {
    return (locate[0] + i < 0 || locate[1] + j < 0);
  }

  return (locate[0] + i >= target || locate[1] + j >= target);
};

const locationCheckIterator = (arr, i, j) => {
  const now = arr[i][j];
  let count = 0;

  const locations = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  locations.forEach((locate) => {
    const check = isDefinedLocation(locate, i, j);

    if (check(0) || check(arr.length) || now > arr[locate[0] + i][locate[1] + j]) {
      count += 1;
    }
  });

  if (count === 4) {
    return 1;
  }

  return 0;
};

const iteratorFor = (arr, i) => {
  let sum = 0;

  for (let j = 0; j < arr.length; j++) {
    sum += locationCheckIterator(arr, i, j);
  }

  return sum;
};

function solution(arr) {
  let answer = 0;

  arr.forEach((_, index) => {
    answer += iteratorFor(arr, index);
  });

  return answer;
}
```