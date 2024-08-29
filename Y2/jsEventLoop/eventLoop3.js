const fs = require('fs')


fs.readFile(`${__dirname}/input.txt`, (err, data) => {
    if (err) throw err;
    console.log(data.toString() + 'async message');
}); 


console.log(fs.readFileSync(`${__dirname}/input.txt`).toString() + 'sync message')

// Async message appears last while the sync appears first. Is that because of the process of the call stack making the whole file run in order only allowing async messages to appear after everything in the base file has been done, correct?