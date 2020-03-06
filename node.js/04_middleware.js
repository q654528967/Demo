const express=require('express');
var server=express();
server.listen(8080);
server.use('/reg',function(req,res,next){
	console.log('拦截成功');
	next();
});
server.get('/reg',function(req,res,next){
	res.send('zccg');
	next();
});
server.get('/login',function(req,res){
	res.send('ddd');
})
server.use('/reg',function(req,res){
	console.log('写入了日志');
});
var num=0
server.use('/view',function(req,res,next){
  num++;
  next();
});
server.get('/view',function(req,res){
	res.send(num.toString());
});
