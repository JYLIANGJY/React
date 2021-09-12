// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import Axios from 'axios'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 将axios挂在到vue对象上.prototype(原型)

Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'http://localhost:8081/api/'

// Vue.prototype.$axios = Axios;
// Axios.defaults.baseURL = 'http://localhost:8080/api/';

// 定义过滤器，对商品的名称进行截取。
Vue.filter('showTitle', function(str, num) {
    if (str.length < num) {
        return str
    } else {
        return str.substr(0, num) + '...'
    }

})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})