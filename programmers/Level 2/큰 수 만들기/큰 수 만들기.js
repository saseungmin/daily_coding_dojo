        const result= solution("4177252841",4);
        console.log(result);

        function solution(number, k) {
            let answer ='';
            let strStack = [];

            for(let i = 0; i < number.length; i++){
                let num = number[i];
                while(k>0 && strStack[strStack.length-1]<num){
                    strStack.pop();
                    k--;
                }
                strStack.push(num);
            }
            if(k>0){
                for(let i = 0; i<k; i++){
                    strStack.pop();
                }
            }

            answer = strStack.join("");
            return answer;
        }
