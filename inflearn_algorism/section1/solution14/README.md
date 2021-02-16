### 📚 가운데 문자 출력
1. 소문자로 된 문자열이 입려되면 가운데 문자를 출력
2. 문자열의 길이가 짝수이면 가운데 2개 문자 출력

#### 🎯 정리
- `substr`를 사용해서 짝수와 홀수에 따라 리턴해주었다.

```javascript
function solution(str) {
  const { length } = str;

  if (length % 2 !== 0) {
    return str.substr(Math.floor(length / 2), 1);
  }

  return str.substr(length / 2 - 1, 2);
}
```