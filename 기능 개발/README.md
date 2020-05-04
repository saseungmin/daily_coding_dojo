# ※ 기능 개발
## - Level 2
> queue를 사용해서 풀었다.   
> javascript에 shift 함수를 사용해서 배열에서 하나씩 빼내가면서 사용.   
> 100이 되면 <b>shift함수</b>는 queue이기 때문에 FIFO로 처음 들어온 애가 가장 먼저 빠져나가야지만 다음 애들도 빠져나갈 수 있다.   
> 그 원리를 활용해 2번째가 먼저 100이 되어도 첫번째가 100이 안되었기 때문에 첫번째 녀석이 100이 되었을 때 2번째 녀석도 같이 빠져나가게 된다.   
<pre><code>
while(progresses[0] >= max){
    progresses.shift();
    speeds.shift();
    count++;
}

</code></pre>

### - 다른 풀이
<pre><code>

function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => {
      return Math.ceil((100 - progress) / speeds[index]);
    });
    // days = [7, 3, 9]
    // maxday로 시작값을 정해준다
    let maxDay = days[0];
    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) { //days[i]가 maxday보다 작으면 count 누적
            answer[j] += 1;
        } else {
        // 그렇지 않으면 days[i]가 maxDay 후 다음 배열 인덱스에 1로 push
        // ex) 9가 7보다 크니까 9가 maxday값으로
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}

</code></pre>

<hr>
※ 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript
