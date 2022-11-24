readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let result = 0;
rl.on('line', function(line){
    var nums = line.split(' ');
    if(nums[0] > nums[1]){
        result = 1;
    }
    rl.close()   
});

rl.on('close', function(){
    console.log(result)
})