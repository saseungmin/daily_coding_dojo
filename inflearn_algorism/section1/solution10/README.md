### 📚 문자 찾기
1. 특정문자가 입력받은 문자열에 몇 개 존재하는지

#### 🎯 정리
- 정규 표현식을 사용하였다.
- 정규표현식에 변수를 넣고 사용하려면 `RegExp`를 사용해야 한다.

```javascript
function solution(str, t) {
  const regex = new RegExp(t, 'ig');

  return str.match(regex).length;
}
```