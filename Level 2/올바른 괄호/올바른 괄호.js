function solution(s) {
  let answer = true;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (!stack.length || s[i] === "(") {
      stack.push(s[i]);
    } else {
      stack[stack.length - 1] === "(" ? stack.pop() : stack.push(s[i]);
    }
  }
  return stack.length ? !answer : answer;
}
