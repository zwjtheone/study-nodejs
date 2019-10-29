//fs.watch()比fs.watchFile()高效很多（why）

//fs.watchFile()
//实现原理：轮询。每隔一段时间检查文件是否发生变化。所以在不同平台上表现基本是一致的。

var fs = require('fs');

var options = {
  persistent: true,  // 默认就是true
  interval: 2000  // 多久检查一次
};

// curr, prev 是被监听文件的状态, fs.Stat实例
// 可以通过 fs.unwatch() 移除监听
fs.watchFile('./fileForWatch.txt', options, function(curr, prev){
  console.log('修改时间为: ' + curr.mtime);
});
