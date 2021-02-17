### 📚 중복단어제거
1. N개의 문자열이 입력되면 중복된 문자열 제거

#### 🎯 정리
- 총 세가지로 풀 수 있었다.
1. 기본적인 `for`문. 가독성은 제일 떨어짐 그리고 immutable하지 않음.

```javascript
const arr = [];

for (let i = 0; i < words.length; i++) {
  if (!arr.includes(words[i])) {
    arr.push(words[i]);
  }
}
```

1. `foreach`문. 가독성은 향상 하지만 immutable하지 않음

```javascript
const arr = [];

words.forEach((word) => {
  if (!arr.includes(word)) {
    arr.push(word);
  }
});
```

3. `reduce`를 사용. 가독성 향상 immutable 함 성능은 제일 안좋은걸로 알음.

```javascript
return words.reduce((pre, cur) => {
  if (!pre.includes(cur)) {
    return [...pre, cur];
  }

  return pre;
}, []);
```

- `foreach`가 가장 좋은 선택인 거 같다.
