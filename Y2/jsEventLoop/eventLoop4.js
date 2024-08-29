const fs = require('fs');


console.log(fs.readFileSync(`${__dirname}/data.txt`).toString() + 'sync message')

setTimeout(() => {
    fs.readFile(`${__dirname}/asyncData.txt`, (error, data) => {
        if (error) throw error;
        console.log(data.toString() + ' async message')
    })
}, 2000);



console.log('Script complete');







