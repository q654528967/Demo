/*
function add(num1,num2){
  console.log(num1+num2)
}
add(2,5);
add(34,89);
add(3,9);
*/
/*
function getSum(i){
  for (var num=1,sum=0;num<=i ;num++ )
  {
	  sum+=num
		  }
  console.log(sum);
  }
  getSum(3);
  */
/*
function getRun(year1,year2){
	for (var i=year1,count=0;i<=year2 ;i++ )
	{
		if (i%4==0 && i%100!=0 ||i%400==0)
		{
  count+=1
		}
	}
	  console.log(count);
}
getRun(2000,2100);
getRun(1949,2019);
*/
/*
function add(a,b){
	//console.log(a+b);
  return a+b;
}
var c=add(1,2);
var c1=add(2,3);
console.log(c+c1);
*/
/*
function getMax(a,b){
  if (a>b)
  {
	  return a;
}else{
	return b
}
}
*/
/*
function getMax(a,b,c){
	if(a>b && a>c){
		return a;
	}else if(b>c && b>a){
			return b;
		}else if(c>a && c>b){
				return c;
			}
}
var i=getMax(10,9,3);
console.log(i);下面的用三目运算
*/
/*
function getMax(a,b,c){

}
*/
/*
function getStatus(i){
  if (i==1)
  {
	  return '等待付款';
  }else if (i==2)
  {
		  return '等待发货';
  }else if (i==3)
  {
	  return '运输中';
  }else if (i==4)
  {
	  return '已签收';
  }else if (i==5)
  {
	  return '已取消';
  }else{
	  return '输入错误'
  }
}
var a=getStatus(4);
console.log(a);
*/
/*
function isRun(year){
	if(year%4==0 && year%100!=0 || year%400==0){
		return true;
	}
	return false;
}
	function getDays(year){
  if (isRun(year))
  {
	  return 366;
  }
  return 365;
	}
		var i=getDays(2400)
	console.log(i);
	*/
	/*
	function getJc(n){
		for (var b=1,a=n;a>=1;a--)
		{
			b*=a;
		}
			return b;
	}
	function getSum(n){
		for (var sum=0,i=1;i<=n;i++)
		{
			sum+=getJc(i);
		}
			return sum;
	}
var c=getSum(2);
console.log(c);
*/
function getJc(n){
		for (var jc=1;n>=1;n--)
		{
			jc*=n;
		}
			return jc;
	}
	function getSum(n){
		for (var sum=0;n>=1;n--)
		{
			sum+=getJc(n);
		}
			return sum;
	}
var c=getSum(5);
console.log(c);
