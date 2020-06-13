const result = solution('pPoooyY')
console.log(result);

function solution(s){
    var answer = true;
    console.log(s.toUpperCase());
    let p = 0;
    let y = 0;
    for(let i = 0; i<s.length; i++){
        let upper = s[i].toUpperCase();
        if(upper === "P"){
            p+=1;
        }else if(upper === "Y"){
            y+=1;
        }
    }
    if(p !== y){
        if(p === 0 || y === 0){
            return answer;
        }
        return !answer;
    }
    return answer;
}