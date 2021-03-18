### 📚 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
1. S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하라.
2. 아나그램 판별시 대소문자 구분
3. 부분문자열은 연속된 문자열

#### 🎯 정리
- 두 개의 문자열이 주어진다. 그중 중 target이 될 문자열을 일단 `Map`을 사용해서 변환해준다.

```js
const convertToMap = (word) => {
  const mapWord = new Map();

  for (let i = 0; i < word.length; i++) {
    if (mapWord.has(word[i])) {
      mapWord.set(word[i], mapWord.get(word[i]) + 1);
    }

    if (!mapWord.has(word[i])) {
      mapWord.set(word[i], 1);
    }
  }

  return mapWord;
};

const targetMap = convertToMap(word2);
```

- 그리고 다른 문자열 길이 만큼 for루프를 돈다.
- 그런 뒤 문자열을 타겟의 문자열 길이 즉, 슬라이드 윈도우만큼 자른다.
- 그리고 그 잘린 문자열을 Map으로 변환해주고 그에 맞게 알파벳 개수를 똑같이 샌다.

```js
for (let i = 0; i < word1.length; i++) {
  const nowMap = convertToMap(word1.substr(i, word2.length));
}
```

- 그 다음에 두 Map을 비교해준다.
- 만약 두 Map의 길이가 다르거나, 비교당하는 Map에 비교하는 Map이 가지고 있는 Key값을 가지고 있지 않거나, 키는 존재하지만 값 즉, 해당 값의 (알파벳의 개수) 개수가 다르면 false를 리턴해준다. 만약 그렇지 않으면 true를 리턴

```js
const compareMaps = (target) => (now) => {
  if (target.size !== now.size) {
    return false;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of target) {
    if (!now.has(key) || now.get(key) !== value) {
      return false;
    }
  }

  return true;
};
```

- 만약 true를 리턴했으면 count를 1증가시키고 false를 리턴하면 증가시키지 않는다.

```js
function solution(word1, word2) {
  const targetMap = convertToMap(word2);
  const compare = compareMaps(targetMap);

  let count = 0;

  for (let i = 0; i < word1.length; i++) {
    const nowMap = convertToMap(word1.substr(i, word2.length));

    const isAnagram = compare(nowMap);

    if (isAnagram) {
      count += 1;
    }
  }

  return count;
}
```

- 이문제의 풀이에서는 two pointer 알고리즘까지 사용했는데, 나는 문자열을 자르는 것으로 대체했다.
- two pointer 알고리즘을 사용하는 거랑 문자열 내장 메서드를 사용하는 거랑 시간 복잡도에서 큰 차이가 있는것을 못느꼈다.