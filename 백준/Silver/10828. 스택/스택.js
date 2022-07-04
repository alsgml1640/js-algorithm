const readline = require('readline');

const rl= readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let N = 0;
let input = [];
let stack = [];
let answer = [];
rl.on('line', (line)=>{
    if(N === 0){
        N = Number(line);
    }
    else 
    {
        input.push(line);
    }
    if(input.length === N){
        rl.close();
    }
}).on('close',()=>{
    for(let i = 0 ; i < N ; i ++){
        switch (input[i].split(' ')[0]) {
            case 'push' : 
                stack.push(input[i].split(' ')[1]);
                break;
            case 'top':
                stack.length <= 0 ? answer.push('-1') : answer.push(String(stack[stack.length-1]));
                break;
            case 'pop': 
                stack.length <= 0 ? answer.push('-1') : answer.push((stack.pop()));
            break;
            case 'size': 
                answer.push(String(stack.length));
                break;
            case 'empty': 
                stack.length <= 0 ? answer.push('1') : answer.push('0');
                break;
        }
    }
    let copy = answer.join(' ').replace(/[' ']/g,'\n');

    console.log(copy); 
})