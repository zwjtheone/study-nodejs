/**
 * 服务入口
 */
var http = require('http');
var koaStatic = require('koa-static');
var path = require('path');
var koaBody = require('koa-body');
var fs = require('fs/read');
var Koa = require('koa2');
const Router = require('koa-router')
let router  = new Router()

var app = new Koa();
var port = process.env.PORT || '8100';

var uploadHost= `http://localhost:${port}/uploads/`;

//允许跨域
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', ctx.headers.origin);
  ctx.set("Access-Control-Max-Age", 864000);
  // 设置所允许的HTTP请求方法
  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  // 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
  ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");

  await next();
})


app.use(koaBody({
  formidable: {
    //设置文件的默认保存目录，不设置则保存在系统临时目录下
    uploadDir: path.resolve(__dirname)
  },
  multipart: true // 支持文件上传
}));

app.use(koaStatic(
  path.resolve(__dirname)
));


router.post('/upload', async (ctx) => {
  console.log(ctx.request.files);
  var files = ctx.request.files.f1;//得到上传文件的数组
  var result=[];
  if(!Array.isArray(files)){
    files=[files];
  }
  files && files.forEach(item=>{
    var path = item.path.replace(/\\/g, '/');
    var fname = item.name;//原文件名称
    var nextPath = path + fname;
    if (item.size > 0 && path) {
      //得到扩展名
      var extArr = fname.split('.');
      var ext = extArr[extArr.length - 1];
      var nextPath = path + '.' + ext;
      //重命名文件
      fs.renameSync(path, nextPath);

      result.push(uploadHost+ nextPath.slice(nextPath.lastIndexOf('/') + 1));
    }
  });


  ctx.body = `{
        "fileUrl":${JSON.stringify(result)}
    }`;
})



app.use(router.routes()).use(router.allowedMethods())
/**
 * Create HTTP server.
 */
var server = http.createServer(app.callback());
server.listen(port);
console.log('demo2 server start ......   ');
