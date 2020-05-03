# ※ 문자열 압축

## level 2
> 이중 for문으로 비교한 뒤 비교한 값들을 array에 담고   
> reduce로 길이 중에서 가장 짧은 길이 return.   
<pre><code>
answer = array.reduce ((previous,current) => {
    return previous > current.length ? current.length : previous;
},s.length);

</code></pre>

> ### reduce??
<pre><code>
array.reduce((누적값, 현재값, 인덱스, 요소) => { return 결과 }, 초깃값);

</code></pre>
>> previous : 누적값   
>> current : 현재값   
>> s.length : 처음 받는 문자열 길이를 초기값으로 설정.


<hr>
※ 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/60057
