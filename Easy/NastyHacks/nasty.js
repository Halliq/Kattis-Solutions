const readline = require('readline');
 
 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 let input = [];
 var n = 0;
 var r = 0;
 var e = 0;
 var c = 0;
 
 rl.on('line', function(line)  {
     input.push(line);
     n = parseInt(input[0]);

     if(input.length == n+1){
        rl.close()
     }
    
 });
 
 rl.on('close', function() {
    for(let i=0;i < n ; i++){
        r = parseInt(input[i+1].split(" ")[0])
        e = parseInt(input[i+1].split(" ")[1])
        c = parseInt(input[i+1].split(" ")[2])

        if((e - c) == r)
            console.log(`does not matter`)
        if((e - c) > r)
            console.log(`advertise`)
        if((e - c )< r) 
            console.log(`do not advertise`)
    }
 });
