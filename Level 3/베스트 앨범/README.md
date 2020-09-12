# ✔️ 베스트 앨범
## 🌈 level 3
### 🎈 해시

### ✌ 풀이방법
- 주어진 두배열의 길이가 같고, 같은 `index`로 연결되어있다.
- 또한, 고유한 번호는 `index` 번호이다.
- `JSONArray`로 담아준다.
- 또한, 각각의 장르 중 많이 재생된 수를 알아야되기때문에 `key` 와 `value` 값으로 이루어진 `object`를 사용한다.
```javascript
// jsonArr
// 0: {id: "0", genre: "classic", play: 500}
// 1: {id: "1", genre: "pop", play: 600}
// 2: {id: "2", genre: "classic", play: 150}
// 3: {id: "3", genre: "classic", play: 800}
// 4: {id: "4", genre: "pop", play: 2500}

// object
// {classic: 1450, pop: 3100}

for (const index in genres) {
    jsonArr.push({ id: index, genre: genres[index], play: plays[index] });
    sumObj[genres[index]] = (sumObj[genres[index]] || 0) + plays[index];
}
```

- `object`는 정렬을 할수 없기 때문에 배열로 바꿔준다.
```javascript
// 0: {genre: "classic", play: 1450}
// 1: {genre: "pop", play: 3100}

for(const value in sumObj){
    sumArr.push({genre:value, play:sumObj[value]});
}
```

- 속한 노래가 많이 재생된 장르를 먼저 수록해야하기 때문에 정렬을 내림차순으로 해준다.
- 노래가 많이 재생된 고유번호를 알아야하기 때문에 정렬을 내림차순으로 해준다.
```javascript
// 0: {id: "4", genre: "pop", play: 2500}
// 1: {id: "3", genre: "classic", play: 800}
// 2: {id: "1", genre: "pop", play: 600}
// 3: {id: "0", genre: "classic", play: 500}
// 4: {id: "2", genre: "classic", play: 150}

// 0: {genre: "pop", play: 3100}
// 1: {genre: "classic", play: 1450}

const sorted = (a, b) => b.play - a.play;

const sortSum = sumArr.sort(sorted);
const sortObj = jsonArr.sort(sorted);
```

- 그 후 장르마다 두 개씩만 필요하기 때문에 `count`를 설정해주어 `answer`에 2곡씩 담는다.
- 장르에 속한 곡이 하나라면, 하나의 곡만 선택한다.
```javascript
for (const i in sortSum) {
    let count = 0;
    for (const j in sortObj) {
        if (sortSum[i].genre === sortObj[j].genre) {
            answer.push(parseInt(sortObj[j].id));
            count++;
        }
        if (count === 2) {
            break;
        }
    }
}
```

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/42579?language=javascript