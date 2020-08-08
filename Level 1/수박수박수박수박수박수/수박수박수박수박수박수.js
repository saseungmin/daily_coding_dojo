
const result = solution(3);
// "수박수"
console.log(result);

function solution(n) {
    const initStr = '수박';
    return n%2 === 0 ? initStr.repeat(n/2) : initStr.repeat(n/2) + '수';
}