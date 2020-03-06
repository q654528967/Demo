var price=prompt('input price');
var count=prompt('input a count');
var total=price*count;
if(total>=500){
	total*=0.8
}
console.log(total);
var money=600
if(money>=total){
	console.log('pay success');
}else{
	console.log('pay error');
}
