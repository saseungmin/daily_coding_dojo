### 📚 좌표 정렬
1. N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬 후 리턴
2. 정렬기준은 먼저 x값의 의해서 정렬하고, x값이 같을 경우 y값에 의해 정렬

#### 🎯 정리
- 생략..

```js
const convert = (array) => Number(array.join(''));
const toAsc = (a, b) => convert(a) - convert(b);

function solution(locations) {
  return locations.sort(toAsc);
}
```