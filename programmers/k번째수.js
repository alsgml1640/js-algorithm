function solution(array, commands) {
    let result = [];
    // commands.map((e,index)=>{
    //     let i = e[index];
        
    //     console.log(i);
    // })
    for(let l = 0 ; l <commands.length ; l ++ ){
        let i = commands[l][0];
        let j = commands[l][1];
        let k = commands[l][2];
    
        result.push(array.slice(i-1,j).sort((a,b)=> a- b)[k-1]);
    }
    var answer = result;
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));