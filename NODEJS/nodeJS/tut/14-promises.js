const { rejects } = require('assert')
const {readFile, writeFile,} = require('fs')


const path = require('path')


// let ip = "127.0.0.6"


// const myPromise = new Promise((resolve, reject)=>{
//     if(ip === '127.0.0.1' || ip === '127.0.0.5'){
//         resolve('suc')
//     }
//     else{
//         reject('mission failed')
//     }
// })


// console.log(myPromise);









let actualFile = path.join(__dirname + '/content/first.txt')

let processData = (data)=>{
    return new Promise((resolve, reject)=>{
        //this writes to a file completely in the background
        setTimeout(()=>{
            resolve(data.toString().toUpperCase())
        }, 500)
    })
}

let saveData = (data)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //can absoluty save to cloud or locally here
            resolve('Data saved ' + data)
        }, 500)
    })



}




let readFilePromise = (pathway) =>{
    return new Promise((resolve, reject) => {
        readFile(pathway, 'utf8', (err, data) =>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}


readFilePromise(actualFile)
    .then(content => processData(content))
    .then(processedData => saveData(processedData))
    .then(result =>{
        console.log(result);
    }).catch(error => {
        console.log(error);
    })

