# ✔ 숫자 문자열과 영단어

## 👉 LEVEL 1

### 🎯 2021 카카오 채용연계형 인턴십

#### 📚 문제 풀이

```js
const dictionary = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function solution(s) {
  let answer = '';
  let word = '';

  const regexp = /[0-9]/;

  for (let i = 0; i < s.length; i++) {
    if (regexp.test(s[i])) { // 숫자면
      answer += s[i]; // 바로 정답에 담는다.
    } else { // 그게 아니면 temp word에 담는다.
      word += s[i];

      const number = dictionary[word]; // dictionary 객체에 값이 존재하면

      if (regexp.test(number)) {
        answer += number; // 변환된 숫자를 answer에 담는다.
        word = ''; // word 초기화
      }
    }
  }

  return Number(answer); // 숫자로 변환
}
```

#### 다른 풀이들

```js
// 1
function solution(s) {
    s = s.replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9)
    return parseInt(s);
}

// 2
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
```

---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/81301?language=javascript
