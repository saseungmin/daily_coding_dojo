# ✔ 타일 장식물
## 🌈 LEVEL 3
### ✌ 동적계획법(Dynamic Programming)
### ✌ 풀이 방법
- 간단하게 피보나치 수열을 이용하여 문제를 풀었다.
- N번의 값이 주어지면 N번 for loop를 돌아 피포나치 수열을 배열에 담는다.
- 그리고 N번째 됬을 때의 직사각형은 N(작은 변) * (N+N-1)(긴 변) 하면 직사각형 크기가 나오게 된다.
<pre>
const width = fibo[fibo.length-1] + fibo[fibo.length-2];
const height = fibo[fibo.length-1];
return (width + height) * 2;
</pre>

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/43104?language=javascript