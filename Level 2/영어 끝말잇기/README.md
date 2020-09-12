# ✔ 영어 끝말잇기
## 🌈 Level 2
### ✌ Summer/Winter Coding(~2018)
### ✒ 문제 풀이
1. 주어진 단어가 들어있는 배열의 길이 만큼 `for`문을 돈다.
2. 체크하는 배열에 현제 루프를 돌고있는 단어와 같은 단어가 있다면 `for`문을 `break` 시켜준다.
```javascript
const findSameWord = endLineWord.findIndex(val => val === words[i]);
round = i;
if(findSameWord !== -1){
    break;
}
```
3. 만약 존재하지 않는다면
    - 체크하는 배열의 마지막 위치의 배열의 단어의 마지막 한 글자와 현재 비교대상 단어의 첫번째 단어 한글자와 비교 후 같지 않거나, 한 글자인 경우는 `for`문을 `break` 해준다.
```javascript
const endWordLen = endLineWord[endLineWord.length - 1];
if(endWordLen[endWordLen.length - 1] !== words[i][0] || words[i].length === 1){
    break;
}       
```
4. 그 나머지들을 체크하는 배열에 push 해서 해당 단어를 밀어넣어 준다.
5. 만약 체크하는 배열의 길이와 주어진 단어배열의 길이가 같으면 탈락자가 생기지 않기 때문에 `[0,0]`를 `return` 해준다.
6. 
<hr>

- 📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12981?language=javascript