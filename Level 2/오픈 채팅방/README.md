# ✔️ 오픈 채팅방
## 🌈 level 2
### 📌2019 KAKAO BLIND RECRUITMENT
### 🔸 풀이 방법
- `["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]` 주어진 record를
- `["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]` 만든다.
<pre>
const recordArr = record.map(val => val.split(" "));
// 0: (3) ["Enter", "uid1234", "Muzi"]
// 1: (3) ["Enter", "uid4567", "Prodo"]
// 2: (2) ["Leave", "uid1234"]
// 3: (3) ["Enter", "uid1234", "Prodo"]
// 4: (3) ["Change", "uid4567", "Ryan"]
</pre>
- Enter와 Change만 닉네임이 변경이 되기 때문에 둘만 아이디 이름으로 json array를 만들어준다.
<pre>
    for (const index in recordArr) {
        if (recordArr[index][0] === "Enter" || recordArr[index][0] === "Change") {
            users[recordArr[index][1]] = recordArr[index][2];
        }
    }
    // {uid1234: "Prodo", uid4567: "Ryan"}
</pre>

### 🔸 다른 사람 풀이
- 비슷하지만 map을 사용해서 `set(uid, nick)`으로 map을 생성하였다.
<pre>
function solution(record) {
    let ret = []
    const uids = new Map()

    record.forEach(entry => {
        let [command, uid, nick] = entry.split(' ')
        if (command === 'Enter' || command === 'Change') uids.set(uid, nick)
    })

    record.forEach(entry => {
        let [command, uid] = entry.split(' ')
        if (command === 'Enter') ret.push(`${uids.get(uid)}님이 들어왔습니다.`)
        if (command === 'Leave') ret.push(`${uids.get(uid)}님이 나갔습니다.`)
    })

    return ret
}
</pre>

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript

