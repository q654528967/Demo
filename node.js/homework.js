const fs=require('fs');
var a=fs.writeFileSync('data.txt','[{\nid:1,\nname:\'tom\',\nage:18\n},')
fs.appendFile('data.txt','[\nid:2,\nname:\'kate\',\nage:20\n}]',function(err){
	console.log('写入成功');
})




