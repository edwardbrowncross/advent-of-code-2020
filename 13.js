const input = require('fs')
    .readFileSync('./13.input.txt', 'utf-8')
    .split('\n')

const t0 = parseInt(input[0]);
const busses = input[1].split(',')
    .map(x => x === 'x' ? 'x' : parseInt(x));

const nextBus = busses
    .filter(x => x !== 'x')
    .sort((a, b) => (a-t0%a) - (b-t0)%b)[0];

const answer1 = nextBus*(nextBus-t0%nextBus);
console.log(answer1);

const constraints = busses
    .map((x, i) => [x, i%x])
    .filter(([x]) => x !== 'x');

let t=0;
let dt=1;
for (const [a, n] of constraints) {
    while((t+n)%a !== 0) {
        t += dt;
    }
    dt *= a;
}
const answer2 = t;

console.log(answer2);