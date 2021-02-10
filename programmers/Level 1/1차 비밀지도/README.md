# ※ 1차 비밀지도
## level 1(2018 KAKAO BLIND RECRUITMENT)

## 풀이 방법 
- 두 배열을 or 연산을 수행한다.
- 그 값을 2진수로 변경해준다.
```javascript
var combine_arr = arr1.map((val,index) => {  // or 연산
    return val | arr2[index];
})
.map(val => { // toString(2) 하면 2진수 문자열로 변경
    return val.toString(2).length === n ? val.toString(2) :  "0".repeat(n-val.toString(2).length)+val.toString(2);
});     
```

- 그 후, 1일 때에는 #으로 바꿔주고, 0일 때에는 " "으로 바꿔준다.
```javascript
  answer = combine_arr.map(val=> {
      var str ="";    
      for(var i = 0; i < val.length; i++){
          if(val[i] == 1){
              str += "#";
          }else if(val[i] == 0){
              str += " ";
          }
      }
      return str;
  })
```

<hr>

※ 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/17681
