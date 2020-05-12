# ※ 폰켓몬
## level 2 (찾아라 프로그래밍 마에스터)

## 1. 풀이 방법
- 매개변수로 들어오는 배열의 길이를 2로 나눈다.
- 배열을 <code>filter()</code>를 통해 중복을 제거해준다.
- <code>filter()</code>한 배열 길이가 원래의 배열/2한 길이보다 클때 <code>filter()한 배열 길이-(filter()한 배열 길이-원래의 배열/2한 길이)</code>를 해주고 아니면 <code>filter()</code>한 배열 길이를 <code>return</code>해준다.
<pre><code>
return uniqueArr.length > length ? uniqueArr.length-(uniqueArr.length-length): uniqueArr.length;
</code></pre>

<hr>
※ 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/1845
