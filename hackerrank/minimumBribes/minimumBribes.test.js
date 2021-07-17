// function minimumBribes(q) {
//   // Write your code here
//   const copiedQ = [...q];
//   const countObj = {};

//   for (let i = 0; i < copiedQ.length; i++) {
//     const minIndex = copiedQ.findIndex((v) => v === i + 1);

//     if (minIndex !== i) {
//       for (let j = i; j < minIndex; j++) {
//         const bribeTarget = copiedQ[j];

//         if (countObj[bribeTarget]) {
//           const bribeCount = countObj[bribeTarget] + 1;

//           if (bribeCount === 3) {
//             return 'Too chaotic';
//           }

//           countObj[bribeTarget] = bribeCount;
//         } else {
//           countObj[bribeTarget] = 1;
//         }
//       }

//       const target = copiedQ.splice(minIndex, 1);
//       copiedQ.splice(i, 0, target);
//     }
//   }

//   return Object.values(countObj).reduce((sum, v) => sum + v);
// }

// void calc(vector<int> q)
// {
//     int ans = 0;
//     for (int i = q.size() - 1; i >= 0; i--) {
//         if (q[i] - (i + 1) > 2) {
//             cout << "Too chaotic" << endl;
//             return;
//         }
//         for (int j = max(0, q[i] - 2); j < i; j++)
//             if (q[j] > q[i]) ans++;
//     }
//     cout << ans << endl;
// }

function minimumBribes(q) {
  let answer = 0;

  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - (i + 1) > 2) {
      return 'Too chaotic';
    }

    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) {
        answer += 1;
      }
    }
  }

  return answer;
}

describe('minimumBribes', () => {
  it('minimumBribes', () => {
    expect(minimumBribes([2, 1, 5, 3, 4])).toBe(3);
    expect(minimumBribes([2, 5, 1, 3, 4])).toBe('Too chaotic');
  });
});
