// function solution(numbers) {
//   const answer = [];

//   for (let i = 0; i < numbers.length; i++) {
//     const queue = [];
//     let initValue = Number(numbers[i]).toString(2);

//     queue.push(numbers[i] + 1);

//     while (queue.length) {
//       const target = queue.shift();

//       const number = Number(target).toString(2);
//       let count = 0;

//       if (number.length !== initValue.length) {
//         initValue = initValue.padStart(number.length, 0);
//       }

//       for (let j = 0; j < number.length; j++) {
//         if (number[j] !== initValue[j]) {
//           count += 1;
//         }
//       }

//       if (count <= 2) {
//         const result = parseInt(number, 2);

//         answer.push(result);
//         break;
//       }

//       queue.push(parseInt(number, 2) + 1);
//     }
//   }

//   return answer;
// }

const interChangeBinary = (number) => {
  const reverseBinary = `0${number.toString(2)}`.split('').reverse();
  const findZeroIndex = reverseBinary.findIndex((value) => value === '0');

  [
    reverseBinary[findZeroIndex - 1],
    [reverseBinary[findZeroIndex]],
  ] = [
    reverseBinary[findZeroIndex],
    reverseBinary[findZeroIndex - 1],
  ];

  return parseInt([...reverseBinary].reverse().join(''), 2);
};

function solution(numbers) {
  const answer = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      answer.push(number + 1);
    } else {
      answer.push(interChangeBinary(number));
    }
  });

  return answer;
}

describe('solution', () => {
  it('interChangeBinary', () => {
    expect(interChangeBinary(7)).toEqual(11);
  });

  it('solution', () => {
    expect(solution([2, 7])).toEqual([3, 11]);
  });
});
