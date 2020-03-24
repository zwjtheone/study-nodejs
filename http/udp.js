var dgram = require('dgram');

var server = dgram.createSocket('udp4');

server.on('message', function (message, rinfo) {
  console.log(message.toString(), rinfo)
})

server.on('listening', function () {
  var address = server.address();
  console.log(address.address, address.port)
})

server.bind('41234')
