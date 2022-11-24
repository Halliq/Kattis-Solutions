readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
let a,b = 0;

rl.on('line', function(line){
    input = line.split(" ");
    a = parseInt(input[0])
    b = parseInt(input[1])
    
    rl.close();
   
});

rl.on('close', function(){
    if(a < b)
        console.log(`${a} ${b}`)
    else
        console.log(`${b} ${a}`)
})