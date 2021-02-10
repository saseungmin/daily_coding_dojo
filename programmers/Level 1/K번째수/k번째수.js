var result=solution([3,51,12,1,4,6,9,7,8],[[2, 6, 2], [5, 5, 1], [3, 7, 4]]);
console.log("result",result);
function solution(array, commands) {
    var answer = [];
    for(var i =0; i < commands.length; i++){
        var sliceTemp = array.slice(commands[i][0]-1,commands[i][1]);
        sliceTemp.sort(function(a, b){return a-b});
        answer.push(sliceTemp[commands[i][2]-1]);
    }
    return answer;
}