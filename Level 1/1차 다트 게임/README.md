# ✔ 1차 다트 게임
## 🌈 2018 KAKAO BLIND RECRUITMENT
### LEVEL 1
#### 🔸 풀이 방법
- `1S2D*3T` 이런 형식으로 문자열로 들어온 것을 문제가 원하는 형식에 맞게 `match` 정규식을 사용하여 배열로 나타낸다.
<pre>
// splitArray : ["1", "S", "2", "D", "*", "3", "T"]
const splitArray = dartResult.match(<b>/(\d+)|[S|D|T]|[*|#]/g</b>);
</pre>
- `for`문을 돌려 S(1 제곱),D(2 제곱),T(3 제곱) 조건별로 수행해준다.
- 그리고 `#`일땐 해당 숫자에 -1을 곱해준다.
- 계산된 값을 배열에 담아주고, `*`도 같이 담아준다.
<pre>
function checkArr(splitArray, index, pow) {
    if (splitArray[parseInt(index) + 1] === '#') {
        return (Math.pow(splitArray[index - 1], pow) * (-1));
    } else {
        return Math.pow(splitArray[index - 1], pow);
    }
}
</pre>
- 새롭게 생성된 배열을 `while`문을 돌려 `*`가 존재하면 앞에 2개의 숫자에 `*`개수만큼 곱하기 2를 해준다.
- 만약, 그 `*`의 위치가 2보다 작으면 바로앞 숫자만 곱하기 2를 해준다.
- 만약 `*`가 존재하지 않는 경우 `break`를 해준다.
<pre>
while (true) {
    const tempIndex = tempArr.findIndex(val => val === '*');
    if (tempIndex === -1) {
        break;
    } else {
        multiple(tempArr, tempIndex);
        tempArr.splice(tempIndex, 1);
    }
}
</pre>
- 배열을 전부 더해준다.
<pre>
return tempArr.reduce((a, b) => a + b, 0);
</pre>

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/17682?language=javascript