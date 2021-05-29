# ✔ 후보키

## 👉 LEVEL 2

### 🎯 2019 KAKAO BLIND RECRUITMENT

#### 📚 배운 점 또는 푼 방법
- 너무나 많은 소요시간..
- 최대한 TDD를 적용하기 위해 functional로 구현하였다.
- functional로 작성하면 기존 코드보다 더 길어진다. 하지만, 이해하기 더 쉬워지는 코드게 될 수도??? 유지보수에 최척화되어있다. 훨씬 쉽다.
- 하지만, 코테에서 이렇게 풀면 안될듯... 지금은 연습이니..
1. 일단 dfs를 사용하여 모든 부분집합을 구한다.

```js
const getSubsets = (attributes) => {
  const { length } = attributes;
  const check = Array.from({ length }, () => false);

  const subSets = [];

  function dfs(level) {
    if (level === length) {
      const subSet = attributes.filter((_, index) => check[index]);

      if (subSet.length) {
        subSets.push(subSet);
      }

      return;
    }

    check[level] = true;
    dfs(level + 1);
    check[level] = false;
    dfs(level + 1);
  }

  dfs(0);

  return subSets;
};
```

2. 이 부분집합 중에서 유일성을 만족하는 슈퍼키들을 찾는다.

```js
const subsetToKey = (subset, attribute) => subset
  .reduce((strKey, cur) => strKey + attribute[cur], '');

const getSuperKeys = (relation) => (subsets, cb) => subsets.filter((subset) => {
  const set = new Set();

  relation.forEach((attribute) => {
    set.add(cb(subset, attribute));
  });

  if (set.size === relation.length) {
    return true;
  }

  return false;
});
```

3. 최소성을 만족하는 후보키들을 찾는다.

```js
const isSubset = (key, superKey) => superKey.every((subset) => key.includes(subset));

const getCandidateKeys = (superKeys) => superKeys.filter((key, index) => {
  for (let i = 0; i < superKeys.length; i++) {
    if (i !== index && isSubset(key, superKeys[i])) {
      return false;
    }
  }

  return true;
});
```


4. 후보키의 개수를 반환한다.

```js
function solution(relation) {
  const { length } = relation[0];
  const attributes = Array.from({ length }, (_, i) => i);

  const superKeys = getSuperKeys(relation);

  const candidateKeys = getCandidateKeys(
    superKeys(
      getSubsets(attributes),
      subsetToKey,
    ),
  );

  return candidateKeys.length;
}
```

#### 다른 분 문제풀이
- 비트연산자를 사용해서 풀었는데 잘 이해가 안간다..
- 훨씬 더 간단해보인다.

```js
function solution(relation) {
    let column = relation[0].length;
    let row = relation.length;
    let count = 0;
    let bitMaskList = [];
    for(let i = 1; i < (1 << column); ++i) {
        let keySet = new Set();
        for(let j = 0; j < row; ++j) {
            let key = "";
            for(let k = 0; k < column; ++k) {
                if((i & (1 << k)) != 0) key += relation[j][k];
            }
            keySet.add(key);
        }
        if(keySet.size == row && duplcateCheck(bitMaskList, i)) ++count;
    }

    return count;
}

function duplcateCheck(list, key) {
    let size = list.length;
    for(let i=0; i<size; ++i) {
        if((list[i] & key) == list[i]) return false;
    }
    list.push(key);
    return true;
}
```

---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/42890?language=javascript
