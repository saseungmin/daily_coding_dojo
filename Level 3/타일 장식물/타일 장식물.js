function solution(N) {
  let init1 = 1,
    init2 = 1,
    temp = 0;
  let fibo = [];

  for (let i = 0; i < N; i++) {
    fibo.push(init1);
    temp = init1 + init2;
    init1 = init2;
    init2 = temp;
  }

  const width = fibo[fibo.length - 1] + fibo[fibo.length - 2];
  const height = fibo[fibo.length - 1];
  return (width + height) * 2;
}
