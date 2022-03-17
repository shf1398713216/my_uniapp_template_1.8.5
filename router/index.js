import Vue from 'vue'
import uniCrazyRouter from "uni-crazy-router";
Vue.use(uniCrazyRouter)

uniCrazyRouter.beforeEach(async (to, from ,next)=>{
    // 逻辑代码
    console.log("前置拦截执行",to)
    console.log("前置拦截执行",from)


    next();
})

uniCrazyRouter.afterEach((to, from)=>{
    // 逻辑代码
    console.log("后置拦截执行",to)
    console.log("后置拦截执行",from)

})

uniCrazyRouter['on'+'Error']((to, from)=>{
    // 逻辑代码
})
