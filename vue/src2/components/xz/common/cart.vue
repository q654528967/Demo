<template>
  <div>
    <div>
      全选 <input type="checkbox" checked="true">
    </div>
    <div class="car-item" v-for="(cell,i) of item" :key="i">
      <input type="checkbox" v-model="cell.cb">
      <div class="item-img">
        <img src="../../../assets/logo.png" alt="">
        <div>
          <span>99.99</span>
          <span>1</span>
        </div>
      </div>
      <mt-button @click="deleteCart" :data-uid="cell.id">删除</mt-button>
    </div>
    <button @click="deleteAll">清空购物车</button>
    <button @click="delSelect">删除当前选中商品</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      item:'',
    }
  },
  methods:{
    delSelect(){
      console.log(this.item);
      var str=""
      for(var arr of this.item){
        if(arr.cb){
          str+=arr.id+","
        }
      }
      console.log(str)
    },
    getCart(){
      this.axios.get('cart').then(result=>{
        this.item=result.data.data;
        for(var cbb of this.item){
        cbb.cb=false;
        }
        console.log(result.data.data)
      })
    },
    deleteCart(e){
      var lid=e.target.dataset.uid;
      console.log(lid)
    },
    deleteAll(){
      console.log(this.it)
    }
    },
  created(){
    this.getCart()
  }
}
</script>
<style scoped>
.container{
  display:flex;
  flex-direction: column
}
  .car-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .item-img{
    display:flex;
    justify-content: space-between
  }
</style>