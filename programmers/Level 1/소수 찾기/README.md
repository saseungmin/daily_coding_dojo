# ✔ 소수 찾기
## 📌 LEVEL 1
### ✌ 문제 풀이
- 주어진 숫자만큼 2부터 시작하여 각 자리에 배열에 담는다.
- 그리고 2부터 시작하여 2,4,6,8... 배수에 해당하는 숫자는 0으로 바꿔준다.
- 3일땐 3,6,9,12...
```javascript
for(let j = i+i; j <= n; j+=i){
    arr[j] = 0; 
}
```
- 그리고 0일때는 for문을 넘어간다.
```javascript
if(arr[i] === 0) continue;
```
- 0이 아닌값만 골라 그 배열의 길이를 리턴해준다.
```javascript
return arr.filter(val => val !== 0).length;
```

<hr>

- 📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12921?language=javascript