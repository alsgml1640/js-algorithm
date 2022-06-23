const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:  process.stdout,
})

let N = 0;
const input = [];
let newInput;
rl.on('line',(line)=>{
    if(N == 0){
        N = line;
    }
    else {
        input.push(line);
    }
    if(input.length == Number(N)){
        newInput = Array.from(new Set(input));
        rl.close();
    }
}).on('close',()=>{
    newInput.sort((a,b)=>a-b);
    newInput.map(e=>console.log(Number(e)));
})