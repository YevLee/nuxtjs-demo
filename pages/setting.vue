<template>
    <div>
      设置页面
      <div @click="LoginOut"><button>退出登录</button></div>
    </div>
</template>
<script>
   export default {
   middleware:"authLogin",
  methods:{
     LoginOut(){
       this.$store.dispatch("LoginOut");
       if(this.$store.state.authLogin==false){
         this.$router.push("/");
       }
     }
  }
}
</script>
<style lang="scss" scoped>
</style>

