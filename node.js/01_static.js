const express=require('express');
var server=express();
server.listen(8080);
server.use(express.static('files'));




