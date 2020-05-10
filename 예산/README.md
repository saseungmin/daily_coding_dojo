# ※ 예산
## level 1 (Summer/Winter Coding(~2018))

## 1. 풀이 방법
- 크기가 작은 순으로 정렬 한 후, 작은 수부터 더한다.
- 그 후,  기대값(budget)보다 커지면 break 해준다.
<pre><code>
            var dsort=d.sort((a,b) => a-b);
            for(var i = 0; i<dsort.length; i++){
                sum += dsort[i];
                if(sum > budget){
                    break;
                }else{
                    answer++;
                }
            }

</code></pre>
