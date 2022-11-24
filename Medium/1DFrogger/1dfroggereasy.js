readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var input = [] ;
var n = 0 ;
var s = 0 ;
var m = 0 ;
var next = 0 ;
var prev = 0 ;
var current = 0 ;
var done = false ;
var index = 0 ;
var h = 0 ;

rl.on('line', function(line){
    input.push(line);
    n = parseInt(input[0].split(" ")[0]);  // #boardsquares
    s = parseInt(input[0].split(" ")[1]);  // starting spot
    m = parseInt(input[0].split(" ")[2]);  // magic number
    
    
    if(input.length == 2 &&
        ( 1 <= n <= 200 &&
        ( 1 <= s <= n))){
        rl.close();
    }     
});

rl.on('close', function(){ 
    index = s-1;
    let msg = "";
    current = parseInt(input[1].split(" ")[index]);
    next = parseInt(input[1].split(" ")[index+current]);  // make jump    
    while(!done){
        if(current == m){
            msg = "magic" ;
            done = true;
        }

         else if((index+current) < 0) {   // jumped over on left-side
            msg = "left";
            done = true ;
        }
        else if((index+current) > n ){
            msg = "right";
            done = true;
        }
        else if(prev == next){
            msg = "cycle";
            h++;
            done = true;
        } else {
            prev = current;
            current = next;
            index = index + prev;
            next = parseInt(input[1].split(" ")[index+current]);
            h++;
        }
    }
    console.log(`${msg}\n${h}`);
})