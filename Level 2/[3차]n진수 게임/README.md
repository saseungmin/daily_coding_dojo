# ✔ [3차] n진수 게임
## 🌈 Level 2
### ✌ 2018 KAKAO BLIND RECRUITMENT
### ✌ 문제 풀이
- 진법 변환 문제
> 진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p 가 주어진다. 
<br>

1. t와 m을 곱한 수 만큼 for문을 돈다. (미리 구할 숫자의 개수는 자신의 숫자이고 게임 참가 인원 만큼 곱해야 총 숫자 수를 알 수 있다)
2. 0부터 증가하는 count의 진법 변환한 수를 뽑아낸다.
<pre>
for(let i = 0; i < (t*m); i++){
    conversion += count.toString(n);
    count++;
}
</pre>
3. for 루프를 튜브의 순서 p-1 부터 시작하여 참가하는 인원 수에 따라 step을 정해주어야 자신이 내야할 수를 알 수 있다. (`i+=m`)
4. 그 숫자들을 `answer`에 추가시키고, 미리 구할 숫자의 갯수 t와 길이가 같아지면 break 해준다.
<pre>
for(let i = p-1; i < conversion.length; i+=m){
    answer += conversion[i];
    if(answer.length === t) break;
}
</pre>
5. 대문자로 변경후 `return`해준다.
<pre>
return answer.toUpperCase();
</pre>

<hr>

- 📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/17687?language=javascript