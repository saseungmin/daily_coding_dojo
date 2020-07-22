# ✔ 수식 최대화
## 🌈 LEVEL 2
### ✌ 2020 카카오 인턴쉽
### ✌ 문제 풀이
1. 연산자가 3개 있을 때 6가지가 경우의 수가 6가지가 존재하므로 for 루프를 6번 돌게 된다.
2. 주어진 문자열로 된 수식을 정규식을 사용해 각자 배열에 담는다.
<pre>
// 그룹으로 묶어서 숫자 1글자 이상 또는 연산자 세가지중 하나에 해당하는 것을 모두 찾는다.
let regExp = expression.match(/(\d+|[*|+|-])/g);
</pre>
3. 우선 순위 연산자 경우의 수 대로 함수를 만들어 값을 받아온다.
<pre>
sum = calculation(regExp,'-','*','+');
</pre>
4. `calculation()`은 `regExp`배열의 길이가 1이 될때까지 `while` loop를 돈다.
5. 두번째 인자부터 연산자가 `regExp`배열에 포함하고 있는지 찾는다.
<pre>
const index = regExp.findIndex(val => val === first);
</pre>
6. 만약 존재하면 연산자 인덱스의 바로 앞과 바로 뒤 인덱스와 해당 계산을 구한 후 인덱스-1한 위치에 값을 변경해준다.
7. 그후 인덱스 위치부터 2글자를 잘라낸다.
    - `eval()`은 좋지 못하다.. 무조건 명령어?로 실행해주기 때문에 다른것을 찾아보다가 실패하였다.
    - first 처럼 연산자를 문자열로 받으면 계산이 안되버린다.
<pre>
regExp[index-1] = eval(regExp[index-1] + first + regExp[index+1]);
regExp.splice(index,2);
</pre>
8. 반복하여 계산결과를 절대값으로 변환 후 return 해준다.
9. 6번의 루프를 반복한 뒤 그중 최대값을 찾는다.
    - `Math.max()`방법도 존재하지만 최대 숫자가 제한적이고 메모리가 `reduce`보다 많이 든다.
<pre>
return result.reduce((previous, current) => previous > current ? previous : current);
</pre>

#### ❗ 문제 푼 방법이 그다지 좋지 못한 방법이였던거 같다. 시간복잡도가 그다지 좋게 나오지 않았다.

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/67257?language=javascript