var http = require("http");
var url = require("url");

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var r = url.parse(req.url, true);
    console.log("req url", req.url);
    console.log("url parse", r);

    res.write("Hello World!");
    res.end();
}).listen(80);
console.log('Server is running ....');