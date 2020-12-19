const input = require('fs')
    .readFileSync('./19.input.txt', 'utf-8')
    .split('\n\n')

const rules = input[0]
    .split('\n')
    .map(x => x.split(": "))
    .reduce((m, [k, v]) => m.set(k, v), new Map());

const data = input[1]
    .split('\n');

const combineMatches = (a, b) =>
    a.map(x => b.map(y => x+y)).flat();

const getMatches = rules => ruleNum => {
    const rule = rules.get(ruleNum);
    if (rule === `"a"` || rule === `"b"`) {
        return [rule[1]]
    }
    return rule.split(' | ')
        .map(part =>
            part.split(' ')
                .map(getMatches(rules))
                .reduce(combineMatches)
        )
        .flat()
}

const ruleSet1 = new Set(getMatches(rules)('0'));
const answer1 = data.filter(d => ruleSet1.has(d)).length;
console.log(answer1);

// 0: 8 11
// 8: 42 | 42 8
// 11: 42 31 | 42 11 31

const rule42 = getMatches(rules)('42');
const rule31 = getMatches(rules)('31');
const rule42len = rule42[0].length;
const rule31len = rule31[0].length;

const test2 = d => {
    let n31 = 0;
    while (d.length && rule31.includes(d.substr(d.length-rule31len))) {
        d = d.substr(0, d.length-rule31len);
        n31++;
    }
    let n42 = 0;
    while (d.length && rule42.includes(d.substr(d.length-rule42len))) {
        d = d.substr(0, d.length-rule42len);
        n42++;
    }
    return d.length === 0 && n31 > 0 && n42 > n31;
};

const answer2 = data.filter(test2).length;
console.log(answer2);