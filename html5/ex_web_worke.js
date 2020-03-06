var start=new Date().getTime();
do{
  var end=new Date().getTime();
}while(end-start<5000);
onmessage=(e)=>{
  e.data.forEach(element => {
    console.log(element)
  });
}
postMessage("xoangdemei")
console.log("haolw")