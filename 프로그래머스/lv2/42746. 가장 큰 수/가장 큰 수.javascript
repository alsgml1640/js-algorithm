function solution(numbers) {
   if(Math.max(...numbers) === 0) return '0';
    var answer = numbers.map(e => String(e)).sort((a,b)=> (b+a)-(a+b)).join('');
    return answer;
}