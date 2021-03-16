### 📚 학급 회장(해쉬)
- 후보 기호 A, B, C, D, E 후보가 등록했다.
- 투표를 해서 학급 회장을 선정한다.
- 어떤 기호의 후보가 학급 회장이 되었을까?
- N명의 학생수

#### 🎯 정리
- 해쉬를 이용해서 풀 수 있다. 간단한 문제였다.
- 일단 배열로 바꾼 뒤 `reduce`사용해서 Object 형태로 변경해준다.
- 같은 키 값이 존재하면 값에 `count + 1`을 해준다. 만약 존재하지 않으면 키값과 value값을 1로 초기화 해준다.

```js
const revertCountObj = (pre, cur) => {
  if (pre[cur]) {
    return {
      ...pre,
      [cur]: pre[cur] + 1,
    };
  }

  return {
    ...pre,
    [cur]: 1,
  };
};

votes.split('').reduce(revertCountObj, {});
```

- 그런 다음 가장 큰 값의 키값만 필요하니 `Object.entries`를 사용해서 객체를 배열로 변경해준뒤 정렬을 해준다.
- 그 뒤 이차원 배열의 첫번째 자리의 첫번째 값을 반환한다.

```js
const result = Object.entries(addCountObj).sort((a, b) => b[1] - a[1]);

return result[0][0];
```

- 다른 방법으로는 `Map()`을 사용할 수도 있었다.
- 근데 전자가 더 깔끔해보인다.

```js
function solution(_, s) {
  const sH = new Map();

  for (let i = 0; i < s.length; i++) {
    if (sH.has(s[i])) {
      sH.set(s[i], sH.get(s[i]) + 1);
    }

    if (!sH.has(s[i])) {
      sH.set(s[i], 1);
    }
  }
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  sH.forEach((value, key) => {
    if (value > max) {
      max = value;
      answer = key;
    }
  });

  return answer;
}
```
