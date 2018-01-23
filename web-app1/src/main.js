/**
 * Created by ZXP on 2018/1/14.
 */
import Vue from 'vue';
import App from './App.vue';
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
new Vue({
    render:(h)=>h(App)
}
).$mount('#app');