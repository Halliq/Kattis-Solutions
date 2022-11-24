const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    const word = nums[0];
    /*Solve the test case and output the answer*/

    console.log(`${word} ${word} ${word} `);
});