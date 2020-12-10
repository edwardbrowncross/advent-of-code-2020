const input = require('fs')
    .readFileSync('./06.input.txt', 'utf-8')
    .split('\n\n')
    .map(x => x.split('\n').map(y => y.split('')));

const union = (s1, s2) =>
    new Set([...s1, ...s2]);
const intersection = (s1, s2) =>
    new Set([...s2].filter(x => s1.has(x)));

const answer1 = input
    .map(x => x.reduce(union, new Set()))
    .reduce((a, b) => a + b.size, 0);
console.log(answer1);

const answer2 = input
    .map(x => x.slice(1).reduce(intersection, new Set(x[0])))
    .reduce((a, b) => a + b.size, 0);
console.log(answer2);
    