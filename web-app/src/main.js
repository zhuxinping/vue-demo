/**
 * Created by ZXP on 2018/1/14.
 */
import Vue from 'vue';
//runtime不支持template 只支持render
import App from './App.vue';//根组件
import Home from './Home.vue';
import List from './List.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);//引入router必须use注册全局组件
let router=new VueRouter({
    routes:[
        {
            path:'/home',component:Home
        },
        {
            path:'/list',component:List
        }
    ]
});
//这样直接引用vue引用的并不是vue.js引用的是vue的runtime
//vue=compiler+runtime（compiler）(compiler可以编译模板)
/*new Vue({
    el:'#app',
    data(){
        return{

        }
    }
});*/
//compiler有6k
//render函数的作用是将虚拟dom渲染成真实的dom
//createElement返回的是虚拟dom
//console.log(App);
//根实例
new Vue({
    router,
    render:(h)=>h(App)
}
).$mount('#app');