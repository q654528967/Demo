var a=['a','b','c','d','e','f','g','h','i','j','k'],c=[];
for (var i=0;i<4 ;i++ )
{
	var b=Math.floor(Math.random()*a.length);
  c.push(a[b]);
}
console.log(c);