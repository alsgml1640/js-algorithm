function solution(array, commands) {
    let result = [];
    for(let l = 0 ; l <commands.length ; l ++ ){
        let i = commands[l][0];
        let j = commands[l][1];
        let k = commands[l][2];
    
        result.push(array.slice(i-1,j).sort((a,b)=> a- b)[k-1]);
    }
    var answer = result;
     return answer;
}