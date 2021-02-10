# ✔ 두 개 뽑아서 더하기
## 🌈 LEVEL 1
### ✌️ 월간 코드 챌린지 시즌1
1. 순서대로 반복문을 돈다.
예를 들어 index 0번 부터 시작하면 안쪽 반복문은 1부터 시작해서 마지막 인덱스 번호 까지 돌고 바깥 반복문이 1부터 돌고 안쪽은 2부터 끝까지 일어나는 형태
```javascript
for(let i = 0; i < numbers.length - 1; i++){
    for(let j = i+1; j<numbers.length; j++){
        //...
    }
}
```
2. 두 수의 합을 구해서 만약 `result` 배열안에 해당 값이 존재하는지 `validate` 함수로 확인한다.
```javascript
const validate = (sum) => result.findIndex(value => value === sum);
```
3. 만약 `result` 배열에 해당 값이 존재하면 `null`을 `return`하고 없으면 해당 값을 `result` 배열에 넣는다.
```javascript
validate(sum) === -1 ? result.push(sum) : null;
```

---
📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/68644