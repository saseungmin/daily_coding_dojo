const result = solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]);
console.log(result);
function solution(record) {
    let answer = [];
    const userStatus = ['님이 들어왔습니다.', '님이 나갔습니다.'];
    let users = {};

    const recordArr = record.map(val => val.split(" "));

    for (const index in recordArr) {
        if (recordArr[index][0] === "Enter" || recordArr[index][0] === "Change") {
            users[recordArr[index][1]] = recordArr[index][2];
        }
    }
    for (const index in recordArr) {
        if (recordArr[index][0] === "Enter") {
            answer.push(`${users[recordArr[index][1]] + userStatus[0]}`)
        } else if (recordArr[index][0] === "Leave") {
            answer.push(`${users[recordArr[index][1]] + userStatus[1]}`)
        }
    }

    return answer;
}