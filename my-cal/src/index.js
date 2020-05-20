let http = require('http');
let fs = require('fs');
let path = require('path');

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    if(request.url.match("\.html$")){
        fs.readFile('.' + request.url, null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write(request.url);
                response.write('Whoops! File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    } else {
        fs.readFile('./index.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('Whoops! File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    }
};

http.createServer(handleRequest).listen(8000);