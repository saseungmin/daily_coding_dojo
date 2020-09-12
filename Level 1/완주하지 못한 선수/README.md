# ✔ 완주하지 못한 선수

- level 1

1. `Array.prototype.filter()`
- filter는 반환 값이 `Array`
- 값이 없을 때 `undifinded` 반환
- `filter`는 값을 찾아도 끝까지 확인한다.
<hr>

2. `Array.prototye.find()`
- `find`는 반환 값이 각자의 반환 값으로 `return`
- 값이 없을 때 `undifinded` 반환
- `find`는 값을 찾으면 종료
<hr>

3. `Array.prototype.reduce()`
- 재밌는 녀석...
```javascript
let temp = completion.reduce((object,currentValue) => {
    if(!object[currentValue]){
        object[currentValue]=0;
    }
    object[currentValue]++;
    return object;
}, {}) 
```
 - `{}` : 빈 객체로 전달
 - `currentValue` : 현재 `completion array`의 값
 - `{stanko: 1, ana: 1, mislav: 2}`
 
 <hr>
 
 📌 문제출처 : https://programmers.co.kr/learn/courses/30/lessons/42576
