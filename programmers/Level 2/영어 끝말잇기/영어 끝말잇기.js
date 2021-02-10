function solution(n, words) {
  let endLineWord = [];
  let count = 1;
  let round = 0;

  for (let i = 0; i < words.length; i++) {
    const findSameWord = endLineWord.findIndex((val) => val === words[i]);
    round = i;
    if (findSameWord !== -1) {
      break;
    } else {
      if (!endLineWord.length) {
        endLineWord.push(words[i]);
      } else {
        const endWordLen = endLineWord[endLineWord.length - 1];
        if (
          endWordLen[endWordLen.length - 1] !== words[i][0] ||
          words[i].length === 1
        ) {
          break;
        } else {
          endLineWord.push(words[i]);
        }
      }
      if (count % n === 0) count = 0;
      count++;
    }
  }

  if (endLineWord.length === words.length) return [0, 0];

  return [count, Math.ceil((round + 1) / n)];
}
