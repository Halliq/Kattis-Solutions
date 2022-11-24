const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    const a = nums[0];
    const b = 100 - a;


    console.log((100 / a).toFixed(10));
    console.log((100 / b).toFixed(10));
    /*Solve the test case and output the answer*/
});