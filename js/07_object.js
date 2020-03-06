/*
var emp+{ename:'tom',sex:'男',};
console.log(emp);
*/
/*
var dept={
	did:1,
	title:'加多宝',
	price:'4',
	shelfTime:'2018-7-5',
	isOnsale:'1'
	};
//查询商品属性
//console.log(dept.price);
dept.price=10;
console.log(dept.price);
*/
/*
var telPhone={
  eid:3,
  pp:'iphone',
  cc:6.1,
  'color':'yellw'
}
telPhone.cc=5.9;
telPhone.color='blue'
telPhone.nc='8g'
console.log(telPhone.nc);
*/
/*
var dept=new Object();
dept.did=34;
dept.dname='研发部';
console.log(dept);
*/
/*
var car=new Object();
car.xh=186;
car.pp='长安';
car.color='yellow';
car.length=4.3;
console.log(car);
*/
var sum=0
var product={
  price1:8000,
 price2:7000,
	  price3:6000,
	  price4:5000,
	  price5:4000
}
for(var key in product){
	console.log(product[key])
		sum+=product[key]
}
console.log(sum);
