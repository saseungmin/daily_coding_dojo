# ✔ 단어 변환

## 🌈 LEVEL 3

### ✌ 깊이/너비 우선 탐색(DFS/BFS)

### ✌ 풀이 방법 및 배운점
- BFS로 풀기, 가장 짧은 변환 과정을 찾기
- 이 문제의 test case가 잘못되어 있는 듯 싶다. 잘문에 보면 테스트 케이스가 부족하여 틀려도 통과하는 경우가 있다고 하더라.
- 그래서 내가 푼 문제가 맞게 풀었는지 모르겠다?

```js
const hasWord = (words, target) => words.some((word) => word === target);

function solution(begin, target, words) {
  const queue = [[begin, 0]];

  if (!hasWord(words, target)) { // 사실 필요없을 듯.
    // 어짜피 queue를 다 돌았을 떄까지 반환하지 않는다면 결국 0을 무조건 반환한다.
    return 0;
  }

  while (queue.length) {
    // count값을 알아야 하니 현재 단어의 값과 그 단어의 count값을 같이 queue에 저장해준다.
    const [now, count] = queue.shift();

    // 찾는 값이 현재 단어의 값과 같다면 count를 반환
    if (target === now) {
      return count;
    }

    // 인덱스를 for문 이후에 잘라야 하기 때문에 index 값을 저장하는 배열
    const temp = [];

    words.forEach((word, index) => {
      let cnt = 0;

      for (let i = 0; i < word.length; i++) {
        if (word[i] !== now[i]) { // 현재 단어와 words의 단어를 자리마다 비교하여 다르면 count + 1
          cnt += 1;
        }
      }

      // cnt가 1일때만 단어로 변경 가능
      if (cnt === 1) {
        // queue에 단어를 저장하고, count는 1을 증가시킨다.
        queue.push([word, count + 1]);
        // 칮은 해당 인덱스값을 저장
        temp.push(index);
      }
    });

    // words는 temp에 인덱스값이 같은 것을 삭제해준다.
    words = words.filter((_, index) => !temp.includes(index));
  }

  return 0;
}
```

--- 

- 📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/43163?language=javascript
