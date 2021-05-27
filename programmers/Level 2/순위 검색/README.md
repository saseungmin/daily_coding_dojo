# ✔ 순위 검색

## 👉 LEVEL 2

### 🎯 2021 KAKAO BLIND RECRUITMENT

#### 📚 배운 점
- 우여곡절이 굉장히 많은 문제였다.
- 문제 자체는 굉장히 간단했다. 하지만 효율성을 따지는 문제였기에 많은 시도와 고통의 연속이였다.
- 처음으로 푼 효율성을 배재하고 정확성에 중점을 두고 다음과 같이 풀었다.

```js
function solution(info, query) {
  const answer = [];

  for (let i = 0; i < query.length; i++) {
    const newQuery = query[i].split(' ').filter((q) => q !== 'and');
    let count = 0;

    for (let j = 0; j < info.length; j++) {
      let check = true;
      const newInfo = info[j].split(' ');

      for (let k = 0; k < newInfo.length - 1; k++) {
        if (newQuery[k] !== '-' && newQuery[k] !== newInfo[k]) {
          check = false;
          break;
        }
      }

      if (check) {
        const len = newInfo.length;

        if (Number(newQuery[len - 1]) <= Number(newInfo[len - 1])) {
          count += 1;
        }
      }
    }

    answer.push(count);
  }

  return answer;
}
```

- 하지만, 모든 효율성에서 실패하였다.
- 그래서 어떻게 할지 고민하다가 잘 모르겠어서 다른 분들이 푼것을 바탕으로 힌트를 얻어서 풀었다.
- 조합과 이분검색을 사용하여 효율성문제를 해결할 수 있었다.
- 여기서 핵심은 이분검색이다.

```js
const binarySearch = (scores, queryScore) => {
  let start = 0;
  let end = scores.length;

  while (start < end) {
    const middle = Math.floor((start + end) / 2);

    if (scores[middle] >= queryScore) {
      end = middle;
    }

    if (scores[middle] < queryScore) {
      start = middle + 1;
    }
  }

  return scores.length - start;
};
```

- 또한, 원래 `Map`을 사용하여 문제를 풀어봤었는데, 객체로 info 정보를 담아야 효율성을 통과할 수 있었다. 여기서 `Map`보다 객체를 사용하는게 더 빠르다는걸 알게 되었다.
- 그리고 단순히 값을 찾을 때 확실히 `filter`와 같은 배열 메서드를 쓰는 것보다 이분검색을 사용하여 찾는게 빠르다는걸 느꼈다. 왜냐면 `filter`를 사용했을땐 효율성을 실패하였기 때문이다.
- 그리고 그냥 `forEach`, 배열 메서드보다 `for`문이 가장 빠르다.
- 그리고 불변하게 배열을 조작하는거보다 그냥 `push`와 값할당이 더 빠르다.

---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/72412?language=javascript
