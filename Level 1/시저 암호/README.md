# ✔ 시저 암호
## 📌 LEVEL 1
1. 처음에 받은 문자열 `s`를 `split`를 통해 배열로 만든다.
```javascript
const result = s.split('')
```
2. 그 다음 `map`을 통해 필요한 값을 찾는다.
3. `isLowerCase` 함수를 통해 해당 값이 소문자인지 대문자인지 확인한다.
```javascript
const isLowerCase = (str) => str === str.toLowerCase() && str !== str.toUpperCase();
```
4. `findstr` 함수를 통해서 해당 값이 alpabet 배열에서 같은 값을 확인 후 그 값의 인덱스의 크기가 alpabet 배열의 크기보다 클 경우 크기만큼 나눈 나머지 값을 리턴해준다.
```javascript
const findStr = (str) => (alpabet) => {
    const index = alpabet.findIndex((value) => value === str.toUpperCase()) + n;
    return index > alpabet.length - 1 ? alpabet[index % alpabet.length] : alpabet[index];
};
```
5. 리턴받은 배열을 `join`을 해서 문자열로 변환해 `return` 해준다.

---
📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12926