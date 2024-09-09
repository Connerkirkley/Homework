const http = require('http');
const fs = require('fs');



const puzzles = fs.readFileSync('./html/puzzle10.html', 'utf8');

console.log(puzzles);

const server = http.createServer((req, res) => {
    
    if(req.url === '/'){
        res.end("WELCOME TO THE JUNGLE WHERE IT'S ALL FUN AND GAMES")
    }
    else if(req.url === '/about'){
        res.end('nuh uh')
    }
    else{
        res.end('NUH UH')
    }
})









