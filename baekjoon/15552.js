// 빠른 A + B

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";
let testCase = 0;
let answer = "";

rl.on("line", function (line) {
  input = line.split(" ");
  if (input.length === 1) {
    testCase = input[0];
  } else {
    let a = Number(input[0]);
    let b = Number(input[1]);
    answer += `${a + b}\n`;
    //solution(a, b);
    testCase--;
  }
  if (testCase === 0) {
    console.log(answer);
    rl.close();
  }
});
