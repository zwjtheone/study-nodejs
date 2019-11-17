let str = '深入浅出buffer'
let buf = new Buffer(str, 'utf-8');
console.log(buf)

// buffer有length属性

let buf1 = new Buffer(100)
console.log(buf1.length)

// node buffer 内存分配 node 采用slab分配机制
// full partial empty
// 默认为8kb的poll

let poll;
function allocPool() {
  poll = new SlowBuffer(Buffer.poolSize);
  poll.used = 0;
}

// 字符串转buffer
new Buffer(str, 'utf-8')

buf.write()

// Buffer 转字符串

buf.toString([encoding], [start], [end])

// 判断编码是否支持转换

Buffer.isEncoding()

// Buffer的拼接

let fs = require('fs')
let rs = fs.createReadStream('test.md', {highWaterMark:11})
let data = '';

rs.on('data', function(chunk) {
  // data.toString() + chunk.toString()
  data += chunk;// 会有bug，汉字截断问题
})
rs.on('end', function(){
  console.log(data)
})

// 正确拼接Buffer

let chunk = [];
let size = 0;
res.on('data', function(chunk){
  chunk.push(chunk)
  size += chunk.length
})
res.on('end', function(){
  let buf = Buffer.concat(chunk, size)
  let str = iconv.decode(buf, 'utf8');
  console.log(str);
})

// 性能优化

// 网络传输最终都会转化为buffer传输

let http = require('http');
let helloWorld = '';

for (let i = 0; i < 1024 * 10; i++) {
  helloWorld += 'a'
}

// 转换 性能提升一倍
helloWorld = new Buffer(helloWorld)

http.createServer(function(req, res){
  res.writeHead(200)
  res.end(helloWorld)
})

// 文件读取， highWaterMark 大小与读取速度的关系： 该值越大，读取速度越快
