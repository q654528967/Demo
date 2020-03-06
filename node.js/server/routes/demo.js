const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
router.get('/ajaxdemo',function(req,res){
	res.send('第一个ajax程序');
})
router.get('/login',(req,res)=>{
	var uname=req.query.uname
	var upwd=req.query.upwd
	if(!uname){
		res.send('yhm')
		return
	}
	if(!upwd){
		res.send('mm')
		return
	}
	var sql='select * from xz_user where uname=? and upwd=?'
	pool.query(sql,[uname,upwd],function(err,result){
		if(err) throw err;
			if(result.length>0){
				res.send('ok')
			}else{
				res.send('err')
			}
		})
})
module.exports=router;
