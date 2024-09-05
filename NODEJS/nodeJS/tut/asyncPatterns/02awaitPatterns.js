






const {readFile, writeFile} = require('fs').promises


const start = async() => {
    try {
        const first = await readFile('../content/first.txt')
        const second = await readFile('../content/second.txt')
        await writeFile('../content/resultharhar.txt' , `async = \n ${first}        \n ${second}`, {flag:'w'})

    } catch (error) {
        console.log('har har har har har har har har har har');
        console.log(error);
    }
}



start()





