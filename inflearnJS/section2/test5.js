// 5.등수 구하기
// n명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는
// 프로그램을 작성하라

function solution(arr) {
  //   let answer = Array.from({ length: arr.length }, () => 1);
  let answer = Array(arr.length).fill(1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        answer[i]++;
      }
    }
  }
  return answer;
}

const score = [87, 89, 92, 100, 76];
console.log(solution(score));
