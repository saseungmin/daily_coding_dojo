# 가운데 글자 가져오기
## level 1

>> - 다른 코드
>> ceil로 잘라서 삼항연산자 사용 후 substr
<pre><code>
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
</code></pre>
