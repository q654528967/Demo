const express=require('express');
var server=express();
server.listen(8080);
server.get('/list',function(req,res){
  console.log('收到')
})



