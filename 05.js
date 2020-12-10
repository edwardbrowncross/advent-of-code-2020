const input = require('fs')
    .readFileSync('./05.input.txt', 'utf-8')
    .split('\n')

const toSeatNumber = str => parseInt(
    str.replace(/R|B/g, '1').replace(/L|F/g, '0'),
    2
);

const seatNumbers = input.map(toSeatNumber);

const answer1 = Math.max(...seatNumbers);
console.log(answer1);

for (let i=8; i<answer1-8; i++) {
    if (!seatNumbers.includes(i)) {
        console.log(i);
    }
}