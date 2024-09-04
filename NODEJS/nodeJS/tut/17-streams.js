const {createReadStream, createWriteStream} = require('fs');

//default size of a chuck in bytes is 64KB
//last buffer - the remainder left
//highWaterMark - Conrols the size of the chunks



let stream = createReadStream('./content/big.txt', {highWaterMark: 90000}, {encoding: 'utf8'});




stream.on('data', (chunk) => {
    console.log(chunk);
    console.log('***************************************************************************************');
})



stream.on('error', (err) => {console.log(err);})