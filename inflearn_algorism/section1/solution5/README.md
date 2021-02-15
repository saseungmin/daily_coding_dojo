### 📚 최솟값 구하기

1. 배열로 숫자가 주어지고 가장 작은 수 출력

#### 🎯 정리
- `Math.min(...arr);`를 사용했다. 하지만, 크기가 커지면 불가능하다. (`RangeError`)
- `sort`를 사용해서 풀 수도 있다.
```javascript
const ascSort = (a, b) => a - b;

function solution(arr) {
  return arr.sort(ascSort)[0];
}
```
- `reduce`를 사용해서 풀 수도 있었다.

```javascript
const minNum = (pre, cur) => (pre > cur ? cur : pre);

function solution(arr) {
  return arr.reduce(minNum);
}
```