### 📚 아나그램(해쉬)
1. 아나그램이란? ([참고](https://m.blog.naver.com/PostView.nhn?blogId=r_mento&logNo=90174514542&proxyReferer=https:%2F%2Fwww.google.com%2F))
2. 예를 들면 `AbaAeCe`와 `baeeACA`는 알파벳 나열 순서는 다르지만 A는 2개, a는 1개, b는 1개, C는 1개, e는 2개로 두 알파벳은 같다고 할 수 있다.
3. 이때 아나그램 판별시 대소문자가 구분된다.
4. 두 단어가 주어지면 두 단어가 아나그램인지 판별하라.
5. 아나그램이면 YES, 아니면 NO

#### 🎯 정리
- 기본적인 방식은 이전 문제와 동일하다.
- 이번에는 두개의 값을 비교하는 것이였다.

```js
const countWord = (obj, cur) => {
  if (obj[cur]) {
    return {
      ...obj,
      [cur]: obj[cur] + 1,
    };
  }

  return {
    ...obj,
    [cur]: 1,
  };
};

const covertToObj = (word) => word.split('').reduce(countWord, {});

const countWord2 = covertToObj(word2);
const countWord1 = covertToObj(word1);
```
- 이번에도 `Object.entries`를 사용해서 객체를 배열로 변경해준다.
- 아나그램을 판단하기 위해서는 비교대상의 단어에 해당 키값으로 가지고있는 값이 존재하는지 확인 후 그 키 값의 값과 현재 값과 같은지 비교하여 판단한다. `every`를 사용해서 모든 값이 다 일치하면 true, 하나라도 다르면 false를 반환한다.

```js
function solution(word1, word2) {
  const countWord2 = covertToObj(word2);

  const isAnagram = Object.entries(covertToObj(word1))
    .every(([key, value]) => countWord2[key] && countWord2[key] === value);

  if (isAnagram) {
    return 'YES';
  }

  return 'NO';
}
```

- 다만, 이 방법은 두 배열의 길이가 같은 경우에만 가능하다. 만약 두 배열의 길이가 다르면 테스트에 실패한다.
- 하지만 이 문제의 기본 전제는 두 배열의 길이가 같다는 것이였다.

```js
solution('AbaAeCe', 'baeeACAD') // false를 반환해야 하지만 true가 반환된다.
```

- 다음과 같이 사용하면 가능하다.

```js
function solution(str1, str2) {
  const sH = new Map();

  for (const x of str1) {
    if (sH.has(x)) {
      sH.set(x, sH.get(x) + 1);
    }

    if (!sH.has(x)) {
      sH.set(x, 1);
    }
  }
  for (const x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) {
      return 'NO';
    }

    sH.set(x, sH.get(x) - 1);
  }

  return 'YES';
}
```
