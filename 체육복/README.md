# 체육복
## level 1
### greedy

## 1. 문제풀이 방법
- 처음에 체육복을 도난당하고 여벌도 있는 친구를 제거해준다.
<pre><code>

      for(let i = 0; i<reserve.length; i++){
          let temp = lost.find(val => val===reserve[i]);
          if(temp != null){
              arrlost.push(temp);
          }
      }
      for(let i = 0; i<arrlost.length; i++){

          reserve.splice(reserve.indexOf(arrlost[i]),1);
          lost.splice(lost.indexOf(arrlost[i]),1);

      }

</code></pre>

- 그 후, 일어버린 친구를 한명씩 (shift) 꺼내어 findIndex 하여 있으면 splice 없으면 -1
<pre><code>
    while(lost.length > 0){
        const res = lost.shift();
        const coatlost = reserve.findIndex(val => {
            return val-1 === res || val+1 === res;
        })
        if(coatlost === -1){
            answer -= 1;
        }else{
            reserve.splice(coatlost,1);
        }
    }
</code></pre>


