readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var input = []
var msg = ""
var L = ""
var S = ""
var number = 0
rl.on('line', function(line){
    input.push(line)
    S = input[0]
    L = input[1]
    
    if(input.length == 2){
        rl.close()
    }       
});

rl.on('close', function(){
    let i=0
    while(i < L.length){
      number =  Math.abs(parseInt(L.substring(i, i+3)))
      msg += S.charAt(number-1)
      i += 3  
    }
    console.log(msg)  
})