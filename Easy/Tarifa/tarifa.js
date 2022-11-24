readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let inputNumber = [];
let x,n,t = 0;

rl.on('line', function(line){
    inputNumber.push(line);
    x = parseInt(inputNumber[0])
    n = parseInt(inputNumber[1])
    t = x * (n + 1)

    for(let j=0;j < n;j++){
        t -= inputNumber[j+2]
    }

    if(inputNumber.length == (n+2)){
        rl.close()
    }
});

rl.on('close', function(){
    console.log(t)
})