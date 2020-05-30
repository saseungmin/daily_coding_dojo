# 같은 숫자는 싫어
## level 1
- filter를 사용했다.   
- 편한 함수인거 같다..   
<pre>
arr.filter((item,index) => item != arr[index+1]);
</pre>
- 마지막 인덱스 번호 array에 대해서 어떻게 변하지 궁금했는데   
- 마지막 배열크키보다 커져서 오류 날줄 알았는데 undefinded가 뜨고 잘 실행 된다.

<hr>

※ 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript
