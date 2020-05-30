# ※ 탑
### level 2 (스택/큐)
## 1. 풀이 방법
- 각각의 값을 <code>pop()</code>을 사용해서 하나씩 빼서 <code>heights.length</code>가 0이 될 때까지 반복했다.
- 그 후 반대로 왼쪽으로만 비교하게 하였다.
- 그리고 <code>top</code>보다 크면 <code>unshift()</code>하고 <code>break</code>하였다.
- 그렇지 않은 값은 0을 넣어주었다.



<hr>
※ 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/42588
