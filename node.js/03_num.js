const fs=require('fs');
if (!fs.existsSync('num.txt'))
{
  fs.writeFileSync('num.txt',0);
}
var num=fs.readFileSync('num.txt');
num++;
console.log(num);
fs.writeFileSync('num.txt',num);