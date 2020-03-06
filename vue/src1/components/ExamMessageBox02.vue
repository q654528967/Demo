<template>
  <div>
    <h1>交互式提示框</h1>
    <button @click="openAlert">警告确认</button>
    <button @click="openConfirm">提示确认</button>
    <button @click="openPrompt">确认输入</button>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  methods:{
    openAlert(){
      this.$messagebox({
        title:"消息",
        message:"操作成功"
      })
    },
    openConfirm(){
      //console.log(2)
      this.$messagebox({
        title:"消息",
        message:"是否删除指定数据",
        showConfirmButton:true,
        showCancelButton:true
      }).then(action=>{
        console.log(action)
      })
    },
    openPrompt(){
     // console.log(3)
     this.$messagebox({
       title:"消息",
       message:"输入数据",
       showConfirmButton:true,
       showInput:true,
       inputType:"text",
       inputValue:"",
       inputPlaceholder:"请输入年龄"
     }).then(action=>{
       console.log(action)
     })
    }
  }
}
</script>