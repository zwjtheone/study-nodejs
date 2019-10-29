//可以用fs.chmod()，也可以用fs.fchmod()。两者的区别在于，前面传的是文件路径，后面传的的文件句柄。

//fs.chmod)、fs.fchmod()区别：传的是文件路径，还是文件句柄。
//fs.chmod()、fs.lchmod()区别：如果文件是软连接，那么fs.chmod()修改的是软连接指向的目标文件；fs.lchmod()修改的是软连接。

var fs = require('fs');

fs.chmod('./fileForChown.txt', '777', function(err){
  if(err) console.log(err);
  console.log('权限修改成功');
});

fs.chmodSync('./fileForChown.txt', '777');
