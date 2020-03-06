const express=require('express')
const mysql=require('mysql');
const bodyParser=require('body-parser');
var pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'tedu',
  connectionLimit:16
})
var server=express();
server.listen(8080);
server.use(express.static('files'));
server.use(bodyParser.urlencoded({
  extended:true
}))
server.post('/emp',function(req,res){
	  pool.query('INSERT INTO emp SET ?',[req.body],function(err,result){
	  if(err) throw err;
	  if(result.affectedRows>0){
	   res.send('成功');
	  }
	  })
	 
  
})

