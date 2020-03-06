<template>
  <div>
    <h1>开关组件</h1>
    <mt-switch v-model="vall">开关</mt-switch>
    <button @click="getVall">获取值</button>
    <h2>单选组件</h2>
    <mt-radio v-model="val2" :options="['选项a','选项b','选项c']"></mt-radio>
    <button @click="getVal2">选中了一个</button>
    <h2>多选组件</h2>
    <mt-checklist title="复选框表" v-model="val3" :options="['选项a','选项b','选项c']"></mt-checklist>
    <button @click="getval3">查询数值</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      vall:true,
      val2:"",
      val3:[]
    }
  },
  methods:{
    getval3(){
      console.log(this.val3)
    },
    getVal2(){
      console.log(this.val2)
    },
    getVall(){
      console.log(this.vall)
    }
  }
}
</script>
<style scoped>

</style>