# ✔ 문자열 내 마음대로 정렬하기
## 🌈 LEVEL 1
### ✌ 문제 풀이
1. 각각 단어가 주어진 배열을 `map()`을 사용하여, JSON array 형식으로 만든다.
<pre>
// sort는 비교할 한 문자, str은 해당 문자의 완전한 문자열
{ sort: val.substr(n, 1), str: strings[idx] }
</pre>
2. `sort()`를 사용해 sort를 비교하여 오름차순으로 정렬한다.
3. 만약 sort가 같은 문자면 str을 비교하여 오름차순으로 정렬한다.
<pre>
.sort((a,b) => a.sort < b.sort ? -1 : a.sort > b.sort ? 1 : a.str < b.str ? -1 : a.str > b.str ? 1 : 0)
</pre>
4. 정렬된 str을 배열로 return 해준다.
<hr>

- 📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12915?language=javascript