const express=require('express');
const pool=require('../pool.js');
var productRouter=express.Router();

productRouter.get('/list',function(req,res){
  var obj=req.query;
  var pno=obj.pno;
  var count=obj.count;
  if(!pno) pno=1;
  if(!count) count=5;
  pno=parseInt(pno);
  count=parseInt(count);
  start=(pno-1)*count;
  pool.query('SELECT * FROM xz_laptop LIMIT ?,?',[start,count],function(err,result){
  if(err) throw err;
  res.send(result);
  })
})
productRouter.get('/insert',function(req,res){
var obj=req.query;
	var num=400;
	for(var key in obj){
  num++
	  if(!obj[key]){
  res.send({code:num,msg:key+' required'});
	  return
  }}
pool.query('INSERT INTO xz_laptop SET ?',[obj],function(err,result){
  if(err) throw err;
  if(result.affectedRows>0) res.send({code:200,msg:'insert suc'})
  else{
  res.send({code:401,msg:'insert err'})
  }
  
})
  })
productRouter.get('/delete',function(req,res){
  if(!req.query.lid) res.send({code:401,msg:'lid required'});
  pool.query('DELETE FROM xz_laptop WHERE lid=?',[req.query.lid],function(err,result){
  if(err) throw err;
  if(result.affectedRows>0) res.send({code:200,msg:'delete suc'})
  else res.send({code:401,msg:'delete err'})
  })
})
productRouter.get('/detail',function(req,res){
  if(!req.query.lid) res.send({code:401,msg:'required lid'});
  pool.query('SELECT * FROM xz_laptop WHERE lid=?',[req.query.lid],function(err,result){
  if(err) throw err;
  res.send(result)
  })
})
productRouter.get('/update',function(req,res){
  var obj=req.query;
  var num=400;
  for(var key in obj){
  num++;
  if(!obj[key]) res.send({code:num,msg:key+' required'});
  }
  pool.query('UPDATE xz_laptop SET family_id=?,title=?,subtitle=?,price=? WHERE lid=?',[obj.family_id,obj.title,obj.subtitle,obj.price,obj.lid],function(err,result){
  if(err) throw err;
  if(result.affectedRows>0) res.send({code:200,msg:'update suc'})
  else res.send({code:301,msg:'update err'})
  })
})
module.exports=productRouter;