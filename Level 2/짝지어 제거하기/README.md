# ✔ 짝지어 제거하기
## 📌 2017 팁스타운
## 🌈 LEVEL 2
### 🔸 문제 풀이
- 처음 봤을땐 쉽다고 생각했지만 쉽긴 쉬웠다.
- 하지만 스택을 생각하지 못하여 풀다가 계속 효율성 테스트 실패를 해서 참고해서 stack으로 풀었다.
<pre>
// 효율성 테스트 실패..
function solution(s){
    let strSplice = s.split('');
    
    for(let i = 0; i < strSplice.length; i++){
       if(strSplice[i] === strSplice[i+1]){
          strSplice.splice(i,2);
          i = -1;
       }
    }

    return strSplice.length === 0 ? 1 : 0;
}
</pre>
- stack을 통하여 푸니까 더 빠르고 쉽게 풀 수 있었다.
- stack 항상 생각하자.
<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12973?language=javascript