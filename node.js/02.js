/*
var querystring=require('querystring');
var baidustr='id=utf-8&tn=baidu&wd=手机'
var baiduobj=querystring.parse(baidustr);
console.log(baiduobj.wd);
*/
/*
var querystring=require('querystring');
var url=require('url');
var str='http://www.codeboy.com:8080/web/1902.html?sid=10&name=tom'
var ojb=url.parse(str);
console.log(ojb);
var cx=ojb['query'];
console.log(cx);
var obj2=querystring.parse(cx);
console.log(obj2);
*/
 const fs=require('fs');
 /*
 fs.readdir('02',function(err,files){
	 if(err) throw err;
	 console.log(files);
 });
 */
 /*
 var a=fs.readdirSync('02');
 console.log(a);
 console.log(3);
*/
var a=fs.appendFile('num.txt','hello\n',function(err){
	if(err) throw err;
	console.log('写入成功');
})
console.log(4);





