const result = solution('100-200*300-500+20');
console.log(result);

function solution(expression) {
  let result = [];

  for (let i = 0; i < 6; i++) {
    let regExp = expression.match(/(\d+|[*|+|-])/g);
    let sum = 0;
    if (i === 0) {
      sum = calculation(regExp, '-', '*', '+');
    } else if (i === 1) {
      sum = calculation(regExp, '-', '+', '*');
    } else if (i === 2) {
      sum = calculation(regExp, '+', '-', '*');
    } else if (i === 3) {
      sum = calculation(regExp, '+', '*', '-');
    } else if (i === 4) {
      sum = calculation(regExp, '*', '+', '-');
    } else {
      sum = calculation(regExp, '*', '-', '+');
    }
    result.push(sum);
  }
  return result.reduce((previous, current) => (previous > current ? previous : current));
}

function calculation(regExp, first, second, third) {
  while (regExp.length > 1) {
    const index = regExp.findIndex((val) => val === first);
    if (index !== -1) {
      regExp[index - 1] = eval(regExp[index - 1] + first + regExp[index + 1]);
      regExp.splice(index, 2);
    } else {
      const index = regExp.findIndex((val) => val === second);
      if (index !== -1) {
        regExp[index - 1] = eval(regExp[index - 1] + second + regExp[index + 1]);
        regExp.splice(index, 2);
      } else {
        const index = regExp.findIndex((val) => val === third);
        if (index !== -1) {
          regExp[index - 1] = eval(regExp[index - 1] + third + regExp[index + 1]);
          regExp.splice(index, 2);
        }
      }
    }
  }
  return Math.abs(regExp[0]);
}
