const input = require('fs')
    .readFileSync('./3.input.txt', 'utf-8')
    .split('\n');

const countTrees = (x, y) => input
    .filter((_, i) => i%y === 0)
    .filter((row, i) => row[(i*x)%row.length] === '#')
    .length

const answer1 = countTrees(3, 1);
console.log(answer1);

const dirs = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
];

const answer2 = dirs.reduce((a, [x, y]) => a * countTrees(x, y), 1);
console.log(answer2);

