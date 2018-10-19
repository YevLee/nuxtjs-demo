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
        authLogin: false
    },
    mutations: {
        SET_AUTHlOGIN(state) {
            state.authLogin = true;
            Cookies.set('authLogin',state.authLogin);
        },
        LOGINOUT(state){
            state.authLogin=false;
            Cookies.set('authLogin',state.authLogin);
        }
    },
    actions: {
        set_authLogin(context) {
            context.commit("SET_AUTHlOGIN")
        },
        LoginOut(context){
            context.commit("LOGINOUT")
        }
    }
})

export default store