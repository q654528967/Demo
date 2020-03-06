<template>
  <div class="page-head">
    <h4>微信({{leftTitle}})</h4>
    <div class="imgposition">
      <div>
        <a href="javascript:;" @click="search"><img src="../../../assets/logo.png" alt=""></a>
      </div>
      <div>
        <a href="javascript:;" @click="add"><img src="../../../assets/logo.png" alt=""></a>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return {

    }
  },
  props:[
    "leftTitle",
    "search",
    "add"
  ]
}
</script>
<style scoped>
  .page-head{
    display:flex;
    position: fixed;
    z-index:999;
    width:100%;
    justify-content: space-between;
    align-items: center;
    background-color:#3e3a39;
    padding-left:7px;
    padding-right: 7px;
    height: 48px;
    color:#fff;
    font-size:18px; 
  }
  img{
    height: 48px;
  }
  .imgposition{
    display: flex;
  }
</style>>