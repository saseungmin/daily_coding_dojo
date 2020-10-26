# 🌈 이상한 문자 만들기

### 🔸 LEVEL 1
- 공백을 제거하기 위해 `split`을 사용한다.
- 그 후 `map`을 사용해 각 단어를 다시 각 문자로 `split`을 해주고 각 단어를 `map`을 해준다.
- 그리고 `index`가 짝수면 대문자, 홀수면 소문자로 변경해준뒤 `join`을 사용하여 문자열로 변경해준다.

```javascript
function solution(s) {
  return s
    .split(' ')
    .map((strArr) => strArr
      .split('')
      .map((str, index) => (index % 2 === 0 ? str.toUpperCase() : str.toLowerCase()))
      .join(''))
    .join(' ');
}
```

### 📌 문제 출처
- https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript