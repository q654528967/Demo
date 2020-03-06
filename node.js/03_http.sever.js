
/*
const http=require('http');
var server=http.createServer();
server.listen(8080); 
//server.on('request',function(req,res){
//  res.writeHead(302,{
//	  location:'http://www.baidu.com'
//  });
res.end();
});
*/
const http=require('http');
var server=http.createServer();
server.listen(8081);
server.on('request',function(req,res){
	if (req.url=='/login')
	{
			res.write('this is login page')
	}else if(req.url=='/member'){
	res.writeHead(200,{
			'content-type':'text/html'
		});
    res.write('<h2>welcome</h2>')
	}else if (req.url=='/')
	{
		res.writeHead(302,{
			location:'/login'
		})
	}else {
		res.writeHead(404,{	
		'content-type':'text/html'
		});
			res.write('<h3>404 not found</h3>')
	}
	res.end();
})
		





