### 📚 화문 문자열
- 문자열이 입력되면 해당 문자열이 회문 문자열이면 `YES`
- 회문 문자열이 아니면 `NO`를 출력
- 단, 대소문자를 구별하지 않는다.

#### 🎯 정리
- 배열 메서드인 `reverse`를 사용해서 간단하게 회문을 비교할 수 있었다.

```javascript
const reverseStr = upperCase.split('').reverse().join('');
```