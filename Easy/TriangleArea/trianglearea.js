readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let result = 0;
rl.on('line', function(line){
    var nums = line.split(' ');
    const h = parseInt(nums[0])
    const b = parseInt(nums[1])

    result = (b*h) / 2;
    rl.close();   
});

rl.on('close', function(){
    console.log(result)
})