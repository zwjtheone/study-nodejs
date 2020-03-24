var http = require('http');

// http server 例子
var server = http.createServer(function (req, res) {
  var auth = req.headers.authorization || '';
  var parts = auth.split(' ');
  var method = parts[0];
  var encoded = parts[1];
  if (encoded) {
    console.log(req.headers.authorization)

    var decoded = new Buffer.from(encoded, 'base64').toString('utf-8').split(':');
    var user = decoded[0]
    var pass = decoded[1]
    console.log(user, '---', pass)

  }

  res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"')
  res.writeHead(401)
  res.end()

  // serverRes.end( '您访问的地址是：' + req.url );
});

server.listen(3000);
