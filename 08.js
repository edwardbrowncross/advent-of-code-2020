const input = require('fs')
    .readFileSync('./08.input.txt', 'utf-8')
    .split('\n')
    .map(x => x.split(' '))
    .map(([ins, n]) => [ins, parseInt(n)])

const instructions = {
    'nop': ([acc, pos, n]) => [acc, pos+1],
    'acc': ([acc, pos, n]) => [acc+n, pos+1],
    'jmp': ([acc, pos, n]) => [acc, pos+n],
}

const run = code => {
    const seen = {};
    let state = [0, 0];
    while (true) {
        const [acc, pos] = state;
        if (seen[pos]) {
            return [acc, false];
        }
        if (pos >= code.length) {
            return [acc, true];
        }
        seen[pos] = true;
        const [instr, n] = code[pos];
        state = instructions[instr]([acc, pos, n]);
    }
}

const [answer1] = run(input);
console.log(answer1);

for (let i in input) {
    const code = JSON.parse(JSON.stringify(input))
    const instr = code[i][0];
    if (instr === 'acc') {
        continue;
    }
    code[i][0] = instr === 'nop' ? 'jmp' : 'nop';
    const [acc, ok] = run(code);
    if (ok) {
        console.log(acc);
    }
}