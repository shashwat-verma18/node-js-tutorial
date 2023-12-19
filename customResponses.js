const http = require('http');

const server = http.createServer((req,res) => {

    const url = req.url;

    if (url === '/home') {
        res.end('Welcome home!\n');
    }else if (url === '/about') {
        res.end('Welcome to About Us page!\n');
    }else if (url === '/node') {
        res.end('Welcome to my Node.js project!\n');
    } 
});

server.listen(4000);