# ※ 프린터
## - level 2
>####  - 스택/큐

## 풀이 방법
- 문제 형식이 큐 형식이였다.
- 맨 처음 숫자를 shift시킨 뒤 => shift 시킨 수의 숫자가 priorities 배열에 있는 어떤 숫자보다 큰 숫자가 있는지 비교
- 있으면 => location이 0 면 break; => 몇번째로 빠져나가는지 체크 answer++;
- 없으면 => priorities 배열 마지막에 push.
<hr>

- 제일 안크고 location이 0일 때, push해주면 맨 뒤로 가기 때문에 location 배열 마지막으로 바꿔줌
- location이 0이 아닐 땐, location을 빼줌 (앞으로 이동함) 
- LIFO(후입선출)
<pre><code>

let tempIndex = priorities.findIndex(val => {
    return val > queueShift;
});

// 변경 가능
// 하나라도 존재하면 return true;
let tempIndex = priorities.some(val => {
    return val > queueShift;
});
// return 값은 true, false

</code></pre>

<hr>
※ 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/42587
