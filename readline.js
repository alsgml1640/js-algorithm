//콘솔창에 입력 기능 소스 셋팅
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  console.log(input);
  process.exit();
});
