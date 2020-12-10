const input = require('fs')
    .readFileSync('./04.input.txt', 'utf-8')
    .split('\n\n')
    .map(x => Object.fromEntries(
        x.split(/\s/).map(x => x.split(':'))
    ));

const requiredFields = ['byr','iyr','eyr','hgt','hcl','ecl','pid'];

const validations = {
    byr: (x, n) => /^[0-9]{4}$/.test(x) && n>=1920 && n<=2002,
    iyr: (x, n) => /^[0-9]{4}$/.test(x) && n >= 2010 && n <= 2020,
    eyr: (x, n) => /^[0-9]{4}$/.test(x) && n >= 2020 && n <= 2030,
    hgt: (x, n) => /^[0-9]{2,3}(cm|in)$/.test(x) && (x.endsWith('cm') && n >= 150 && n <= 193) || (x.endsWith('in') && n >= 59 && n <= 76),
    hcl: x => /^#[0-9a-f]{6}$/.test(x),
    ecl: x => ['amb','blu','brn','gry','grn','hzl','oth'].includes(x),
    pid: x => /^[0-9]{9}$/.test(x),
}

const isValid1 = p =>
    requiredFields.every(f => p.hasOwnProperty(f));

const isValid2 = p =>
    requiredFields.every(f => validations[f](p[f], parseInt(p[f])))

const answer1 = input
    .filter(isValid1)
    .length;

console.log(answer1);

const answer2 = input
    .filter(isValid1)
    .filter(isValid2)
    .length;

console.log(answer2);