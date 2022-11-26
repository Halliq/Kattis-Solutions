const readline = require('readline');
 
 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 let input = [];
 var S = "";
 
 rl.on('line', function(line)  {
    input.push(line);
    S = input[0]
    
    rl.close()
    
 });
 
 rl.on('close', function() {
    var result = 1;
    for(let i=0;i < S.length;i++){
        for(let j=i+1;j<S.length;j++){
            if(S.charAt(i)==S.charAt(j)){
                result = 0;
                j = S.length
                i = S.length
            } 
        } 
    } 
    console.log(result);
});
