        var result = solution(6,[46, 33, 33 ,22, 31, 50],[27 ,56, 19, 14, 14, 10]);
        console.log(result);
        function solution(n, arr1, arr2) {
            var answer = [];
            var combine_arr = arr1.map((val,index) => {
                return val | arr2[index];
            }).map(val => {
                return val.toString(2).length === n ? val.toString(2) :  "0".repeat(n-val.toString(2).length)+val.toString(2);
            });          
            answer = combine_arr.map(val=> {
                var str ="";    
                for(var i = 0; i<val.length; i++){
                    if(val[i] == 1){
                        console.log(val[i]);
                        str += "#";
                    }else if(val[i] == 0){
                        str += " ";
                    }
                }
                return str;
            })

            return answer;
        }
