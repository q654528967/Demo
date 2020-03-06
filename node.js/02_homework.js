const fs=require('fs');

fs.mkdir('date.txt',function(err){
	if(err) throw err;
	console.log('创建成功');
})


