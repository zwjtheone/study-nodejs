/*
  模板生成原理：

  语法分解
  处理表达式
  生成待执行的语句
  与数据一起执行，生成最终字符串
 */

var render = function(str, data) {
  var tpl = str.replace(/<%=([\s\S]+?)%>/g, function(match,code){
    return "' + obj."+ code +" + '";
  });

  tpl = "var tpl = '" + tpl + "'\nreturn tpl;"
  console.log(tpl);
  var complied = new Function('obj', tpl);
  return complied(data);
}

var tpl = 'Hello <%=username%>.';
console.log(render(tpl, {username: 'Jaxson'}));
console.log(render(tpl, {username: 'kajsdlja'}));
console.log(render(tpl, {username: 'hqrhwhhqr'}));

