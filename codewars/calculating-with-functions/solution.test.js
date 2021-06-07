function zero(calculation) {
  if (typeof calculation === 'function') {
    return calculation(0);
  }

  return 0;
}
function one(calculation) {
  if (typeof calculation === 'function') {
    return calculation(1);
  }

  return 1;
}
function two(calculation) {
  if (typeof calculation === 'function') {
    return calculation(2);
  }

  return 2;
}
function three(calculation) {
  if (typeof calculation === 'function') {
    return calculation(3);
  }

  return 3;
}
function four(calculation) {
  if (typeof calculation === 'function') {
    return calculation(4);
  }

  return 4;
}
function five(calculation) {
  if (typeof calculation === 'function') {
    return calculation(5);
  }

  return 5;
}
function six(calculation) {
  if (typeof calculation === 'function') {
    return calculation(6);
  }

  return 6;
}
function seven(calculation) {
  if (typeof calculation === 'function') {
    return calculation(7);
  }

  return 7;
}
function eight(calculation) {
  if (typeof calculation === 'function') {
    return calculation(8);
  }

  return 8;
}
function nine(calculation) {
  if (typeof calculation === 'function') {
    return calculation(9);
  }

  return 9;
}

function plus(rightOperand) {
  return (leftOperand) => leftOperand + rightOperand;
}
function minus(rightOperand) {
  return (leftOperand) => leftOperand - rightOperand;
}
function times(rightOperand) {
  return (leftOperand) => leftOperand * rightOperand;
}
function dividedBy(rightOperand) {
  return (leftOperand) => Math.floor(leftOperand / rightOperand);
}

describe('solution', () => {
  it('test', () => {
    expect(seven(times(five()))).toBe(35);
    expect(four(plus(nine()))).toBe(13);
    expect(eight(minus(three()))).toBe(5);
    expect(six(dividedBy(two()))).toBe(3);
    expect(one(minus(zero()))).toBe(1);
  });
});
