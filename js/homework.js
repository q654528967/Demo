/*
var a=2000;
var year=console.log(a%4);
year=0 || console.log('闰年');
*/
/*
var score=110;
var score=parseInt(score/10);
switch(score){
	case 10:
		case 9:
		console.log('优秀');
	break;
	case 8:
		console.log('良好');
	break;
	case 7:
		console.log('中等');
	break;
	case 6:
		console.log('及格');
	default:
		console.log('不及格');
}
*/
/*
var i=11
while(i<21){
	console.log(i);
	i++
}
*/
/*
var i=1
while (i<101)
{
	console.log(i);
	i+=2
}
*/
/*
var i=20;
while (i<31)
{
	console.log(i);
	i+=2;
}
*/
/*
var i=20;
while(i<31){
	if(i%2==0){
		console.log(i)
	}
		i++;
};
*/
/*
var i=1;
var sum=1
while(i<=20){
	if(i%2==1){
		sum*=i
	}
		i++;
}
console.log(sum);
*/
/*
for (var a=9;a>=1 ;a-- )
{
	for (var b='',c=a;c>=1;c-- )
	{
		b+=a+'*'+c+'='+(a*c)+' ';
	}
	console.log(b);
}
for (var i=1,sum=0;i<=100;i++)
{
	sum+=i
		if(sum>4000)
		break;
}
console.log(sum);
*/
/*
function js(){
	var i=10+20
		console.log(i);
}
js();
js() ;
js();
*/
/*
function fun(n){
if(n==1){
	return 1;
}else if (n==2)
{
	return 1;
}else{
	return fun(n-1)+fun(n-2);
}
}
var a=fun(9);
console.log(a);
*/
/*
var y={
  r:5,
  pi:3.14,
  getLenght:function(){
	  console.log('周长是'+this.r*this.pi*2);
  },
  getArea:function(){
		  console.log('面积是'+2*this.pi*this.r*this.r)
			  }
}
y.getArea();
y.getLenght();
*/
/*
var add=['a','b','c','d','e','f','g','h'];
var sum=[];
for (var i=0;i<add.length ;i++ )
{
  sum[i]=add[add.length-i-1]
}
console.log(sum)
*/
/*
var number=[1,2,3,4533,55335,334545,22,43434455,2,44353,243,4];
for (var n=number.length;n>0 ;n-- )
{
for (var i=0,add=0;i<number.length-1 ;i++ )
{
	if (number[i]>number[i+1])
	{
		add=number[i+1];
		number[i+1]=number[i];
        number[i]=add
	}
}
}
console.log(number);
*/
/*
var str='how are you JBK';
var n=str.split(' ');
for (var i=0;i<n.length;i++ )
{
  a=n[i].slice(0,1).toUpperCase()
  b=n[i].slice(1).toLowerCase()
  n[i]=a+b
}
console.log(n.join(' '));
*/
/*
var arr=['a','b','c','d','e','f','g','h','i']
var newArr=[];
for (var n=0;n<4 ;n++ )
{ 
  var i=Math.floor(Math.random()*arr.length);
  var a=arr[i];
  newArr.push(a)
  arr.splice(i,1)
}
  newArr=newArr.join(' ');
  console.log(newArr);
*/
//计算2019-5-1 9：30：00 距离2019-12-25日相差的天，小时，秒钟。
var d1=new Date('2019/5/1 9:30:00');
var d2=new Date('2019/12/25');
var date=Math.abs(d1-d2)/1000;
console.log(date);
var day=date/(24*60*60);               
day=Math.floor(day)
console.log(day);
var hour=date%(24*60*60)/(60*60);
hour=Math.floor(hour);
console.log(hour);
var minute=date%3600;
minute=minute/60
minnute=Math.floor(minute);
console.log(minute);
var second=date%60
console.log('两个时间相差'+day+'天'+hour+'时'+minute+'分'+second+'秒')


