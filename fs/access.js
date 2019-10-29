fs.access(path.resolve(__dirname, 'demo2.txt'), function(err){
  if(err) throw err;
  console.log('demo2.txt存在');
});

fs.access(path.resolve(__dirname, 'demo3.txt'), function(err){
  if(err) throw err;
  console.log('demo3.txt存在');
});
