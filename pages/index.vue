<template>
  <section class="container">
    <div>首页</div>
    <div class="setting">
      <nuxt-link :to="{name:'setting'}">设置页面</nuxt-link>
    </div>
    <p class="info">{{info}}</p>
    <img src="~static/image/213.png" alt="">
  </section>
</template>

<script>
import axios from "axios"
import Cookie from "js-cookie"
export default {
  data(){
    return{
      title:"index"
    }
  },
  head(){
    return{
      title:this.title,
      meta:[
        {hid:"description",name:"description",content:"hisljdflsjf"}
      ]
    }
  },
  // asyncData(){
  //     return axios.get('https://api.myjson.com/bins/8gdmr')
  //     .then((res)=>{
  //         console.log(res)
  //         return {info:res.data}
  //     })
  // },
  async asyncData(){
      let {data}=await axios.get('https://api.myjson.com/bins/8gdmr')
      return {info: data}
  },
  // mounted() {
  //     axios.get("https://api.myjson.com/bins/10o0pc").then(res=>{
  //          console.log(res)
  //      })
  // },
  methods: {
    toSettig() {
    }
  },
  components: {}
};
</script>

<style>
.info{
  width:300px;
  height:150px;
  background-image: url("~static/image/213.png")
}
</style>
