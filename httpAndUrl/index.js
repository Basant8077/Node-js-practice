const http = require('node:http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const data = fs.readFileSync(`${__dirname}/api.json`, "utf-8");
    const dataorg = JSON.parse(data);

    if (req.url === '/') {
        res.end("Welcome to home page");

    }
    else if (req.url === '/about') {
        res.end('This is about section ');
    }
    else if (req.url === '/api') {
        
        res.end(dataorg[0].name);
    }
    else {
        res.writeHead(404, "Invalid url", {
            'content-length': '123',
            'content-type': 'text',
            'connection': 'keep-alive',
            'host': 'example.com',
            'accept': '*/*'
        })
        res.end("404 Not Found");
    }
})

server.listen(5000, '127.0.0.1', () => {
    console.log("Listening in port 5000")
});