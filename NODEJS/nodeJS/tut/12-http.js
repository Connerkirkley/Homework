const http = require('http')


const server = http.createServer((req, res) => {
    //conditional Rendering
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


server.listen('5000')