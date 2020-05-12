# ※ 다리를 지나는 트럭
### level 2(스택/큐)

## 1. 풀이 방법
- 다리를 지난 트럭 길이와 초기 대기 트럭의 길이가 같아질때까지 반복했다. (그래야 대기 트럭이 다리를 잘 지나갔나 확인이 가능.)
- <code>while</code>문이 돌때마다 1초씩 증가 => <code>answer++</code>
- 대기트럭을 큐 형식(후입 선출)으로 하나씩 빼주어 다리를 건너는 트럭과 더하기를 해준다.
- 그 후, 더한 무게가 다리가 견딜 수 있는 무게보다 작으면 다리에 <code>push</code>를 객체로 해줬다.
<pre><code>
 bridge.push({my_truck : my_truck, count : 0});
</code></pre>
- 만약, 더한 무게가 다리가 견딜 수 있는 무게보다 크면 다시 대기트럭에 <code>unshift()</code> 해줬다.
- 그리고 <code>while</code>문 한번 돌때마다 다리 위에 있는 트럭의 배열의 <code>count++</code> 한다.
- <code>count</code>가 다리 길이와 같아지면 다리를 건너는 트럭 배열에서 <code>shift()</code>를 해주고 다리를 지난 트럭 배열에 <code>push()</code>를 해준다.

<hr>
※ 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/42583
