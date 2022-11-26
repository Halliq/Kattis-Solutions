const readline = require('readline');
 
 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 let input = [];
 
 rl.on('line', function(line)  {
     input.push(line);
     s1 = parseInt(input[0].split(" ")[0])
     s2 = parseInt(input[0].split(" ")[1])
     s3 = parseInt(input[0].split(" ")[2])
     s4 = parseInt(input[0].split(" ")[3])

     rl.close()
    
 });
 
 rl.on('close', function() {
    const semi = parseFloat( (s1+s2+s3+s4) / 2)
    const area = Math.sqrt((semi -s1) *
                 (semi -s2) *
                 (semi -s3) *
                 (semi -s4));

    console.log(`${area}`)
 });