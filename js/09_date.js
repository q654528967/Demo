/*
var d1=new Date('2019/10/1 10:30:50');
console.log(d1.getDay())
*/
/*
var d1=new Date();
var d2=new Date('2019/10/1');
var a=d1.getTime()
*/
/*
var d1=new Date('2019/3/15');
var d2=new Date(d1);
d2.setFullYear(d1.getFullYear()+3);
console.log('入职时间'+d1.toLocaleDateString());
console.log('到期时间'+d2.toLocaleDateString());
d3=new Date(d2);
d3.setMonth(d3.getMonth()-1);
if (d3.getDay()==0)
{
	d3.setDate(d3.getDate()-2);
}else if(d3.getDay()==6){ 
    d3.setDate(d3.getDate()-1);
}
console.log('续签时间'+d3.toLocaleDateString());
var d4=new Date(d3);
d4.setDate(d4.getDate()-7);
console.log('提醒时间'+d4.toLocaleDateString());
*/
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
var a=true;
console.log(a.toString());
console.log(a);