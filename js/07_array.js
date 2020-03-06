/*
var p=[];
p['编号']=1;
p['姓名']='雷平';
console.log(p);
*/
/*
var book=[
  {bid:1,name:'抗',作者:'kang',price:199}
];
console.log(book);
*/
/*
var emp=[];
emp['eid']=1;
emp['ename']='kate';
emp['sex']='男';
for(var key in emp)
{
	console.log(key,emp[key]);
}
*/
/*
var score=[10,30,38,49,40];
var sum=0;
for(var i=0;i<5;i++){
	sum+=score[i]
}
	console.log(sum);
*/
/*
function getAvg(arr){
for (var i=0,sum=0;i<arr.length ;i++ )
{
	sum+=arr[i];
}
return sum/arr.length;
};
console.log(getAvg([10,20,30]))
*/
/*
function getCount(cv,n){
	for (var i=0,sum=0;i<cv.length ;i++ )
	{
		if (cv[i]==n)
		{
  sum+=1;
		}
	}
	return sum;
}
console.log(getCount([89,91,100,44,56,100],100))
*/
/*
function getIndex(a,b){
	for (var i=0;i<a.length ;i++ )
	{
		if (a[i]==b)
		{
			return i;
		}
	}
  return -1;
}
console.log(getIndex([89,91,100,44,56,100],100));
*/
/*
function getMax(umble){
	for (var i=0,max=-Infinity;i<umble.length ;i++ )
	{
  if (max<umble[i])
  {
	  max=umble[i]
  }
	}
	return max;
}
console.log(getMax([1,2,3,4]));
*/
var a=['a','b','c','d','e','f','g']
/*var b=a.slice(1,3);
var c=a.slice(-3);
var d=b.concat(c);
console.log(d);
*/
var e=a.splice(3,2);
console.log(e);
var f=a.splice(-2,1,'m');
console.log(f);
var g=a.splice(2,0,'z');
console.log(g);
console.log(a);






