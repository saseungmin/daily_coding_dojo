### 📚 후위식 연산(postfix)
1. 후위연산식이 주어지면 연산한 결과를 출력하라.
2. `3 * (5 + 2) - 9`을 후위연산식으로 표현하면 `352+*9-`로 표현되며 그 결과는 12이다.

#### 🎯 정리
- 이 문제에서 얻은 것은 `isNaN`에 대해서 알게되었는데, `isNaN`과 `Number.isNaN`이랑 다르다는 점이다.
- `Number.isNaN` ES2015 이후에 생긴 것으로 기존의 `isNaN`보다 더 강력하게 판별해준다.
- 그래서 생긴 더 강력한 것이 `Number.isNaN`인 것이고 `isNaN`보단 `Number.isNaN`을 사용하라고 권고하고 있고, EsLint에서도 에러로 판별하고 있다.
- `isNaN` 함수의 인수가 `Number` 형이 아닌 경우, 그 값은 먼저 숫자로 강제한다.
- `isNaN`은 현재 값이 `NaN`이거나, 숫자로 변환했을 때 `NaN`이 되면 참을 반환하지만, `Number.isNaN`은 현재 값이 `NaN`이어야만 참을 반환한다.
- 여기서는 숫자로 변환한뒤 확인해야하기 떄문에 `isNaN`을 사용했다.

```js
if (isNaN(value)) {
  const operand1 = stack.pop();
  const operand2 = stack.pop();

  stack.push(calculate[value](operand2, operand1));
} else {
  stack.push(Number(value));
}
```