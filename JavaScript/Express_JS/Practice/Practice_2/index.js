const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.write("Hello Servercd")
    res.end('Hello, World!!');
});
server.listen(8082);