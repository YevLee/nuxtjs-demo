<template>
    <div>
     欢迎你，{{userName}}
      <div @click="LoginOut"><button>退出登录</button></div>
    </div>
</template>
<script>
  import Cookies  from "js-cookie"
   export default {
   //middleware:"authLogin",
   data(){
    return{
      userName:""
    }
   },
   mounted(){
    if(Cookies.get("authLogin")==null){
      this.$router.push('/login')
    }
    if(Cookies.get("userName")!=null){
      this.userName=Cookies.get("userName")
    }
   },
  methods:{
     LoginOut(){
       this.$store.dispatch("LoginOut");
       if(Cookies.get("authLogin")!=1){
         this.$router.push("/");
       }
     }
  }
}
</script>
<style lang="scss" scoped>
</style>

