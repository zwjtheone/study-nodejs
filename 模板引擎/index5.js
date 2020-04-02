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
      return "' + encodeURIComponent(" + code + ") + '"; //encodeURIComponent encodeURI
    })
    .replace(/<%=([\s\S]+?)%>/g, function(match,code){
      // 正常输出
      return "' + " + code+ "+ '";
    }).replace(/<%([\s\S]+?)%>/g, function (match, code) {
      // 可执行代码
      return "';\n" + code + "\ntpl += '";
    }).replace(/\'\n/g, '\'')
    .replace(/\n\'/gm, '\'');
  console.log(tpl)

  tpl = "tpl = '" + tpl + "'";
  // 转换空行
  tpl = tpl.replace(/''/g, '\'\\n\'');
  tpl = 'var tpl = "";\nwith (obj || {}) {\n' + tpl + '\n}\nreturn tpl;'
  console.log(tpl);
  return new Function('obj', 'encodeURIComponent', tpl);
}

var render = function(complied, data) {
  return complied(data);
}

var tpl = [
  '<% if (obj.user) { %>',
  '<h2><%= user.name %></h2>',
  '<% } else { %>',
  '<h2>匿名用户</h2>',
  '<% } %>'
].join('\n');
const cp = compile(tpl)
console.log(render(cp, {user: {name: 'jaxson'}}));
