const reverse = str => str.split("").reverse().join("");
const toBinary = n => reverse(n.toString(2));
const fromBinary = str => parseInt(reverse(str), 2);

const input = require('fs')
    .readFileSync('./14.input.txt', 'utf-8')
    .split('\n')
    .map(x => x.split(/[[\]\s=]+/))
    .map(([cmd, arg1, arg2]) => 
        cmd === 'mem'
            ? [cmd, parseInt(arg1), toBinary(parseInt(arg2))]
            : [cmd, reverse(arg1)]
    )

const zip = (a, b) => a.length >= b.length
    ? a.map((x, i) => [x, b[i]])
    : zip(b, a);

const bitWise = fn => (s1, s2) => zip([...s1], [...s2])
    .map(([a, b]) => fn(parseInt(a)||a||0, parseInt(b)||b||0))
    .join('');

const and = bitWise((a, b) => a & b);
const or  = bitWise((a, b) => (a==='X'||b==='X') ? 'X' : (a | b));

const fuzz = mask => {
    const xs = Object.entries([...mask])
        .filter(([i, x]) => x==='X')
        .map(([i, x]) => parseInt(i));
    const len = 2**xs.length;
    const masks = [];
    for (let i=0; i<len; i++) {
        const bits = toBinary(i).padEnd(xs.length, '0');
        masks[i] = xs.reduce(
            (m, pos, j) => m.substr(0, pos) + bits[j] + m.substr(pos+1),
            mask
        );
    }
    return masks;
}

const setMem = (mem, addr, val) => {
    mem[addr] = val
    return mem;
}

const mem1 = (mask, mem, addr, val) =>
    setMem(mem, addr, or(mask.replace(/X/g, '0'), and(mask.replace(/X/g, '1'), val)))

const mem2 = (mask, mem, addr, val) =>
    fuzz(or(toBinary(addr), mask))
        .reduce((mem, a) => setMem(mem, fromBinary(a), val), mem)

const fns = memFn => ({
    mask: ({ mem }, m) =>
        ({mask: m, mem }),
    mem: ({ mask, mem }, addr, val) =>
        ({ mask, mem: memFn(mask, mem, addr, val) }),
});

const run = fns => prog => prog.reduce(
    (state, [cmd, ...args]) => fns[cmd](state, ...args),
    { mem: {}, mask: 'X'.repeat(36) },
);

const sum = mem => Object.values(mem)
    .map(fromBinary)
    .reduce((a, b) => a + b);

const endState1 = run(fns(mem1))(input).mem;
const answer1 = sum(endState1);
console.log(answer1);

const endState2 = run(fns(mem2))(input).mem;
const answer2 = sum(endState2);
console.log(answer2);

console.log(Math.max(...Object.keys(endState2)))