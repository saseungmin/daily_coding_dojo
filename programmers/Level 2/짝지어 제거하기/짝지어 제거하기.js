
const result = solution('baabaa');
console.log(result);

function solution(s){
    let stack = [];

    for(let i = 0; i < s.length; i++){
        (!stack || stack[stack.length-1] !== s[i]) ? stack.push(s[i]) : stack.pop();
    }
    
    return stack.length === 0 ? 1:0;
}