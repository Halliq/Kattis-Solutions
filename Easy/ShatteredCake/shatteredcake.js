readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var input = []
let V = 0

rl.on('line', function(line){

    input.push(line)
    N =  parseInt(input[1])
   
    
    if(N+2 ==input.length){
        rl.close()
    }       
});

rl.on('close', function(){
    for(var i=0; i<N;i++){
        V  += eval(input[2+i].replace(' ','*'))
    }
    console.log(V / parseInt(input[0]))
})