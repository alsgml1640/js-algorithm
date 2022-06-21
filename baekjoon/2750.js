//수 정렬하기 


// readFileSync 방식으로 풀기

// const fs = require('fs')
// const input = fs.readFileSync('2750.txt').toString().trim().split('\n').map(e => Number(e));

// input.shift();
// input.sort((a,b) => a-b);
// input.forEach((e)=> console.log(e))



// readline 방식으로 풀기
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let N = 0;
let input = [];
let result = [];
rl.on('line',function(line){
    if(N === 0){
        N = line;
    } else {
        input.push(line);
        if(input.length === parseInt(N)){
            result = Array.from(new Set(input)).sort((a,b)=> a- b);
            result.forEach(e => console.log(e));
            rl.close();
        }
        
    } 
});



