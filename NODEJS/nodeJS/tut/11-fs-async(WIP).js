const {read, write, readFile, writeFile, readFileSync, writeFileSync} = require('fs')
const path = require('path')
console.log("winter");





const first = readFileSync(path.join(__dirname, '/content/first.txt'), 'utf8')
const second = readFileSync(path.join(__dirname, '/content/second.txt'), 'utf8')
const third = readFileSync(path.join(__dirname, '/content/first.txt'), 'ucs2')
console.log(third);

writeFileSync(path.join(__dirname, "/content/result.txt"), `Here is the result: ${first}, ${second}`, {flag: 'w'})
console.log('task finished');



writeFileSync(path.join(__dirname, "/content/results.txt"), `Here is the result: ${first}, ${second}`, {flag: 'w'})

readFileSync(path.join(__dirname, '/content/first.txt'), 'utf8', (err,result)=>{
    if (err){
        console.log(err);
        return
    }
    const first = result
    console.log(first);
    readFileSync(path.join(__dirname, 'content/first.txt'), 'utf8', (err, result)=>{
        if (err){
            console.log(err);
            return
        }
        const second = result
        console.log(second);
        writeFileSync(path.join(__dirname, '/content/resultss.txt'), `here it is, \n ${first} \n ${second}`, (err, ))
    })
})


// anything that doesn't end in sync is async, async meaning it doesn't wait for the previous to finish running.