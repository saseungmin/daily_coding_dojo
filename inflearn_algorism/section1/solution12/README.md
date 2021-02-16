### 📚 대소문자 변환
1. 대문자는 소문자로 소문자는 대문자로 변환

#### 🎯 정리
- 정규표현식 사용.

```javascript
const caseConversion = (value) => (value.match(/[A-Z]/) ? value.toLowerCase() : value.toUpperCase());

function solution(str) {
  return str.split('').map(caseConversion).join('');
}
```