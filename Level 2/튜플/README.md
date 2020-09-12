# ✔ 튜플
### 🌈 level 2 (2019 카카오 개발자 겨울 인턴십)

### 1. 풀이 방법
- <code> "{{1,2,3},{2,1},{1,2,4,3},{2}}" </code>이런 문자열로 주어진 튜플을 문자열을 양 끝의 <code>{{,}}</code> 을 <code>slice()</code>를 사용해 없애준다.
- 그리고 <code>split()</code>을 사용해 <code>},{</code>기준으로 자른뒤 각 배열의 원소의 길이 순으로 정렬을 시켜준다.
```javascript
const strArr = s.slice(2,s.length-2).split("},{").sort((x,y) => x.length - y.length);
```
- <code>strArr</code> 배열을 반복문을 통해 <code>strArr[i]</code>마다 <code>split(",")</code> 기준으로 나눈 뒤, 차례대로 결과 값 배열에 넣어준다.
- 만약, 결과 값 배열에 값이 존재하면 넣어주지 않는다.
```javascript
const result= answer.findIndex(val => val === parseInt(fArr[j]));
if(result === -1){
    answer.push(parseInt(fArr[j]));
}
```

### 2. 다른 풀이
- 정규식을 잘 알고 있으면 정말 마음대로 사용할 수 있는 장점이 있는거 같다.
- 정규식을 사용해서 <code>replace()</code> 시킨뒤 정렬을 길이 순으로 하였고 <code>reduce()</code> 함수를 통해서 포함되어있지 않는 값만 <code>filter</code>를 수행해 <code>arr</code>에 붙쳐넣었다.

```javascript
function solution(s) {
    return JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
    .sort((a, b) => a.length - b.length)
    .reduce((arr, v, n) => {
        if (n) {
            return arr.concat(v.filter(f => !arr.includes(f)));
        }
        return v;
    }, []);
}
```

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/64065
