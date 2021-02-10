//김서방은 1에 있다
const result=solution(['Jane', 'ww','qq','Kim'])
console.log(result);

function solution(seoul) {
    var answer = '';
    
    const result = seoul.findIndex(val => val === 'Kim')
    answer = `김서방은 ${result}에 있다`;
    return answer;
}