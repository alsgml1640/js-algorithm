// 문자열 반복 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = 0;
let result = "";
rl.on('line', function (line) {
    if (input === 0) {
        input = line;
    } else {

        line = line.split(' ');
        const num = line[0];
        const str = line[1];
        const str2 = str.split('');

        for (let i = 0; i < str.length; i++) {
            result += str2[i].repeat(num);
        }
        result += '\n';
        input--;
    }
    if (input === 0) {
        console.log(result);
        rl.close();
    }
})