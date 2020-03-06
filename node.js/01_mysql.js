const mysql=require('mysql');
var connection=mysql.createConnection({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'tedu'
});
connection.connect();
/*
connection.query('SELECT * FROM emp',function(err,result){
	if (err) throw err;
    console.log(result);
});
*/
/*
connection.query('DELETE FROM emp WHERE eid=195',function(err,result){
	if(err) throw err;
	//console.log(result);
	if(connection.affectedRows>0){
		console.log('删除成功')
	}else{
			console.log('删除失败')
		}
});
*/
/*
connection.query('UPDATE emp SET salary=9200,sex=0 WHERE eid=155',function(err,result){
	if(err) throw err;
	//console.log(result);
	if(connection.affectedRows>0){
		console.log('修改成功')
	}else{
			console.log('修改失败')
		}
});
*/
connection.query(`INSERT INTO emp VALUES(196,'表v',0,'1995-4-1',4587541,20)`,function(err,result){
	if(err) throw err;
	console.log(result);
	
});
connection.end();
