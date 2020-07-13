# ✔ [1차] 캐시
## 📌 2018 KAKAO BLIND RECRUITMENT
## 🌈 LEVEL 2
### 🔸 문제 풀이
- 캐시 교체 알고리즘은 [LRU(Least Recently Used)](https://jins-dev.tistory.com/entry/LRU-Cache-Algorithm-%EC%A0%95%EB%A6%AC)
- LRU은 최근에 사용되지 않은 것 부터 빼내는 알고리즘이기 때문에 queue 형식으로 만들고 만약 queue안에 들어있는 값이 cacheHit 되면 맨 마지막으로 보내준다.
1. `cities`(도시이름) 길이 만큼 `for`문을 돌린다.
2. 각 도시 이름은 대소문자를 구분하지 않기 떄문에 `toUpperCase()`를 해서 대문자로 만들어준다.
3. 만약 queue(캐시)에 일치하는 값이 들어있다면 현재있는 위치를 잘라 맨뒤로 `unshift()` 해준다.
4. 그리고 cacheHit됬기 때문에 1을 더해준다.
<pre>
if(cacheQue.includes(upper)){
    const lru = cacheQue.splice(cacheQue.indexOf(upper),1).join('');
    cacheQue.unshift(lru);
    answer += cacheHit;
}
</pre>
5. 만약 일치하지 않으면 상황에 따라 unshift와 pop을 해주고 5를 더해준다.
<pre>
if(cacheQue.length < cacheSize){
    cacheQue.unshift(upper);
}else{
    cacheQue.pop();
    cacheQue.unshift(upper);
}
answer += cacheMiss;
</pre>
6. 만약 캐시크기가 0이면 cacheHit가 없기 때문에 크기 만큼 5를 곱해준다.
<pre>
if(cacheSize === 0){
    return cities.length * cacheMiss;
}
</pre>
<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/17680?language=javascript