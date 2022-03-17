import Vue from 'vue'
import App from './App'
import store from '@/store'
// 引入路由
import {router,RouterMount} from './router/index.js'  //路径换成自己的
Vue.use(router)

let vuexStore = require("@/store/$u.mixin.js")
Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);


Vue.mixin(vuexStore);


const app = new Vue({
	store,
	...App
})


// http拦截器，此为需要加入的内容，如果不是写在common目录，请自行修改引入路径
import httpInterceptor from '@/common/http.interceptor.js'
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)

//引入了simple router 插件,这里需要条件编译
//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
RouterMount(app,router,'#app')
// #endif

// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
