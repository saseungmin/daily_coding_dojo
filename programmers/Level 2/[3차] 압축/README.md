# ✔ [3차] 압축
## 🌈 Level 2
### ✌ 2018 KAKAO BLIND RECRUITMENT
### ✌ 문제 풀이
- [LZW 압축](https://timewizhan.tistory.com/entry/LZW-Compression)
1. A~Z 까지의 사전 배열을 정의한다.
2. 매개변수로 주어진 단어 길이 만큼 for 문을 돈다.
3. 초기값으로 단어의 첫번째 글자(w)와 두번째 글자(n)를 선언한다.
4. 재귀 호출 함수를 사용하여 값을 받아낸다.
5. 재귀 호출 함수는 'w+n'을 한 문자가 사전(dictionary)에 있으면 count를 증가시켜주고
6. 다시 재귀로 함수를 호출할때 w 글자는 w+n 글자가 되고 n 글자는 n글자 다음에 위치한 글자로 변경한다.(`msg[i+init+count]`)
```javascript
check(msg, w+n, msg[i+init+count], i, count, dictionary)
```
1. 재귀를 돌다가 사전에 단어가 없으면 사전에 w+n문자를 추가 시키고 w를 리턴시켜준다.
2. 리턴한 w 문자를 사전에 있는지 찾은뒤 해당 인덱스의 +1한것을 answer 배열에 push 하여 저장시켜준다.

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/17684?language=javascript