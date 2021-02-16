### 📚 대문자 찾기
1. 대문자가 몇 개 있는지

#### 🎯 정리
- 정규표현식 사용.

```javascript
function solution(str) {
  const regex = /[A-Z]/g;

  return str.match(regex).length;
}
```