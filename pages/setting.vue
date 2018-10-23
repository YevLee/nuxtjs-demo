<template>
    <div>
     你好，{{name}}
      <div @click="LoginOut"><button>退出登录</button></div>
    </div>
</template>
<script>
   export default {
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
   
   },
  methods:{
     LoginOut(){
       this.$store.dispatch("LoginOut");
       if(this.$store.state.authLogin==2 ){
         this.$router.push("/");
       }
     }
  }
}
</script>
<style lang="scss" scoped>
</style>

