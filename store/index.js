// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
// const store=()=>{
//     state={
//         authLogin:false
//     },
//     getters={},
//     actions={
//         set_authLogin(context){
//             context.commit("SET_AUTHlOGIN")
//         }
//     },
//     mutations={
//         SET_AUTHlOGIN(state){
//             state.authLogin=true
//         }
//     }

// } 
// export default store
// store/index.js

import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from "js-cookie"
Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        authLogin: Cookies.get("authLogin") || 2,
        userName:""
    },
    mutations: {
        LOGININ(state,data) { 
            state.authLogin = 1;
            Cookies.set('authLogin',JSON.parse(state.authLogin));
            console.log(typeof Cookies.get("authLogin"));
            state.userName=data;
            Cookies.set('userName',JSON.parse(state.userName));
        },
        LOGINOUT(state){
            state.authLogin=2;
            Cookies.remove('authLogin');
        }
    },
    actions: {
        loginIn(context,data) {
            context.commit("LOGININ",data)
        },
        LoginOut(context){
            context.commit("LOGINOUT")
        }
    }
})

export default store