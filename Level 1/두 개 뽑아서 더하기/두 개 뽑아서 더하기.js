const result = solution([5,0,2,7]);
console.log(result);

function solution(numbers) {
    const result = [];
    const validate = (sum) => result.findIndex(value => value === sum);

    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i+1; j<numbers.length; j++){
            const sum = numbers[i] + numbers[j];

            validate(sum) === -1 ? result.push(sum) : null;
        }
    }

    return result.sort((a,b) => a-b);
}