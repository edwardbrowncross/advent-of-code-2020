const input = require('fs')
    .readFileSync('./25.input.txt', 'utf-8')
    .split('\n')
    .map(x => parseInt(x))

const getLoops = v => {
    let val = 1;
    for (let i=1; true; i++) {
        val = (val * 7) % 20201227;
        if (val === v) {
            return i;
        }
    }
}

const transform = (n, loops) => {
    let val = 1;
    for (let i=0; i<loops; i++) {
        val = (val * n) % 20201227;
    }
    return val;
}

const answer1 = transform(input[0], getLoops(input[1]))
console.log(answer1);