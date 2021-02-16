### 📚 홀수
1. 홀수인 자연수들을 모두 골라 합을 구한다.
2. 고른 홀수들 중 최소값
3. `[합, 최소값]`
4. 100보다 작다.

#### 🎯 정리
- `reduce`를 사용하여 풀었다.

```javascript
const isCheckNum = (num) => num > 100;
const findOverNum = (arr) => arr.findIndex(isCheckNum) !== -1;
const oddSumMin = (pre, cur) => { // 여기 합과 최소값을 같이 구한다.
  if (cur % 2 !== 0) {
    return [pre[0] + cur, pre[1] > cur ? cur : pre[1]];
  }

  return pre;
};

function solution(arr) {
  if (findOverNum(arr)) {
    return false;
  }

  return arr.reduce(oddSumMin, [0, 100]);
}
```
- 코드가 만족스럽지 못하다. 깔끔하다고 느껴지지 않고 하나의 function에 두 가지의 역할을 가지고 있어 복잡해보인다.