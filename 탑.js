        const result = solution([3,9,9,3,5,7,2]);
        console.log(result);

        function solution(heights) {
            let answer = [];
            
            while(heights.length > 0){

                const top= heights.pop();
                for(let i = heights.length-1; i>=0; i--){
                    if(heights[i] > top){
                        answer.unshift(i+1);
                        break;
                    }else if(i === 0){
                        if(heights[i] <= top){
                            answer.unshift(0);
                        }
                    }
                }
                if(heights.length === 0){
                    answer.unshift(0);
                }
            }

            return answer;
        }
