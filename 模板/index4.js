/*
  模板生成原理：

  语法分解
  处理表达式
  生成待执行的语句
  与数据一起执行，生成最终字符串
 */

// XSS漏洞
var compile = function(str) {
  var tpl = str.replace(/\n/g, '\\n')
    .replace(/<%=([\s\S]+?)%>/g, function (match, code) {
      // 转义
      return "' + escape(" + code + ") + '"; //encodeURIComponent encodeURI
    })
    .replace(/<%=([\s\S]+?)%>/g, function(match,code){
      // 正常输出
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
console.log(render(cp, {jaxson: '<script> alert("i am xss")</script>'}));
console.log(render(cp, {jaxson: 'asdaksj'}));
console.log(render(cp, {jaxson: 'askdnaskdnlk'}));
