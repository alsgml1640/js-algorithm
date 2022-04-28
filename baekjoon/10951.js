// A + B - 4
// 두 정수 a,b를 받은다음 a+b를 출력하는 프로그램을 작성하세요

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  line = line.split(" ");
  console.log(parseInt(line[0]) + parseInt(line[1]));
  rl.close();
});
