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
<<<<<<< HEAD
        authLogin: Cookies.get("authLogin"),
        userName:Cookies.get("userName")
    },
    mutations: {
        SET_AUTHlOGIN(state,userName) {
            state.authLogin = 1;
            Cookies.set('authLogin',state.authLogin);
            Cookies.set('userName',userName)
        },
        LOGINOUT(state){
            state.authLogin=2;
            Cookies.set('authLogin',state.authLogin);
            Cookies.set('userName',"");
        },
        SETCOOKIS(state,ueserCookie){
            state.userName=ueserCookie.userName;
            state.authLogin=ueserCookie.authLogin;
=======
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
>>>>>>> 9def56d564247ca02fb479c34404b6441f8f94ca
        }

    },
    actions: {
<<<<<<< HEAD
        set_authLogin(context,userName) {
            context.commit("SET_AUTHlOGIN",userName)
=======
        loginIn(context,data) {
            context.commit("LOGININ",data)
>>>>>>> 9def56d564247ca02fb479c34404b6441f8f94ca
        },
        LoginOut(context){
            context.commit("LOGINOUT")
        },
        setCookie(ctx,ueserCookie){
            ctx.commit("SETCOOKIS",ueserCookie)
        }
    }
})

export default store