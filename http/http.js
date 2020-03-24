var http = require('http');

// http server 例子
var server = http.createServer(function(req, serverRes){
  console.log('1、客户端请求url：' + req.url);
  console.log('2、http版本：' + req.httpVersion);
  console.log('3、http请求方法：' + req.method);
  console.log('4、http请求头部' + JSON.stringify(req.headers));

  serverRes.end('您访问的地址是：' + req.url);
});

server.listen(3000);

// ➜  ~ curl -v http://127.0.0.1:3000
// 第一部分 tcp三次握手
//   *   Trying 127.0.0.1...
// * TCP_NODELAY set
// * Connected to 127.0.0.1 (127.0.0.1) port 3000 (#0)

// 第二部分 完成握手，客户端向服务器发送请求报文
// > GET / HTTP/1.1
// > Host: 127.0.0.1:3000
// > User-Agent: curl/7.64.1
// > Accept: */*
// >

// 第三部分 响应内容，响应头和响应体
// < HTTP/1.1 200 OK
// < Date: Mon, 23 Mar 2020 07:55:39 GMT
// < Connection: keep-alive
// < Content-Length: 25
// <
// * Connection #0 to host 127.0.0.1 left intact
// 您访问的地址是：/* Closing connection 0

// http client 例子
// var client = http.get('http://127.0.0.1:3000', function(clientRes){
//   clientRes.pipe(process.stdout);
// });
