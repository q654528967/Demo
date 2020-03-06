/*
const express=require('express');
const querystring=require('querystring')
var server=express();
server.listen(8080);
*/
/*
server.get('/index',function(req,res){
  res.send('<h1>这是首页<h1>')
});
server.get('/member',function(req,res){
	res.sendFile(__dirname+'/member.html')
});
	server.get('/',function(req,res){
		res.redirect('/index')
	});
		server.post('/register',function(req,res){
			res.send('注册成功')
		});
*/

/*
server.get('/login',function(req,res){
	res.sendFile(__dirname+'/login.html')
		console.log(req.query)
});
	server.post('/mylogin',function(req,res){
		res.send('登录成功');
		console.log(req.query)
	});
*/
/*
server.get('/reg',function(req,res){
	res.sendFile(__dirname+'/reg.html')
});
	server.get('/myreg',function(req,res){
		res.send('注册成功')
	});
*/
/*
server.get('/shopping/:price/:pname',function(req,res){
	res.send(`
	商品名称：${req.params.price}
	商品价格：${req.params.pname}
	`);
});
*/
const express=require('express');
const productRouter=require('./product.js');
var server=express();
server.listen(8080);
server.use('/product',productRouter);

