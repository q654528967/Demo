var telphone={
  pp:'iphone',
	  color:'back',
	  call:function(){
	  console.log('我在使用'+this.pp+'打电话' )
  },
	  dx:function(){
	  console.log(this.pp+'可以发短信')
	  },
	  vdio:function(){
		  console.log(this.pp+'可以看视频')
	  }		 
};
telphone.call();
telphone.dx();
telphone.vdio();





