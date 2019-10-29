var fs = require('fs/read');
var path = require('path');
var data;

// 异步
fs.readFile(path.resolve(__dirname, 'demo'), 'utf8', function(err, data){
  if(err){
    return console.error('读取文件出错: ' + err.message);
  }
  console.log('文件内容2: ' + data);
});

// 同步
try {
  data = fs.readFileSync(path.resolve(__dirname, 'demo'), 'utf8');
  console.log('文件内容: ' + data);
} catch (err) {
  console.error('读取文件出错: ' + err.message);
}

// 文件流
var fs = require('fs/read');
var readStream = fs.createReadStream(path.resolve(__dirname, 'demo'), 'utf8');

readStream
  .on('data', function(chunk) {
    console.log('读取数据: ' + chunk);
  })
  .on('error', function(err){
    console.log('出错: ' + err.message);
  })
  .on('end', function(){  // 没有数据了
    console.log('没有数据了');
  })
  .on('close', function(){  // 已经关闭，不会再有事件抛出
    console.log('已经关闭');
  });
