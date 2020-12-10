const input = require('fs')
    .readFileSync('./9.input.txt', 'utf-8')
    .split('\n')
    .map(x => parseInt(x))
const size = 25;

let answer1 = input.find((n, i, all) =>
    i>size && !all.slice(i - size, i)
        .some((x, j, all) => all.some((y, k) => x + y === n && j !== k))
);
console.log(answer1);

for (let i=0; i<input.length; i++) {
    let sum = 0;
    let ns = [];
    for (let j=i; j<input.length; j++) {
        sum += input[j];
        ns.push(input[j]);
        if (sum > answer1) {
            break;
        }
        if (sum === answer1 && i !== j) {
            console.log(Math.max(...ns) + Math.min(...ns))
        }
    }
}