var num=0;
onmessage=function(e){
  console.log(e.data);
  if(e.data!=''){
    for(let i=1;i<=e.data;i++){
      num+=i
    }
  }
  postMessage(num);
};
