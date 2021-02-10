
        const result = solution([4, 4, 4, 3, 3]);
        console.log(result);
        function solution(arr){
            return arr.filter((item,index) => item != arr[index+1]);
        }
