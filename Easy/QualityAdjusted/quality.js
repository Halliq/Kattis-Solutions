readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var input = []
let quality = 0.0
let years   = 0.0
let total   = 0.0
rl.on('line', function(line){
    input.push(line)
    const N = parseInt(input[0])
    
    
    if(input.length -1 == N){
        rl.close()
    }       
});

rl.on('close', function(){
    for(let i=0;i<input.length-1;i++){
        quality = parseFloat(input[i+1].split(" ")[0])
        years = parseFloat(input[i+1].split(" ")[1])
        total += (quality * years)
    }
    console.log(`${total.toFixed(3)}`)  
})