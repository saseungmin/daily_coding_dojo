# 가운데 글자 가져오기
## level 1

- 다른 코드   
- ceil로 잘라서 삼항연산자 사용 후 substr   
- substr : (시작 인덱스, 길이)   
- substring : (시작 인덱스, 마지막 인덱스)   
<pre>
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
</pre>

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12903
