const readline = require('readline');
 
 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 let input = [];
 var N = 0;
 var output = 0;
 
 rl.on('line', function(line)  {
     input.push(line);
     N = parseInt(input[0]);

     if(N+1 == input.length){
        rl.close();
     }
    
 });
 
 rl.on('close', function() {
     for(let i=0;i < N;i++){
        output += parseInt(input[i+1]) 
     }
     console.log(`${output - (N-1)}`);
 });
