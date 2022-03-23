// 오븐 시계
// 요리를 시작하는 시간과 오븐구이를 하는데 필요한 시간이 분단위로 주어졌을때
// 오른구이가 끝나는 시간을 계산하는 프로그램을 작성하시오

// 첫째줄에는 현재시각
// 둘째줄에는 요리하는데 필요한 시각
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = 0;
let H = 0;
let M = 0;
let timer = 0;
rl.on("line", function (line) {
  cnt++;
  if (cnt === 2) {
    timer = parseInt(line);
    rl.close();
  }
  line = line.split(" ");
  H = parseInt(line[0]);
  M = parseInt(line[1]);
}).on("close", function () {
  console.log(solution(H, M, timer));
  process.exit();
});

function solution(h, m, time) {
  let answer = "";
  let Hadd = Math.floor((m + time) / 60);
  let Madd = (m + time) % 60;

  if (m + time >= 60) {
    h = h + Hadd;
    m = Madd;
    if (h >= 24) {
      h = h - 24;
    }
  } else if (m + time < 60) {
    m = m + time;
  }
  answer = h + " " + m;
  return answer;
}
