<template>
  <div class="container">
    <span class="leftSpan">学子商城</span>
     <div class="leftImg">
      <input type="text">
    </div>
    <div class="rightImg">
      <img src="../../../assets/logo.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  }
}
</script>
<style>
.container{
  display:flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  height:48px;
  text-align:center;
  box-sizing:border-box;
}
.leftSpan{
  width:10%;
}
.leftImg{
  width: 89%;
}
.rightImg{
  width:10%
}
img{
  height:48px;
}
.container>>>.mint-searchbar{
  padding:0px; 
}
</style>