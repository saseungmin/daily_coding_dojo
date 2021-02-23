### 📚 유효한 팰린드롬
- 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 한다.
- 해당 문자열이 팰린드롬이면 `YES`
- 아니면 `NO`
- 단, 회문을 검사할 떄 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않는다.
- 알파벳 이외의 문자들은 무시한다.

#### 🎯 정리
- 정규표현식을 사용하여 알파벳만 골랐다.
- 이번에도 `reverse`를 사용해서 비교하였는데, 새롭게 알게된 것이 있다.
- `reverse`는 자신의 배열을 수정한다. 즉, `immutable` 하지 않은 메서드였다.
- 그래서 왜 테스트를 통과 못하나 했었는데 기존 배열이 수정되어서 그랬던 것이였다.

```javascript
const join = (arr) => arr.join('');
const filter = (str) => str.toUpperCase().match(/[a-zA-Z]/ig);

function solution(str) {
  const filteredStr = filter(str);
  const filtered = join(filteredStr);
  const filteredReverse = join(filteredStr.reverse());

  if (filtered === filteredReverse) {
    return 'YES';
  }

  return 'NO';
}
```

- 다음과 같이 `slice()`를 사용하여 복사해서 사용할 수도 있다.

```javascript
const join = (arr) => arr.join('');

function solution(str) {
  const filtered = join(str.toUpperCase().match(/[a-zA-Z]/ig));
  const filteredReverse = join(filtered.slice().reverse());

  if (filtered === filteredReverse) {
    return 'YES';
  }

  return 'NO';
}
```