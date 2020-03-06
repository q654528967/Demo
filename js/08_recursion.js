/*
var i=0
function fun(){
	alert('let go')
		i++
		if (i==3)
		{
		return
		}
		fun();
}
fun();
*/
function jc(n){
	if (n==1)
	{
		return 1
	}
	return n*jc(n-1)
}
	var a=jc(5);
	console.log(a);