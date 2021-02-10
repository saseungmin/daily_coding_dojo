        const result = solution(8,12);
        console.log(result);
        function solution(w,h){
            let answer =1;
            let r, q;
            let min = Math.min(w,h);
            let max = Math.max(w,h);

            while(true){
                q = parseInt(max/min);
                r = max % min;
                if(r === 0){
                    break;
                }

                max = min;
                min = r;

            }

            answer = (w*h) - (w+h-min);

            return answer;
        }
