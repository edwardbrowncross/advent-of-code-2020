const input = require('fs')
    .readFileSync('./7.input.txt', 'utf-8')
    .split('\n')
    .map(x => x
        .replace(/ bags?\.?/g, '')
        .split(' contain ')
    )
    .map(([outer, x]) => [
        outer,
        x.split(', ')
            .map(y => [parseInt(y[0]), y.slice(2)])
            .filter(x => x[0])
    ])

const bags = new Set(['shiny gold']);
for (let i=0; i<input.length; i++) {
    const [outer, inner] = input[i];
    if (!bags.has(outer) && inner.some(([n, col]) => bags.has(col))) {
        bags.add(outer)
        i = -1;
    }
}
bags.delete('shiny gold')

const answer1 = bags.size;
console.log(answer1);

const bagMap = Object.fromEntries(input);
const bagsInside = col =>
    bagMap[col].reduce((s, [n, col]) => s + n + n * bagsInside(col), 0);

const answer2 = bagsInside('shiny gold');
console.log(answer2);