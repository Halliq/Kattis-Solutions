readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
let num = 0

rl.on('line', function(line){
    input.push(line)
    for(let i=0;i<3;i++){
        if(input[0].startsWith("555"))
        num = 1;    
    }
    
    if(input[0].length == 7){
        rl.close();
    }
});

rl.on('close', function(){
    console.log(num)
})