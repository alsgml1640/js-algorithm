// 단어 공부 

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let AZ = [];
for(let i = 65 ; i < 91 ; i ++){
    AZ.push(String.fromCharCode(i));
}

rl.on('line',function(line){
    line = line.toUpperCase().split('')
    
    for(let i = 0 ; i < AZ.length ; i ++){
        console.log(line.indexOf(AZ[i]), AZ[i]);
    }

    rl.close();
})
