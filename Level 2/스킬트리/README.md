# ✔ 스킬트리
## 🌈 level 2

## 풀이 방법
- 문자열 skill을 문자마다 배열에 담는다. `split()`
- skill_trees를 배열 마다 담긴 문자열들을 배열로 빼서 `filter`
- skill에 값이 포함되어있으면 `filter`
- `filter`한 값과 skill를 `filter`한 길이 만큼 `substring` 해서 같으면 추가
```javascript
  for (let i = 0; i < skill_trees.length; i++) {
      str = skill_trees[i].split("").filter(val => skillArr.includes(val)).join("");
      console.log(str);
      if (str === skill.substring(0, str.length)) {
          answer++;
      }
  }
```

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/49993
