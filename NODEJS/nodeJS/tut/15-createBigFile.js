const {writeFileSync} = require('fs')



// every bit of data is written to the bottom of the file
for(let i = 1; i < 300000; i++){
    writeFileSync('./content/big.txt', `Hi im ${i}\n`, {flag: 'a'})
}



//overwtitten data

// for(let i = 1; i < 10000; i++){
//     writeFileSync('./content/big.txt', `Hi im ${i}\n`, {flag: 'w'})
// }


//errors


// for(let i = 1; i < 1000000; i++){
//     writeFileSync('./content/big.txt', `Hi im ${i}\n`, {flag: 'r'})
// }

