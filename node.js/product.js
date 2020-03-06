const express=require('express');
const router=express.Router();
router.get('/list',function(req,res){
	res.send('商品下路由');
});
router.get('/delete',function(req,res){
	res.send('删除');
});
module.exports=router;

