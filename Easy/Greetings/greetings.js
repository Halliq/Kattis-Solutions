readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
let s,t,es = ""
let len = 0;

rl.on('line', function(line){
    input.push(line)
    t = input[0]

    if(t == "Later!"){
        s += "Alligator!"
    }
    
    if(t.startsWith("he") && t.endsWith("ey")){
        len = (t.length - 2);
        for(let i=0;i<len;i++){
            es += "ee"
        }
        s = "h" + es + "y"
    }
    rl.close();
});

rl.on('close', function(){
    console.log(s)
})