const http=require('http');
http.get('http://www.tmooc.cn/course/100072.shtml',function(res){
	console.log(res.statusCode);
	res.on('data',function(buf){
    console.log(buf.toString());
	});
});
 