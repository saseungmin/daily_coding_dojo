# ✔ 나누어 떨어지는 숫자 배열
## 🌈 LEVEL 1
- `Array.filter()`를 사용하여 주어진 배열에서 나누어 떨어지는 배열을 뽑아내고 그 배열을 `sort()`를 해주어 정렬을 시켜준다.
- 만약 나누어 떨어지는 값이 하나도 없다면 `[-1]`을 담아 반환한다.
<pre>
const filter = arr.filter((val) => val % divisor === 0).sort((a, b) => a - b);
</pre>

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12910?language=javascript