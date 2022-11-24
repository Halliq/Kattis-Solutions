const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var r1 = parseInt(nums[0]);
    var s = parseInt(nums[1]);
    /*Solve the test case and output the answer*/
    var r2 = Math.abs( (s*2) - (r1));
    console.log(r2);
});