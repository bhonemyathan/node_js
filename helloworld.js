var http = require("http");
var dt = require("./mymodule");

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Now:" + dt.myDateTime() + "<br>");
    res.write("4 + 3 = " + dt.add(4, 3) + "<br>");
    res.write("100 - 89 = " + dt.minus(100, 89) + "<br>");
    res.write("77 * 54 = " + dt.multi(77, 54) + "<br>");
    res.write("9980 / 38 = " + dt.divi(9980, 38) + "<br>");
    res.end('hello world');
}).listen(8080);