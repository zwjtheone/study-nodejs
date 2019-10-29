var http = require('http');

// http server 例子
var server = http.createServer(function(req, serverRes){
  console.log( '1、客户端请求url：' + req.url );
  console.log( '2、http版本：' + req.httpVersion );
  console.log( '3、http请求方法：' + req.method );
  console.log( '4、http请求头部' + JSON.stringify(req.headers) );

  serverRes.end( '您访问的地址是：' + req.url );
});

server.listen(3000);

// http client 例子
var client = http.get('http://127.0.0.1:3000', function(clientRes){
  clientRes.pipe(process.stdout);
});
