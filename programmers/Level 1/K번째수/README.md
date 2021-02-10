#  ✔ K번째 수

## ✌ Level 1

### 🚀 `sort()`
- `sort()` 함수에 대해서 다시 알게된..   
- `sort()` 정렬은 ASCII 순으로 정렬된다.
```javascript
sliceTemp.sort(function(a, b){return a-b});
```
- `function` 호출해서 `sort ()` 메서드는 두 값을 비교할 때 값을 비교 함수에 보내고 반환 된 (음수, 0, 양수) 값에 따라 값을 정렬한다.


### 🚀 다른 방법
- 다른 분께서 푸신 것을 봤다. 간단하게 `map`을 사용해서 `return` 해준다.   
- 이게 더 좋은 방법 같다.
```javascript
function solution(array, commands) {
    return commands.map(v => {
        return array.slice(v[0] - 1, v[1]).sort((a, b) => a - b).slice(v[2] - 1, v[2])[0];
    });
}
```

<hr>

📌 문제출처 : https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
