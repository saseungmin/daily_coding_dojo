        const result=solution([93,30,55], [1,30,5]);
        console.log(result);
            
        function solution(progresses, speeds) {
            let answer = [];
            const max = 100;
            while(progresses.length > 0){
                for(let i=0; i<progresses.length; i++){
                    if(progresses[i]<max){
                        progresses[i] += speeds[i];
                    }
                }
                console.log(progresses);
                let count = 0;
                while(progresses[0] >= max){
                    progresses.shift();
                    speeds.shift();
                    count++;
                }
                if(count >0){
                    answer.push(count);
                }
            }
            return answer;
        }
