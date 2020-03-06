<template>
  <div class="exam01">
    <h1>zujian</h1>
    <h1>简短提示消息</h1>
    <button @click="openToast">显示提示消息</button>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  methods:{
    openToast(){
      //console.log(123)
      this.$toast({
        message:"操作成功",
        position:"top",
        duration:1500,
        className:"myToast",
        iconClass:"iconfont icon-yuzhoufeichuan"
      })
    }
  }
}
</script>
<style scoped>
.myToast{
  color:red;
  background:green;
  font-size: 50px
}
</style>