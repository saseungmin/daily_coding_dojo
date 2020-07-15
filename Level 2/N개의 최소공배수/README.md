# ✔ N개의 최소공배수
## 🌈 LEVEL 2
### ✌ 문제 풀이
- 소인수분해 공식을 사용하였다. 각 자리수를 나누어 지수가 큰것들을 곱해주면 나온다. (https://mathbang.net/200)
- 순서대로 정렬을 해준다.
- 배열의 각 숫자를 2부터 차례대로 증가시키면서 나눈다.
- 그 나눈 값과 카운트를 1로 초기화해서 object 형식으로 저장해준다.
- 그 후 해당 배열에 같은 나눈값이 있으면 카운트를 증가시켜준다.
<pre>
// {number: 2, count: 3}
while (divide <= arr[i]) {
    if (arr[i] % divide === 0) {
    if (temp[0] && temp[0].number === divide) {
        temp[0].count = temp[0].count + 1;
    } else {
        temp.push({ number: divide, count: 1 });
    }
    arr[i] = arr[i] / divide;
    } else {
    divide++;
    }
}
</pre>
- 각 배열 자리마다 계산된 값들을 비교하여 해당 number 값이 존재하여 그 number의 count값이 비교되는 number 값의 count 값보다 작으면 count를 비교되는 값의 count로 변경해준다.
- 만약 number를 찾지못했으면 해당 object를 배열에 push 해준다.
<pre>
  for (let i = 0; i < share.length; i++) {
    for (let j = 0; j < share[i].length; j++) {
      const index = resultArr.findIndex(
        (val) => val.number === share[i][j].number
      );
      if (index !== -1) {
        if (resultArr[index].count < share[i][j].count) {
          resultArr[index].count = share[i][j].count;
        }
      } else {
        resultArr.push(share[i][j]);
      }
    }
  }
</pre>
- 마지막으로 for문을 돌려 넘버 값과 count를 지수로 사용해 제곱계산을 수행하여 모두 곱해준다.
<pre>
  for (let i = 0; i < resultArr.length; i++) {
    answer *= Math.pow(resultArr[i].number, resultArr[i].count);
  }
</pre>

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12953?language=javascript