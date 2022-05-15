// 상수

// readline 방식 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
})

rl.on('line',function(x){
    x = x.split(' ');
    let num1 = parseInt(x[0].split('').reverse().join(''));
    let num2 = parseInt(x[1].split('').reverse().join(''));

    console.log(Math.max(num1,num2));
    rl.close();
})


// fs 방식 
{
    let input = require('fs').readFileSync('input.text').toString().split(' ');
    let num1 = [...input[0]].reverse().join('');
    let num2 = [...input[1]].reverse().join('');
    
    console.log(Math.max(num1, num2));
}

