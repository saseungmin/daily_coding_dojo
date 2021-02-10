# ✔ 소수 만들기
## 🌈 LEVEL 2
### 📚 Summer/Winter Coding(~2018)
- 개념은 완전탐색이였다.
- 간단해보였지만, 모든 값을 더하는 완전탐색 같은것은 `for`문으로 여러번 찾아야되기 때문에 쉽지 않은거 같다.
- `for`문을 3번을 돌아 세자리의 숫자를 더해서 소수인지를 체크한 후 소수의 개숫를 구하는 것이다.

```javascript
for (let i = 0; i < len; i++) {
  for (let j = i + 1; j < len; j++) {
    for (let k = j + 1; k < len; k++) {
      const number = nums[i] + nums[j] + nums[k];

      // 생략..
    }
  }
}
```
- 소수 체크

```javascript
const checkDecimal = (sum) => {
  if (sum === 1) return true;

  for (let i = 2; i < sum; i++) {
    if (sum % i === 0) return false;
  }

  return true;
};
```

- 시간복잡도에서 그리 좋지 못한거 같았다.

---

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12977?language=javascript