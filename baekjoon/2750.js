//수 정렬하기 


// readFileSync 방식으로 풀기

const fs = require('fs').readFileSync('2750.txt').toString().split('\r\n');

//let testCase = fs[0];
// const result = new Set(fs.splice(1).sort((a,b)=> a- b));
const result = fs.slice(1).sort((a,b)=> a-b);
console.log(result);

result.forEach(e => console.log(e))


// readline 방식으로 풀기
// const readline = require('readline');
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout,
// });

// let N = 0;
// let input = [];
// let result = [];
// rl.on('line',function(line){
//     if(N === 0){
//         N = line;
//     } else {
//         input.push(line);
//         if(input.length === parseInt(N)){
//             result = Array.from(new Set(input)).sort((a,b)=> a- b);
//             result.forEach(e => console.log(e));
//             rl.close();
//         }
        
//     } 
// });



