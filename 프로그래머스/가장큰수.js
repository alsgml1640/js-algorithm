function solution(numbers) {
    var answer = '';
    let str = [];
    for(let i = 0; i < numbers.length ; i ++){
        str.push(String(numbers[i]));
    }
    str.sort((a,b)=> b-a);
    console.log(str);
    //let N = String(Math.max(...str));
    let lastN = '';

    
     //console.log(N[N.length-1])
     for(let i = 0 ; i < str.length ; i ++){
        console.log(str[i].length);
        // 2자리 인지 판별
        if(str[i].length === 2){
            // 뒷자리가 0인지 감별
            if(str[i][str[i].length-1]=='0'){
                lastN = str[i];
            }
        }
        else {
            answer += str[i];
        }
     }
     if(lastN != ''){
        answer += lastN;
     }
    return answer;
}

let input = [3, 30, 34, 5, 9];
console.log(solution(input))