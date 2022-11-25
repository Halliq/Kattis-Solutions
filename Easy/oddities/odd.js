const readline = require('readline');
 
 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 let input = [];
 var n = 0;
 var x = 0;
 
 rl.on('line', function(line)  {
     input.push(line);
     n = parseInt(input[0]);

     if(input.length == n+1 &&
        (1 <= n <= 20)){
        rl.close()
     }
    
 });
 
 rl.on('close', function() {
    for(let i=0;i<n;i++){
        x = parseInt(input[i+1])
        if(x % 2 == 0){
            console.log(`${x} is even`)
        }else {

            console.log(`${x} is odd`)
        }
    }
 });
