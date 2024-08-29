const {readFile, writeFile} = require('fs')


console.log('started the 1st task');


readFile('../content/first.txt', 'utf8', (err, data)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(data);
    console.log('1st task done');
})
console.log('next task starting');


//readFile is async and






