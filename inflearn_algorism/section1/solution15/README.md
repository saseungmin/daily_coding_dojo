### 📚 중복문자제거
- 소문자로 된 문자열이 입력되면 중복된 문자 제거
- 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지

#### 🎯 정리
- `includes`를 사용하여 새로운 배열에 존재하면 넣지 않는다.

```javascript
function solution(str) {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    if (!arr.includes(str[i])) {
      arr.push(str[i]);
    }
  }

  return arr.join('');
}
```
