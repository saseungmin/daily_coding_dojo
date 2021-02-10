const result = solution('3people unFollowed me');
console.log(result);

function solution(s) {
    return s.toLowerCase().replace(/\b[a-z]{1}/gi, v => v.toUpperCase());
}