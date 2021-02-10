function solution(msg) {
  let dictionary = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let answer = [];
  const count = 0;
  for (let i = 0; i < msg.length; i) {
    const w = msg[i],
      n = msg[i + 1];
    const changeW = check(msg, w, n, i, count, dictionary);
    answer.push(dictionary.findIndex((val) => val === changeW) + 1);
    i += changeW.length;
  }

  return answer;
}

function check(msg, w, n, i, count, dictionary) {
  const init = 1;
  const index = dictionary.findIndex((val) => val === w + n);
  if (index === -1) {
    dictionary.push(w + n);
    return w;
  } else {
    count++;
    return check(msg, w + n, msg[i + init + count], i, count, dictionary);
  }
}
