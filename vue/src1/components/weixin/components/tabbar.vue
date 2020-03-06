<template>
  <div>
    <mt-tab-container v-model="idname" class="page-tab-container">
      <mt-tab-container-item id="container1">
        <mt-cell v-for="n of 6" :key="n" title="微信"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="container2">
        <mt-cell v-for="n of 6" :key="n" title="联系人">不错哟</mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="container3">
        <mt-cell v-for="n of 6" :key="n" title="发现"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="container4">
        <mt-cell v-for="n of 6" :key="n" title="我"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="idname" fixed>
      <mt-tab-item id="container1">
        <img src="../../../assets/logo.png" slot="icon" alt="">
        微信
      </mt-tab-item>
      <mt-tab-item id="container2">
        <img src="../../../assets/logo.png" slot="icon" alt="">
        联系人
      </mt-tab-item>
      <mt-tab-item id="container3">
        <img src="../../../assets/logo.png" slot="icon" alt="">
        发现
      </mt-tab-item>
      <mt-tab-item id="container4">
        <img src="../../../assets/logo.png" slot="icon" alt="">
        我
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return {
      idname:"container1"
    }
  }
}
</script>
<style scoped>
  .is-fixed>.mint-tab-item.is-selected{
    background-color:transparent;
  }
  .mint-tab-container-item>.mint-cell{
    background-color: yellowgreen;
  }
 
</style>