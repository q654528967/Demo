<template>
  <div id="container">
    home.vue 全局入口
    <titlebar :leftTitle="leftTitle" :search="search" :add="add"></titlebar>
    <div style="margin-top:48px"></div>
    <tabbar></tabbar>
  </div>
</template>
<script>
import TitleBar from './components/TitleBar.vue'
import tabbar from './components/tabbar'
export default {
  data(){
    return {
      leftTitle:11,
    }
  },
  methods:{
    search(){
      console.log("search")
    },
    add(){
      console.log("add")
    }
  },
  components:{
    "titlebar":TitleBar,
    tabbar
  }
}
</script>