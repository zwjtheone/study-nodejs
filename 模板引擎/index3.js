/*
  模板生成原理：

  语法分解
  处理表达式
  生成待执行的语句
  与数据一起执行，生成最终字符串
 */

// with 应用
var compile = function(str) {
  var tpl = str.replace(/<%=([\s\S]+?)%>/g, function(match,code){
    return "' + " + code+ "+ '";
  });
  console.log(tpl)

  tpl = "tpl = '" + tpl + "'";
  tpl = 'var tpl = "";\nwith (obj) {' + tpl + '}\nreturn tpl;'
  console.log(tpl);
  return new Function('obj', tpl);
}

var render = function(complied, data) {
  return complied(data);
}

var tpl = 'Hello <%=jaxson%>.';
const cp = compile(tpl)
console.log(render(cp, {jaxson: 'Jaxson'}));
console.log(render(cp, {jaxson: 'asdaksj'}));
console.log(render(cp, {jaxson: 'askdnaskdnlk'}));
