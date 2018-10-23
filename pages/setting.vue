<template>
    <div>
<<<<<<< HEAD
     你好，{{name}}
=======
     欢迎你，{{userName}}
>>>>>>> 9def56d564247ca02fb479c34404b6441f8f94ca
      <div @click="LoginOut"><button>退出登录</button></div>
    </div>
</template>
<script>
  import Cookies  from "js-cookie"
   export default {
<<<<<<< HEAD
    data(){
      return{
        name:""
      }
    },
   //middleware:"authLogin",
   mounted(){
    if(this.$store.state.authLogin==null || this.$store.state.authLogin==2){
      this.$router.push('/login')
    }

       this.name=this.$store.state.userName;
   
=======
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
>>>>>>> 9def56d564247ca02fb479c34404b6441f8f94ca
   },
  methods:{
     LoginOut(){
       this.$store.dispatch("LoginOut");
<<<<<<< HEAD
       if(this.$store.state.authLogin==2 ){
=======
       if(Cookies.get("authLogin")!=1){
>>>>>>> 9def56d564247ca02fb479c34404b6441f8f94ca
         this.$router.push("/");
       }
     }
  }
}
</script>
<style lang="scss" scoped>
</style>

