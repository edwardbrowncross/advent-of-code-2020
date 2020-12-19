const input = require('fs')
    .readFileSync('./18.input.txt', 'utf-8')
    .replace(/\+/g, 'a')
    .replace(/\*/g, 'm')
    .split('\n')

const ops = {
    'a': (a, b) => a + b,
    'm': (a, b) => a * b,
}

const simpleExpression = precedence => str => {
    str = str.replace(/\(|\)/g, '');
    precedence.forEach(ps => {
        const re = new RegExp(`(\\d+) (${ps.join('|')}) (\\d+)`)
        while (re.test(str)) {
            str = str.replace(re, (_, a, op, b) => ops[op](parseInt(a), parseInt(b)));    
        }
    })
    return parseInt(str);
}

const fullExpression = precedence => str => {
    while (/\(/.test(str)) {
        str = str.replace(/\([^())]+\)/, simpleExpression(precedence));
    }
    return simpleExpression(precedence)(str);
};

const answer1 = input
    .map(fullExpression([['a', 'm']]))
    .reduce((a, b) => a + b)
console.log(answer1);

const answer2 = input
    .map(fullExpression([['a'], ['m']]))
    .reduce((a, b) => a + b)
console.log(answer2);