<template>
  <div>
    <mt-field placeholder="请输入用户名" v-model="uname" type="text"></mt-field>
    <hr>
    <mt-field placeholder="请输入密码" v-model="upass" type="password" @keyup.enter.native="getHome()"></mt-field>
    <hr>
    <mt-button type="primary" size="large" @click="getHome">登录</mt-button>
    <a href="javascript">免费注册</a>
  </div>
</template>
<script>
export default {
  data(){
    return {
      uname:'',
      upass:''
    }
  },
  methods:{
    getHome(){
      var uname=this.uname;
      var upass=this.upass;
      var unameRegexp=/^\w{3,10}$/;
      var upassRegexp=/^\w{3,8}$/;
      if(!unameRegexp.test(uname)){
        this.$toast("用户名格式不正确");
        return ;
      }
      if(!upassRegexp.test(upass)){
        this.$toast("密码格式不正确");
        return ;
      }
      this.axios.get("login",{
        params:{
          uname,
          upass
        }
      }).then(res=>{
        if(res.data.code){
        this.$router.push('/home')
        }else{
          this.$toast("用户名或密码错误");
          return ;
        }
      })
    }
  },
  watch:{

  }
}
</script>
<style scoped>

</style>