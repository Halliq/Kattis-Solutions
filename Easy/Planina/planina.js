const readline = require('readline');
 
 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 let input = [];
 var N = 0;
 var squares = 1;
 var points = 4;
 
 rl.on('line', function(line)  {
     input.push(line);
     N = parseInt(input[0]);

     if(input.length == 1 &&
        (1 <= N <= 15)){
            rl.close();
        }
    
 });
 
 rl.on('close', function() {

    for(let i=1;i <= N ; i++){
        squares = Math.pow(2,i) 
        points = Math.pow((squares+1), 2)
    }
    console.log(`${points}`)
     
 });
