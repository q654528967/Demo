const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
//注册路由
router.post('/reg',function(req,res){
  console.log(req.body);
  if(!req.body.uname){
  res.send({
  code:401,
  msg:'uname required'
  })
	  return;
  }
  if(!req.body.upwd){
  res.send({
  code:402,
  msg:'upwd required'
  })
	return  
  }
  if(!req.body.email){
  res.send({
  code:403,
  msg:'email required'
  })
	return  
  }
  if(!req.body.phone){
  res.send({
  code:404,
  msg:'phone required'
  })
	return  
  }
  pool.query('INSERT INTO xz_user SET ?',[req.body],function(err,result){
    if(err) throw err;
	if(result.affectedRows>0){
	res.send({code:200,msg:'register suc'})
	}
  })
})
//登录路由
router.post('/login',function(req,res){
  if(!req.body.uname){
  res.send({
  code:401,
  msg:'uname required'
  })
	return  
  }
  if(!req.body.upwd){
  res.send({
  code:402,
  msg:'upwd required'
  })
	return  
  }
  pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[req.body.uname,req.body.upwd],function(err,result){
	 if(err) throw err;
  if(result.length>0){
	  res.send({code:200,msg:'login suc'})
  }else{
	  res.send({
	  code:301,msg:'login err'
	  })
	  }
 })
 })
//删除路由
router.post('/delete',function(req,res){
 if(!req.body.uid){
  res.send({
  code:401,msg:'uid required'
  })
 }
 pool.query('DELETE FROM xz_user WHERE uid=?',[req.body.uid],function(err,result){
   if(err) throw err;
   if(result.affectedRows>0){
     res.send({code:200,msg:'delete suc'})
   }else{
	 res.send({code:401,msg:'uid err'})
	 }
 } 
 )
 })
//详情路由
router.get('/detail',function(req,res){
   if(!req.query.uid){
   res.send({code:401,msg:'uid required'})
   }
   pool.query('SELECT * FROM xz_user WHERE uid=?',[req.query.uid],function(err,result){
     if(err) throw err;
	  res.send(result)
   })
 })
//修改路由
router.get('/update',function(req,res){
var obj=req.query;
	var num=400;
	for(var key in obj){
  num++
	  if(!obj[key]){
  res.send({code:num,msg:key+' required'});
	  return
  }}
	  pool.query('UPDATE xz_user SET email=?,phone=?,user_name=?,gender=? WHERE uid=?',[obj.email,obj.phone,obj.user_name,obj.gender,obj.uid],function(err,result){
	  if(err) throw err;
	  if(result.affectedRows>0){
	  res.send({code:200,msg:'update suc'})
	  }else{
	  res.send({code:301,msg:'update err'})
	  }})
})
router.get('/list',function(req,res){
	  var pno=req.query.pno
	  var count=req.query.count
	if(!pno) pno=1;
	if(!count) count=2;
	pno=parseInt(pno);
	count=parseInt(count);
	var start=(pno-1)*count;
	pool.query('SELECT * FROM xz_user LIMIT ?,?',[start,count],function(err,result){
	if (err) throw err;
	res.send(result)
	})
})
module.exports=router;
