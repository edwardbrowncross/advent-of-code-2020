const input = require('fs')
    .readFileSync('./10.input.txt', 'utf-8')
    .split('\n')
    .map(x => parseInt(x));

const device = Math.max(...input) + 3;
const jolts = [0, ...input, device].sort((a,b) => a-b);
const diffs = jolts.map((x, i, all) => i !== 0 && x - all[i - 1]).slice(1);

const d = n => diffs.filter(x => x===n).length;
const answer1 = d(1) * d(3);
console.log(answer1);

// number of ways 1s can be removed from a run of 1s of length len
const possibles = len => {
    if (len <= 0) {
        return 1;
    }
    if (len === 1) {
        return 2;
    }
    // don't remove 1st + remove 1st but not 2nd + remove 1st and 2nd
    return possibles(len-1) + possibles(len-2) + possibles(len-3);
}

// find the lengths of all runs of consecutive 1s
const runs = diffs
    .reduce((rs, x) => {
        if (x === 1) {
            rs[0]++
        } else if(rs[0] > 0) {
            rs = [0, ...rs]
        }
        return rs;
    }, [0]);

const answer2 = runs
    .map(x => x-1) // can never remove the last in a run
    .filter(x => x>0)
    .map(x => possibles(x))
    .reduce((a, b) => a * b);

console.log(answer2);