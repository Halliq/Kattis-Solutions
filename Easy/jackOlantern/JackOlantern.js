const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var N = parseInt(nums[0]);
    var T = parseInt(nums[1]);
    var M = parseInt(nums[2]);
    /*Solve the test case and output the answer*/

    console.log(N*T*M);
});