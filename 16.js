const input = require('fs')
    .readFileSync('./16.input.txt', 'utf-8')
    .split('\n\n')
    .map(x => x.split('\n'));

const rules = input[0]
    .map(x =>
        x.split(/(?:: )|(?: or )|(?:-)/)
            .map(x => parseInt(x) || x)
    );

const ticket = input[1][1]
    .split(',')
    .map(x => parseInt(x) || x)

const nearby = input[2]
    .slice(1)
    .map(x =>
        x.split(',')
            .map(x => parseInt(x) || x)
    );

const testRule = ([name, a1, a2, b1, b2], x) =>
    (x >= a1 && x <= a2) || (x >= b1 && x <= b2);
    
const transpose = m => m[0].map((x,i) => m.map(x => x[i]));

const removeDuplicates = labels => {
    const toRemove = labels.filter(l => l.length === 1).flat();
    if (toRemove.length == labels.length) {
        return labels;
    }
    const newLabels = labels
        .map(x => x.filter(y => x.length === 1 || !toRemove.includes(y)));
    return removeDuplicates(newLabels);
}

const answer1 = nearby.flat()
    .filter(x => !rules.some(r => testRule(r, x)))
    .reduce((a, b) => a + b);

console.log(answer1);

const valid = nearby
    .filter(x =>
        x.every(y => rules.some(r => testRule(r, y)))
    );

const labels = removeDuplicates(
    transpose(valid)
        .map(x =>
            rules
                .filter(r => x.every(y => testRule(r, y)))
                .map(x => x[0])
        )
).map(x => x[0]);

const answer2 = Object.entries(labels)
    .filter(([k, v]) => v.startsWith('departure '))
    .map(([k]) => ticket[k])
    .reduce((a, b) => a * b)

console.log(answer2);