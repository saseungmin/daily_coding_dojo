# ※ 큰 수 만들기
## level 2(greedy)
<pre><code>
// k가 0보다 크고 현재 num 값이 strStack의 top보다 크면 top을 pop해준다 (while문 반복)
let num = number[i];
while(k>0 && strStack[strStack.length-1] < num){
    strStack.pop();
    k--;
}

</code></pre>

### 1. 첫번째 실패
> 처음에 if로 해주고 마지막에 남은 k값을 앞부분 제거해주면 된다고 생각했는데...    
> 기본 테스트 케이스에서는 이상없이 됬는데 테스트 실행했더니 한개 빼고 다 실패...
<pre><code>
if(k>0 && strStack[strStack.length-1] < num){
    strStack.pop();
    k--;
}
</code></pre>
> while문으로 변경해주니 해결

### 2. 두번째 실패
> 두번째는 테스트 케이스 실행했더니 12번 테스트에서만 실패해서 한참 찾았다..   
> 그래서 질문하기 페이지에 보니까 같은 숫자들로만 되어있을 때 안될 수 도 있다는 말에 해보니까 k값이 변화가 없었다.   
> 따라서 마지막에 그냥 k>0 일때 k개수만큼 pop()해주었더니 잘 실행됬다.   

<pre><code>
if(k>0){
    for(let i = 0; i < k; i++ ){
        strStack.pop();
    }
}
</code></pre>
#### 어렵다.. 어려워.. 더 열심히 해보자..






<hr>
※ 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/42883?language=javascript
