const readline = require('readline');
 
 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 let inputNumber = [];
 
 rl.on('line', function(line)  {
     inputNumber.push(line);
     
     if(inputNumber.length == (parseInt(inputNumber[0])+1) ){
         rl.close();
     }
 });
 
 rl.on('close', function() {
     for(let i=1; i< inputNumber.length;i++){
 
         if((i+1)%2==0){
             console.log(inputNumber[i]);
         }
     }
 });
