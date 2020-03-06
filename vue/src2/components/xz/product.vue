<template>
  <div class="container">
    <div class="good-item" v-for="(lis,i) of list" :key="i">
      <img src="../../assets/logo.png" alt="">
      <h5>{{lis.title}}</h5>
      <span>{{lis.price}}</span>
    </div>
    <mt-button type="primary" size="large" @click="loadMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[],
      pon:0,
      pageSize:4
    }
  },
  created(){
    this.loadMore()
  },
  methods:{
    loadMore(){
      ++this.pon;
      this.axios.get('product',{
        params:{
          pon:this.pon,
          pageSize:this.pageSize
        }
      }).then(result=>{
        var liss=this.list.concat(result.data.data);
        this.list=liss;
      })
    }
  }
}
</script>
<style scoped>
.container{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4px;
}
.container .good-item{
  width:49%;
  border:1px solid #ccc;
  margin:2px 0;
  display:flex;
  flex-direction: column;
  min-height: 247px;
  border-radius:5px;
}
</style>