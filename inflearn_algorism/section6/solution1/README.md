### 📚 올바른 괄호
- 올바른 괄호면 "YES"
- 올바르지 않으면 "NO"


#### 🎯 정리
- 간단한 Stack 문제
- `(`면 배열에 `push`를 한다.

```js
if (brackets[i] === '(') {
  stack.push(brackets[i]);
}
```
- `)`일 때 배열의 크기가 0이면 `NO`를 리턴

```js
if (brackets[i] === ')' && !stack.length) {
  return 'NO';
}
```
- `)`일 때 Stack의 top이 `(`면 `pop`을 해준다.

```js
if (brackets[i] === ')' && stack[stack.length - 1] === '(') {
  stack.pop();
}
```
- 만약 stack의 크기가 0보다 크면 `NO` 0이면 `YES`

```js
if (stack.length > 0) {
  return 'NO';
}

return 'YES';
```