        function solution(numbers) {
            let str = numbers.map(val => val + '');
            let num = str.sort((a,b) => {
                console.log(b+a,a+b);
                return (b+a) - (a+b);
            });

            if(num[0]=== '0'){
                return '0';
            }

            return num.join('');
        }
