var http = require("http");
var url = require("url");
var fs = require("fs");
var user = require("./user");

http.createServer(function(req, res) {
    var reqUrl = url.parse(req.url, true);
    var html = '';
    if (reqUrl.pathname.endsWith('.do')) {
        switch (reqUrl.pathname) {
            // case "/":
            //     html = "<h1>Index Page</h1>";
            //     html += "<a href='/useradd.html'>User Add</a><br>";
            //     html += "<a href='/userlist.html'>User List</a>";
            //     break;
            // case "/useradd.html":
            //     html = "<h1>User Add Form</h1>";
            //     html += "<form action='/useradd.do'>";
            //     html += "UserName <input type='text' name='uname'><br>";
            //     html += "UserEmail <input type='email' name='uemail'><br>";
            //     html += "<button onclick='go(this.form)'>Add</button>";
            //     html += "</form>";
            //     html += "<script>";
            //     html += 'console.log("Page Loaded...' + new Date() + '");';
            //     html += 'function go(f) {';
            //     html += ' alert("username "+ f.uname.value);';
            //     html += 'f.submit()';
            //     html += '}';
            //     html += '</script>';
            //     break;
            case "/useradd.do":
                user.add(req, res);
                // html = "<h1>Action called:useradd.do</h1>";
                // html += "User Name: " + reqUrl.query.uname + "<br>";
                // html += "User Email: " + reqUrl.query.uemail + "<br>";
                break;
                // case "/userlist.html":
                //     html = "<h1>User List</h1>";
                //     html += "<form action='/userlist.do'>";
                //     html += "<input type='search' name='key'>";
                //     html += "<input type='submit' value='search'>";
                //     html += "</form>";
                //     break;
            case "/userlist.do":
                user.list(req, res);
                // html = "<h1>Action called:userlist.do</h1>";
                // html += "Search Key:" + reqUrl.query.key;
                break;
            default:
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end("Action not found : " + reqUrl.pathname);
                break;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    } else {
        var filename = "." + reqUrl.pathname;
        if (filename == "./") filename = './index.html';
        fs.readFile(filename, function(err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end("file not found :" + reqUrl.pathname);
            }
            var ctype = "text/html";
            if (reqUrl.pathname.startsWith("/js/")) {
                ctype = 'text/javascript';
            }
            if (reqUrl.pathname.startsWith("/css/")) {
                ctype = "text/css";
            }
            res.writeHead(200, { "Content-Type": ctype });
            res.end(data);
        })
    }
}).listen(80);
console.log("server is running ...");