<template>
    <div>
        <div><input type="text" v-model="name" placeholder="姓名"></div>
       <div><input type="text" v-model="password" placeholder="密码"></div>
       <div><button @click="login($event)">登陆</button></div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                name:"",
                password:""
            }
        },
        methods:{
            login(e){
                e.preventDefault();
                //console.log(this.$router)
                if(this.name=="" || this.password==""){
                    return false;
                }else{
                    this.$store.dispatch("set_authLogin")
                    console.log(1)
                     this.$router.push("/setting")
                }
                   
                
            }
        }
    }
</script>