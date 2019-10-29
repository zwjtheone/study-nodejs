var fs = require('fs');
var path = require('path');


// 同步写入
try{
  fs.writeFileSync(path.resolve(__dirname, 'demo1.txt'), 'hello world2', 'utf8');
  console.log('文件demo1写入成功');
}catch(err){
  throw err;
}

// 异步写入
fs.writeFile(path.resolve(__dirname, 'demo2.txt'), 'hello world', 'utf8', function(err){
  if(err) throw err;
  console.log('文件demo2写入成功');
});

// 通过文件流写入
var writeStream = fs.createWriteStream(path.resolve(__dirname, 'demo3.txt'), 'utf8');

writeStream
  .on('close', function(){  // 已经关闭，不会再有事件抛出
    console.log('已经关闭');
  });

writeStream.write('hello');
writeStream.write('world-stream');
writeStream.end('demo3');

