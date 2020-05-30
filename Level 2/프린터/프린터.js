        const result=solution([2,1,3,2,4], 2);
        console.log(result);
        function solution(priorities, location) {
            var answer = 1;
            let userIndex = location;
            while(priorities.length > 0){

                let queueShift = priorities.shift();
                let tempIndex = priorities.findIndex(val => {
                    return val > queueShift;
                });
                if(tempIndex != -1){
                    priorities.push(queueShift);
                }else{
                    if(userIndex === 0){
                        break;
                    }
                    answer++;
                }

                if(userIndex === 0){
                    userIndex = priorities.length-1; 
                }else{
                    userIndex--;
                }
            }
            return answer;
        }
