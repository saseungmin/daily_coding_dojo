### 📚 뒤집은 소수
1. 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력
2. 단, 예를 들어 910을 뒤집으면 19로 숫자화 해야 한다.
3. 출력 순서는 입력 순

#### 🎯 정리
- 숫자를 먼저 뒤집었다.

```js
const reverse = (number) => parseInt(number
  .toString()
  .split('')
  .reverse()
  .join(''), 10);
```

- 소수를 걸러낸다. 제곱근을 사용한다.
- 약수를 검사할 때 `2 ~ sqrt(N)`까지만 검사하면, 전체 범위에서 약수의 존재 여부를 확신할 수 있다.

```js
const isPrimeNumber = (number) => {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};
```

- 소수면 배열에 담아준다.
- `forEach`를 사용한 방법. side-effect 가 존재한다.

```js
function solution(_, arr) {
  const result = [];

  arr.forEach((number) => {
    const reverseNumber = reverse(number);

    if (isPrimeNumber(reverseNumber)) {
      result.push(reverseNumber);
    }
  });

  return result;
}
```

- `reduce`를 사용한 방법
- 너무나도 깔끔해진 `solution` 함수

```js
const primeNumbers = (primes, number) => {
  const reverseNumber = reverse(number);

  if (isPrimeNumber(reverseNumber)) {
    return [
      ...primes,
      reverseNumber,
    ];
  }

  return primes;
};

function solution(_, arr) {
  return arr.reduce(primeNumbers, []);
}
```