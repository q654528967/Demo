<template>
  <div class="container" style="position:relative">
    <h1>登录后继续访问</h1>
    <div class="page-title">
      <mt-field :placeholder="accountPlaceholder" v-model="uname"></mt-field>
      <mt-field placeholder="请输入密码" v-show="isUserAccount" v-model="password"></mt-field>
      <mt-field placeholder="校检码" v-show="isUserAccount==false" v-model="password"><span>|</span><a href="javascript:;">获取验证码</a></mt-field>
    </div>
    <a href="javascript:;" @click="changelogin">{{accountMethod}}</a><a href="javascript:;" style="position:absolute;right:0px;text-align:right;color:#000">免费注册</a><br>
    <button @click="getLogin">登录</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      isUserAccount:true,
      accountPlaceholder:"用户/邮箱/会员名",
      accountMethod:"短信验证码登录",
      uname:"",
      password:""
    }
  },
  methods:{
    getLogin(){
      if(!this.uname){
        this.$messagebox("","请输入用户名")
      }else if(!this.password){
        this.$messagebox("","请输入密码")
      }
    },
    changelogin(){
      if(this.accountMethod=="短信验证登录"){
      this.accountMethod="账户密码登录";
      this.accountPlaceholder="请输入手机号"
      }else if(this.accountMethod="账户密码登录"){
        this.accountMethod="短信验证登录";
        this.accountPlaceholder="用户/邮箱/会员名"
      }
      this.isUserAccount=!this.isUserAccount
    }
  }
}
</script>
<style scoped>
  .my_border{
    border:0px;
    border-bottom:1px solid #666;
  }
</style>