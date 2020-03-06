


var add=function(a,b){
	console.log(a()+b());
}
add(()=>{
	return 2
	},()=>{
	return 3
		});