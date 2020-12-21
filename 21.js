const input = require('fs')
    .readFileSync('./21.input.txt', 'utf-8')
    .split('\n')
    .map(row => ({
        ingredients: row.split(' (')[0].split(' '),
        allergens: row.match(/\(contains (.+)\)/)[1].split(', ')
    }));

const intersect = (s1, s2) =>
    s1.filter(x => s2.includes(x));

const getPossibles = list => {
    const pos = {};
    list.forEach(x =>
        x.allergens.forEach(a =>
            pos[a] = pos[a] ? intersect(pos[a], x.ingredients) : x.ingredients
        )
    );
    return pos;
}

const removeKnown = possibles => {
    const known = Object.values(possibles)
        .filter(p => p.length === 1)
        .flat();
    const toRemove = Object.values(possibles)
        .some(p => p.length !== 1 && intersect(p, known).length);
    if (!toRemove) {
        return possibles;
    }
    possibles = Object.fromEntries(
        Object.entries(possibles)
            .map(([k, v]) => [k, v.filter(x => v.length === 1 || !known.includes(x))])
    );
    return removeKnown(possibles);
}

const allergenToIngredient = Object.fromEntries(
    Object.entries(removeKnown(getPossibles(input)))
        .map(([k, v]) => [k, v[0]])
);
const knownIngredients = Object.values(allergenToIngredient);

const answer1 = input
    .map(x => x.ingredients)
    .flat()
    .filter(x => !knownIngredients.includes(x))
    .length;
console.log(answer1);

const compareString = (a, b) => {
    if (a === b) {
        return 0;
    }
    return a > b ? 1 : -1;
}

const answer2 = Object.entries(allergenToIngredient)
    .sort((a, b) => compareString(a[0], b[0]))
    .map(([k, v]) => v)
    .join(',');
console.log(answer2);