# ✔ 신규 아이디 추천

## 👉 LEVEL 1

### 🎯 2021 KAKAO BLIND RECRUITMENT

#### 📚 문제 풀이

- TDD를 적용해가며 하나의 기능씩 만들어가며 차근차근 풀어가봤다.
- 생각보다 시간이 오래걸렸지만 배워가는 과정이라 생각하겠다.
- TDD를 적용하니 functional로 풀렸다.
- 모든 부분을 functional 하다보니 코드가 지저분해진 면도 없지 않아 있다.

```js
function solution(new_id) {
  return addLessThanThreeCharacters( // 7
    removeOverThanFifteenCharacters( // 6
      insertLetterA( // 5
        removeBeginAndEndFullStop( // 4
          replaceFullStop( // 3
            removeNotMatchCharacters( // 2
              replaceToLowerCase(new_id), // 1
            ),
          ),
        ),
      ),
    ),
  );
}
```

- 이번 문제를 풀며 다시 한번 정규표현식에 대해 생각해볼 수 있었다.
- 그리고 [`padEnd`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)라는 문자열 메서드를 알게되었다. `repeat`보다 더 많은 기능이 있는거 같았다.
- `repeat`를 사용했을 때

```js
const addLessThanThreeCharacters = (id) => {
  const len = id.length;

  if (len <= 2) {
    return id + id[len - 1].repeat(3 - len);
  }

  return id;
};
```

- `padEnd`를 사용했을 때

```js
const addLessThanThreeCharacters = (id) => id.padEnd(3, id[id.length - 1]);
```

---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript
