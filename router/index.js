import {
	RouterMount,
	createRouter
} from 'uni-simple-router';

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routes: [...ROUTES]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	var ignoreArray = ["/pages/test_page/test_page", "/pages/index/index"];

	//有token或者不拦截的路径,可以跳转,否则跳某个登录页面
	if (uni.getStorageSync("token") == '333' ||
		ignoreArray.indexOf( to.path) != -1) {
		next();
	} else {
		uni.navigateTo({
			url: '/pages/test_page/test_page'
		});
	}
 
});
// 全局路由后置守卫
router.afterEach((to, from) => {
	// console.log('全局路由后置守卫')
})

export {
	router,
	RouterMount
}
