const { read } = require("fs");
const http = require("http");
const fs = require('fs');

const pathToFiles = './filess';

const requestListener = (req, res) => {
    
    fs.readdir(pathToFiles, (err, files) => {
        if(err) {
            res.writeHead(500);
            res.end("Internal server error");
        } else {
            console.log(files.join(', '));
        }
        
    })

    if(req.method != 'GET') {
        res.writeHead(405);
        res.end("HTTP method not allowed");
    }

    // if(req.url === '/get') {
    //     console.log('get')
    // }
    // res.writeHead(200);
    // res.end("Hello! It's my first server");
}

const host = 'localhost';
const port = 8000;

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});