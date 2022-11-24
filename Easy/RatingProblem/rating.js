readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var input = []
let m = 0
var t = 0
let n = 0
rl.on('line', function(line){
    input.push(line)
    n = parseInt(input[0].split(" ")[0])
    const k = parseInt(input[0].split(" ")[1])
    m = (n - k)

    if(input.length -1 == k){
        rl.close(m)
    }       
});

rl.on('close', function(){
    for(let i=0;i<input.length-1;i++){
        t += parseInt(input[i+1])
    }

    const max = (m*3)+t
    const min = (m*(-3)+t)
    console.log(`${min/ n } ${max / n}`)
    
})