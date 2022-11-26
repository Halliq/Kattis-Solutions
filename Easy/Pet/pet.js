const readline = require('readline');
 
 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 let input = [];
 var winner = {
    index: 0,
    points: 0
 }
 
 rl.on('line', function(line)  {
     input.push(line);
     
     if(input.length == 5){
        rl.close()
     }
    
 });
 
 rl.on('close', function() { 
    for(let i=0;i<5;i++){
        var tot = 0;
        for(let j=0;j<4;j++){
            tot += parseInt(input[i].split(" ")[j])
        }
        if(tot > winner.points){
            winner.points = tot;
            winner.index  = i+1; 
        }
     }
     console.log(`${winner.index} ${winner.points}`)
 });
