var http = require('http');
var mime = require('mime');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  fs.stat('../http.js', function (err, stat) {
    var stream = fs.createReadStream('../http.js')
    res.setHeader('Content-Type', mime.getType('../http.js'));
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Disposition', 'attachment; filename="filename.js"')
    res.writeHead(200)
    stream.pipe(res);
  })
});

// 响应json
res.json = function (json) {
  res.setHeader('Content-Type', 'application/json');
}
// 响应跳转
res.redirect = function (url) {
  res.setHeader('Location', url)
}

// 响应文本
res.redirect = function (url) {
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Content-Type', 'text/plain')
}

server.listen(3000);
