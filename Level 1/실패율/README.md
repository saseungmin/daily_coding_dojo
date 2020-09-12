# 🌈 실패율
## 📌 2019 KAKAO BLIND RECRUITMENT
### 🔸 LEVEL 1
#### 🔹 풀이 방법
- 현재 스테이지에서 있는 클리어하지 못한 사용자의 수를 알아낸다.
```javascript
const filterLen = stages.filter(val => val === i).length;
```
- 배열에 객체로 인덱스 번호와 실패율을 저장한다.
```javascript
answer.push({no:i, failure:filterLen === 0 ? 0 : filterLen/initLen});
```

- 실패율이 높은 순으로 정렬하고 만약 실패율이 같으면 인덱스번호가 더 작은 순으로 정렬시키고 스테이지(인덱스 번호)를 리턴시킨다.
```javascript
return answer.sort((a,b) =>b.failure === a.failure ? a.no - b.no : b.failure - a.failure)
            .map(val => val.no);
```
<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript