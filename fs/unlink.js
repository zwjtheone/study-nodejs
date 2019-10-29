var fs = require('fs');

fs.unlink('./fileForUnlink.txt', function(err){
  if(err) throw err;
  console.log('文件删除成功');
});


fs.unlinkSync('./fileForUnlink.txt');
