const { listeners } = require('process');
const readline = require('readline');
 
 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 let input = [];
 var N = 0;
rl.on('line', function(line)  {
     input.push(line);
     N = parseInt(input[0]);

     if( (input.length == 2)  && (
        2 <= N <= 10)
     ){
        rl.close();
     };
});
 
 rl.on('close', function() {
    var sum = 0; 
    for(let i=0;i< N;i++){
        sum += parseInt(input[1].split(" ")[i])
    }
    console.log(`${sum}`)
 });
