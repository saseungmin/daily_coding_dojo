# ※ 구명보트
## level 2 
### greedy 알고리즘 😥

### 1. 설명은 주석에

- 너무 어렵다.. 하루종일 걸렸따.. 언제쯤 늘련지..
<pre><code>
// find 는 조건이 맞으면 바로 리턴( 리턴값은 하나다 기억하자.)
const arr2 = arr.find(val => {
    return val + lowNum <= limit;
});
</code></pre>

- 이렇게 하는 방법도 있었다.   
findIndex를 사용하면 바로 인덱스 번호를 뽑아 낼수 있었다.   
<pre><code>
 const idx = array.findIndex(value => value + number <= limit);
</code></pre>


### 2. 다른 풀이

<pre><code>
function solution(people, limit) {
    // 내림차순
    people.sort(function(a, b){return a-b});
    for(var i=0, j=people.length-1; i < j; j--) {
        console.log("i",people[i],"j", people[j]);
        if( people[i] + people[j] <= limit ) i++;
    }    
    return people.length-i;
    //i 50 j 80
    //i 50 j 70
    //i 50 j 50
}
</code></pre> 
// 이해는 가는데 무슨 원리일까 참 대단하다..

<hr>
※ 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/42885?language=javascript
