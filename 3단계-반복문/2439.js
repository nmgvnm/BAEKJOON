/* 
  첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

  하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

  첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.
  입력값 : 5
  출력값 : 
        *
       **
      ***
     ****
    *****
*/

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
 let input = fs.readFileSync(filePath).toString();

let count = Number(input);
let output = '';

for (let i = 0; i < count ; i++) {
  for (let j = 0; j < count - i -1 ; j++){ // count - i "-1"을 함으로써 마지막줄 공백 제거
    output += ' ';
  }
  for (let k = 0; k <= i; k++) {
    output += '*';
  }
  output +='\n';
}
console.log(output);
