const http = require('http');

// const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         res.end('Welcome to the Jungle');
//     }
//     //...etc
// });


// server.listen(5000, err => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Server is running on port 5000');
// });












//event emmiter API

const server = http.createServer();

//emits request event
//request, subscribe, and respond
server.on('request', (req, res) => {
    if(req.url === '/') {
        console.log(req.url);
        res.end('homePage')
    }else if(req.url === '/about') {
        console.log(req.url);
        res.end('aboutPage')
    }else{
        console.log(req.url);
        res.end('404')
    }
})


server.listen(5000, err => {
    if (err) {
        console.log(err);
    }
    console.log('Server is running on port 5000');
});



