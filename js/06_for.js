/*
for (var i=1;i<=10 ;i++ )
{
	console.log(i);
}
*/
/*
for (var i=1,a=0;i<=100;i++)
{
	if (i%7==0)
		a+=i
}
console.log(a);
*/
/*
for (var i=72;i>=39;i--)
{
	if(i%2==1)
		console.log(i)
}
*/
/*
for (var i=1,a=1;i<=20;i++)
{
	if(i%3==0)
		a*=i
}
	console.log(a);
	*/
/*
for (var year=2000;year<=2100;year++)
{
	if(year%4==0 && year%100!=0 || year%400==0)
    console.log(year);
}
*/
/*
for (var a=10,b=1,c=0;a>=2;a-=2,b+=2)
{
  c+=a/b;
}
console.log(c);
*/
/*
for (var i=1,sum=0;i<=100;i++)
{
  if(i%2==1)
	  continue;
	  sum+=i;
}
console.log(sum);
*/
/*
for (var i=1;i<=100;i++)
{
	if (i%3==0 || i%4==0)
	{
		continue;
	}
	console.log(i);
}
*/
/*
for (var year=2000,i=0;year<=2100;year++)
{
    if (year%4==0 && year%100!=0 || year%400==0)
    {
		console.log(year)
		i+=1
    }if (i==10)
    {
			break;
    }
}
console.log(i);
*/
/*
for (var a=1;a<=5;a++)
{
	for (var sum='',i=1;i<=5;i++)
	sum+='*'
	console.log(sum);		
}
*/
/*
for (var sum='',i=1;i<=5;i++)
{
sum+='*'
console.log(sum)
}
*/
/*
for (var i=1;i<=9;i++)
{
	for(var a=1,b='';a<=i;a++){
  b+=i+'*'+a+'='+(i*a)+' ';
	}
	console.log(b);
}
*/
for(var a=1,b='',i=1;a<=9;a++,i++){
  b+=i+'*'+a+'='+(i*a)+' ';
	console.log(b);
}