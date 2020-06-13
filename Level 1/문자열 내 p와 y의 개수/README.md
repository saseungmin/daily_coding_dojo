# ✔️ 문자열 내 p와 y의 개수
## 📌 LEVEL 1
### 풀이 방법
- 문제 상에서 문자열 대소문자를 신경쓰지않는다 했으니 `toUpperCase()`를 사용해서 문자열을 대문자로 모두 변경해준다.
- 그 후, P의 개수와 Y의 개수를 센뒤, 개수를 비교 후 둘의 개수가 같고 P와 Y의 둘 다의 개수가 0인 경우 `true`를 반환한다
- 나머지인 경우 `false`를 반환한다.
### 다른 풀이 방법
- 결국 둘다 0개인 경우도 개수가 같으므로 `true`이기 때문에 아래 방법이 훨씬 깔끔한 거 같다.
<pre>
function numPY(s){
  //함수를 완성하세요
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
</pre>

<hr>

- 📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript