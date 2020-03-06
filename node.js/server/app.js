const express=require('express');
const userRouter=require('./routes/user.js');
const demoRouter=require('./routes/demo.js');
const productRouter=require('./routes/product.js')
const bodyParser=require('body-parser');
var server=express();
server.listen(8080);
server.use(express.static('public'));
server.use(express.static('ajaxdemo'));
server.use(bodyParser.urlencoded({
  extended:true
}));
server.use('/user',userRouter);
server.use('/product',productRouter);
server.use('/demo',demoRouter);

