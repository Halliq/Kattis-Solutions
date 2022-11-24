readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
let result = ""

rl.on('line', function(line){
    input.push(line)
    result = input[0].split("").reverse().join("")
    if(input.length == 1){
        rl.close();
    }
});

rl.on('close', function(){
    console.log(parseInt(result))
})