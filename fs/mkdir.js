
var fs = require('fs');

fs.mkdir('./hello', function(err){
  if(err) throw err;
  console.log('目录创建成功');
});

//同步版本
fs.mkdirSync('./hello');
