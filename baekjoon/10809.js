// 알파벳 찾기


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const AZ = [];
for (let i = 97; i < 123; i++) {
    AZ.push(String.fromCharCode(i));
}

const result = [];
rl.on('line', function (line) {

    for (let i = 0; i < AZ.length; i++) {
        if (line.includes(AZ[i])) {
            result.push(line.indexOf(AZ[i]));
        } else {
            result.push(-1);
        }
    }
    rl.close();
}).on('close', function () {
    console.log(result.join(' '));
    process.exit();
});