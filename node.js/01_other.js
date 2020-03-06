const express=require('express');
const bodyParser=require('body-parser');
var server=express();
server.listen(8080);
server.use(express.static('public'));
server.use(bodyParser.urlencoded({
	extended:true
}));
server.post('/mylogin',function(req,res){
	console.log(req.body);
	res.send('登录成功');
});



