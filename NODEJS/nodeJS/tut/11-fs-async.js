const {readFile, writeFile, readFileSync, writeFileSync, read} = require('fs')
const path = require('path')

//Asynchronous read and write example
// readFile('./content/big.txt', 'utf8', (err, firstData) => {
//     if (err){
//         console.log(err);
//         return
//     }
//     readFile('./content/second.txt', 'utf8', (err, secondData) => {
//         if (err){
//             console.log(err);
//             return
//         }
//         writeFile('./content/result.txt', `The contents of big.txt are: \n ${firstData} \n The contents of second.txt are: \n ${secondData}`, 'utf8' , (err) => {
//             if (err){
//                 console.log(err);
//                 return
//             }
//             console.log('File written successfully');
//         })
//     })
// })

// for (let i = 0; i < 10000; i++){
//     console.log('testing server...');
// }

// Sync


try {
    const firstData = readFileSync('./content/big.txt', 'utf8')
    for (let i = 0; i < 10000; i++){
        console.log('testing server...');
    }
    const secondData = readFileSync('./content/second.txt', 'utf8')
    const result = `The contents of big.txt are: \n ${firstData} \n The contents of second.txt are: \n ${secondData}`
    writeFileSync('./content/result.txt', result, 'utf8')
} catch (error) {
    console.error(error)
}




