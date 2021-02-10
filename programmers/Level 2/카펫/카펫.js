function solution(brown, yellow) {
  const area = brown + yellow;

  for (let i = Math.floor(area / 2); i > 0; i--) {
    if (area % i !== 0) {
      continue;
    }

    const width = i;
    const height = area / i;

    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}

const result = solution(10, 2);

console.log(result);
