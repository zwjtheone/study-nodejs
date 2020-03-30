/*
  模板生成原理：

  语法分解
  处理表达式
  生成待执行的语句
  与数据一起执行，生成最终字符串
 */

// 模板预编译
// 解析与渲染分为两步
var compile = function(str) {
  var tpl = str.replace(/<%=([\s\S]+?)%>/g, function(match,code){
    return "' + obj."+ code +" + '";
  });

  tpl = "var tpl = '" + tpl + "'\nreturn tpl;"
  console.log(tpl);
  return new Function('obj', tpl);
}

var render = function(complied, data) {
  return complied(data);
}

var tpl = 'Hello <%=username%>.';
const cp = compile(tpl)
console.log(render(cp, {username: 'Jaxson'}));
console.log(render(cp, {username: 'asdaksj'}));
console.log(render(cp, {username: 'askdnaskdnlk'}));
