# 모의고사

- Level 1

- 다른분이 하신것을 보았는데 filter를 쓰니 굉장히 간편해 보였다.
- a1[i%a1.length]조건에 맞게 요소를 새롭게 반환 한 길이.

  <pre><code>
    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
  
  </code></pre>  
<hr>

문제출처 : https://programmers.co.kr/learn/courses/30/lessons/42840
