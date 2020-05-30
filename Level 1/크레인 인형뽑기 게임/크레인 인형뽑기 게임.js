        function solution(board, moves) {
            
            let newboard = Array(board.length).fill(null).map(() => Array());
            let answer = 0;
            let answerArr =[];
            for(let i=0; i< board.length; i++){
                for(let j = 0; j<board[i].length; j++){
                    newboard[i][j] = board[j][i];
                }
            }
            while(moves.length > 0){
                const mymove = moves.shift();

                const findindex=newboard[mymove-1].findIndex(val => {
                    return val !== 0;
                });
                if(findindex !== -1){

                    if(answerArr.length === 0){
                        answerArr.push(newboard[mymove-1][findindex]);
                    }else if(answerArr.length !== 0){
                        if(answerArr[answerArr.length-1] === newboard[mymove-1][findindex]){
                            
                            answerArr.pop();
                            answer+=2;
                        }else{
                            answerArr.push(newboard[mymove-1][findindex]);
                        }              
                    }
                    newboard[mymove-1][findindex] = 0;
                }
            }
            return answer;
        }
