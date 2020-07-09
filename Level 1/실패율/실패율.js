const result = solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

function solution(N, stages) {
    let answer = [];
    let initLen = stages.length;
    
    for(let i = 1; i <= N; i++){
        const filterLen = stages.filter(val => val === i).length;
        answer.push({no:i, failure:filterLen === 0 ? 0 : filterLen/initLen});
        initLen -= filterLen;
    }
    return answer.sort((a,b) => b.failure === a.failure ? a.no - b.no : b.failure - a.failure).map(val => val.no);
}