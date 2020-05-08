# 크레인 인형뽑기 게임
## level 1 (2019 카카오 개발자 겨울 인턴십)

## 1. 풀이 방법 
- 문제 이해하는데만 한세월... 문제 이해만 하면 쉬운데 말이 너무 어려운거 같다.
- 2차원 배열 열[i][0]이 첫번째줄이다. 행이[0][i] 맨 위에 라인 이다.   
- 그래서 배열을 열 => 행 / 행 => 열 로 변환시켰다.
<pre><code>
let newboard = Array(board.length).fill(null).map(() => Array());
let answer = 0;
let answerArr =[];
for(let i=0; i< board.length; i++){
    for(let j = 0; j<board[i].length; j++){
        newboard[i][j] = board[j][i];
    }
}
</code></pre>
- 이런식으로도 가능
<pre><code>
const transpose = matrix =>
    matrix.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );
</code></pre>

- 들어오는 값을 findIndex를 이용해 0이 아닌 가장 처음 만나는 배열 위치를 반환해서 

<pre><code>
  const findindex=newboard[mymove-1].findIndex(val => {
      return val !== 0;
  });
</code></pre>
- 그 후, stack top이 현재 들어오는 값과 같으면 pop 해주고 answer+=2를 해준다.
- 그리고 찾은 인덱스 배열 위치를 0으로 바꿔준다.
