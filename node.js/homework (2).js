const express=require('express');

var server=express();
server.listen(8080);
server.get('/birthday',function(req,res){
	res.sendFile(__dirname+'/birth.html');
});
server.use('/birth',function(req,res,next){
	console.log(`出生于：${req.query['id'].substr(6,4)}年${req.query['id'].substr(10,2)}月${req.query['id'].substr(12,2)}日  性别：${req.query['id'].substr(-2,1)%2==0?'女':'男'}
	`);
	next();

})
server.get('/birth',function(req,res){
	res.send(`出生于：${req.query['id'].substr(6,4)}年${req.query['id'].substr(10,2)}月${req.query['id'].substr(12,2)}日  性别：${req.query['id'].substr(-2,1)%2==0?'女':'男'}
	`);
});
