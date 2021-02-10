# ✔ 문자열 내림차순으로 배치하기
## 🌈 LEVEL 1
### ✌ 문제 풀이
- `sort()`후 `reverse()`를 하면 역순으로 정렬된다.
```javascript
function solution(s) {
    return s.split('').sort().reverse().join('');
}
```

<hr>

- 📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12917?language=javascript