# ✔ 문자열 다루기 기본
## 🌈 LEVEL 1
### 🔸 문제 풀이
- 정규식을 사용해서 간단하게 풀 수 있었다.
- 정규식을 알고난부터 굉장히 편하게 풀 수 있다.
<pre>
// 숫자로만 되어있는 문자 처음부터 끝까지 6자리와 4자리가 존재하는지 나타낸다.
const req = /^\d{6}$|^\d{4}$/;
</pre>
- 풀고나서 더 간단하게 한줄로 해결도 가능했다.
<pre>
// 얘는 호출하는 애보다 먼저 선언되어있어야 한다.
const solution2 = (s) => {return s.match(/^\d{6}$|^\d{4}$/) ? true : false}
</pre>

<hr>

- 📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12918?language=javascript