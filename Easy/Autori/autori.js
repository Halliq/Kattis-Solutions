const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var result = ""

rl.on('line', function(line){
    var nums = line.split('-');
    for(let i=0;i<nums.length ; i++){
        result += nums[i].charAt(0)
    }
    rl.close();
});

rl.on('close', function(){
    console.log(result)
})