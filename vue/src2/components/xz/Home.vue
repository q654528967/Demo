<template>
  <div>
   <!-- <title-Bar></title-Bar> -->
    <mt-tab-container v-model="sel">
  <mt-tab-container-item id="product">
    <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="find">
    <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="cart">
    <cart></cart>
  </mt-tab-container-item>
  <mt-tab-container-item id="my">
  </mt-tab-container-item>
</mt-tab-container>
    <mt-tabbar fixed v-model=sel>
      <mt-tab-item id="product">商品</mt-tab-item>
      <mt-tab-item id="find">发现</mt-tab-item>
      <mt-tab-item id="cart">购物车</mt-tab-item>
      <mt-tab-item id="my">我的</mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import TitleBar from './common/TitleBar.vue'
import product from './product'
import cart from './common/cart'
export default {
  data(){
    return {
      sel:"product",
    }
  },
  components:{TitleBar,product,cart}
}
</script>
<style scoped>

</style>