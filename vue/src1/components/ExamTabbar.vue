<template>
  <div>
    <h3>底部选项卡</h3>
    <!-- 面板 -->
    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="外卖">
        <mt-cell v-for="n in 6" :key="n" title="外卖"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="订餐">
        <mt-cell v-for="n in 7" :key="n" title="订餐"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="订单">
        <mt-cell v-for="n in 8" :key="n" title="订单"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <mt-cell v-for="n in 9" :key="n" title="我的"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 底部选项卡 -->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/logo.png" alt="">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订餐">
        <img slot="icon" src="../assets/logo.png" alt="">
        订餐
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../assets/logo.png" alt="">
        订单
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/logo.png" alt="">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selected:"外卖"
    }
  }
}
</script>