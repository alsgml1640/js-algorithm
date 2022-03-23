// 알람 시계
// 45분 일찍 알람 설정하기

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (x) {
  x = x.split(" ");
  console.log(solution(parseInt(x[0]), parseInt(x[1])));
  rl.close();
});

function solution(H, M) {
  let answer = "";
  if (M - 45 < 0) {
    M = M - 45 + 60;
    H = H - 1;
    if (H < 0) {
      H = 23;
    }
  } else if (M - 45 >= 0) {
    M = M - 45;
  }
  answer = `${H} ${M}`;
  return answer;
}
