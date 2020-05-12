        const result = solution([3,1,2,3]);
        console.log(result);
        function solution(nums) {

            const length = nums.length/2;
            const uniqueArr =nums.filter((val,index) => {
                return nums.indexOf(val) === index;
            })

            return uniqueArr.length > length ? uniqueArr.length-(uniqueArr.length-length): uniqueArr.length;
        }
