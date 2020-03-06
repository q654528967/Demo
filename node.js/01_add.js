const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:15
});
var server=express();
server.listen(8080);
server.use(express.static('public'));
server.use(bodyParser.urlencoded({
	extended:true
}));
server.post('/add',function(req,res){
	connection.q
	res.send('gg')
});