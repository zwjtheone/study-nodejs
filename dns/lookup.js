// 当配置了本地Host时，是否会对查询结果产生影响。
// dns.lookup()：有影响。
// dns.resolve4()：没有影响。

var dns = require('dns');

dns.lookup('www.qq.com', function(err, address, family){
  if(err) throw err;
  console.log('例子A: ' + address);
});

var options = {all: true};

dns.lookup('www.qq.com', options, function(err, address, family){
  if(err) throw err;
  console.log('例子B: ' + JSON.stringify(address));
});

var dns = require('dns');

dns.resolve4('id.qq.com', function(err, address){
  if(err) throw err;
  console.log( JSON.stringify(address) );
});
