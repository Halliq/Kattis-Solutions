readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var input = [];

rl.on('line', function(line){
    input.push(line);
    var r = parseInt(input[0]);
    
    var i = 0;
    var j = 0;

    var done = false;
    while(!done){
        var X = Math.abs(0-i);
        var Y = Math.abs(0-j);
        if(Math.hypot(X,Y) > r){
            console.log(`${i} ${j}`)
            rl.close();
        }
        i++;
        j++;
    }

});



rl.on('close', function(){

});