const input = require('fs')
    .readFileSync('./22.input.txt', 'utf-8')
    .split('\n\n')
    .map(x =>
        x.split('\n')
            .map(x => parseInt(x))
            .filter(x => !isNaN(x))
    );

const score = cards => [...cards].reverse()
    .reduce((s, c, i) => s + c*(i+1), 0);

const run1 = (p1, p2) => {
    p1 = [...p1];
    p2 = [...p2];
    while (p1.length && p2.length) {
        const x = p1.shift();
        const y = p2.shift();
        if (x > y) {
            p1.push(x, y);
        } else {
            p2.push(y, x);
        }
    }
    return [p1, p2];
};

const fingerprint = (p1, p2) => `${p1.join(',')}/${p2.join(',')}`;

const run2 = (p1, p2) => {
    const history = new Set();
    p1 = [...p1];
    p2 = [...p2];
    while (p1.length && p2.length) {
        const fp = fingerprint(p1, p2);
        if (history.has(fp)) {
            return [[...p1, ...p2], []];
        }
        history.add(fp);
        const x = p1.shift();
        const y = p2.shift();
        if (x > p1.length || y > p2.length) {
            if (x > y) {
                p1.push(x, y);
            } else {
                p2.push(y, x);
            }
        } else {
            const r = run2(p1.slice(0, x), p2.slice(0, y));
            if (r[0].length) {
                p1.push(x, y);
            } else {
                p2.push(y, x);
            }
        }
    }
    return [p1, p2];
}

console.time('run');
const answer1 = score(run1(...input).flat());
console.log(answer1);

const answer2 = score(run2(...input).flat());
console.log(answer2);
console.timeEnd('run');