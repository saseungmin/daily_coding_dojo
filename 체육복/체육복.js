        const result=solution(5,[2,4],[3,5]);
        // 5
        console.log(result);

        function solution(n, lost, reserve) {
            let answer = n;
            let arrlost =[];

            for(let i = 0; i<reserve.length; i++){
                let temp = lost.find(val => val===reserve[i]);
                if(temp != null){
                    arrlost.push(temp);
                }
            }
            for(let i = 0; i<arrlost.length; i++){

                reserve.splice(reserve.indexOf(arrlost[i]),1);
                lost.splice(lost.indexOf(arrlost[i]),1);

            }

            while(lost.length > 0){
                const res = lost.shift();
                const coatlost = reserve.findIndex(val => {
                    return val-1 === res || val+1 === res ? val : null 
                })
                if(coatlost === -1){
                    answer -= 1;
                }else{
                    reserve.splice(coatlost,1);
                }
            }
            

            return answer;
        }
