/*
function add(){
	for (var i=1,sum=0;i<=100 ;i++ )
	{
		sum+=i
	}
		console.log(sum)
}
		add();
		add();
		add();
		*/
/*
var getSum=function (n){
  for (var i=1,sum=0;i<=n ;i++ )
  {
	  if (i%2==0)
	  {
		  sum+=i
	  }
  }
  return sum;
}
*/
/*
console.log(app(3));
function app(n){
	while (n==3)
	{
		console.log(5);
	}
}
*/
function fun(a,b){
var num1=a();
var num2=b();
console.log(num1+num2)
}
fun(function(){
return 20000
},function(){
return 100000
});

