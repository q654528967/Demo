<template>
  <div>
    <mt-header title="多个按钮">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
    <mt-button @click="handleClose">关闭</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
    <h3>
      <mt-cell-swipe
  title="标题文字"
  :right="[
    {
      content: 'Delete',
      style: { background: 'red', color: '#fff' },
      handler: () => this.$messagebox('delete')
    }
  ]"></mt-cell-swipe>
      container</h3>
    <div>
      <mt-button v-for="(n,i) of list" :key="i" @click.prevent="active='tab'+(i+1)">按钮tab{{i+1}}</mt-button>
    </div>
    <div>
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab1">
          <mt-cell title="container 1"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab2">
          <mt-cell title="container 2"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab3">
          <mt-cell title="container 3"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- <div>
      <mt-button @click.prevent="get1">面板1</mt-button>
      <mt-button @click.prevent="get2">面板2</mt-button>
      <mt-button @click.prevent="get3">面板3</mt-button>
    </div>
    <div class="page-tab-container">
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab1">
          <mt-cell v-for="(n,i) in 4" title="tab-container 1" :key="i"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab2">
          <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab3">
          <mt-cell v-for="n in 6" title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
        
    </div> -->
  </div>
</template>
<script>
export default {
  data(){
    return {
      active:"tab1",
      list:["美食","购物","休闲"],
      dx:-1
    }
  },
  methods:{
get1(){
  this.active="tab1"
},
get2(){
  this.active="tab2"
},
get3(){
  this.active="tab3"
}
  }
}
</script>