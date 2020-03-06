const mysql=require('mysql');
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:15
});
pool.query('SELECT * FROM emp',function(err,result){
	if(err) throw err;
	console.log(result)
});