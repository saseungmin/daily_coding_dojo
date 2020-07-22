# ✔ JadenCase 문자열 만들기
## 🌈 LEVEL 2
### ✌ 문제 풀이
- JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성한다.
- 정규식을 사용하면 간단하게 풀 수 있는 문제였다.
1. 일단 s를 모두 소문자로 변경해준다.
2. 그런 다음 정규식을 사용하여 `replace` 해주어 정규식에 해당하는 문자를 대문자로 변경해준다.
    - 조건은 앞에 공백이 존재하고 a부터 z까지 한글자에 해당하는 문자들을 대소문자 관계없이 모두 찾는다.
<pre>
.replace(/\b[a-z]{1}/gi,v => v.toUpperCase());
</pre>
- 위와 같이 해당 문자들만을 간단하게 변경이 가능하다는 사실을 처음 알았다.
<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12951?language=javascript