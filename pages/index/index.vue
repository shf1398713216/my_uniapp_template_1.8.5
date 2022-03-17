<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">
				uView - 多平台快速开发的UI框架 {{vuex_version}}
				uView - 多平台快速开发的UI框架 {{vuex_user.name}}
			</text>
		</view>
		<view class="button-demo">
			<u-button @click="modifyVuex">按钮组件演示</u-button>
		</view>

		<view class="button-demo">
			<u-button @click="teseNavigateTo">跳转触发路由守卫演示</u-button>
		</view>
		<view class="button-demo">
			<u-button @click="setToken()">设置登录</u-button>
		</view>
		<view class="button-demo">
			<u-button @click="toErr()">跳失败页</u-button>
		</view>
		
		<view class="link-demo">
			<u-link :color="$u.color['primary']" :under-line="true" href="http://www.uviewui.com">
				跳转uView文档：www.uviewui.com</u-link>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			modifyVuex() {
				this.$u.vuex('vuex_version', '1.0.3');
				// 修改对象的形式，中间用"."分隔
				this.$u.vuex('vuex_user.name', '诗圣1');
			},
			teseNavigateTo() {
				uni.navigateTo({
					url: '/pages/test_page/success_page',
				});
			},
			//放置token
			setToken(){
				console.log("设置token成功");
				uni.setStorageSync("token","333");
				
			},
			toErr(){
				uni.navigateTo({
					url: '/pages/test_page/test_page'
				});
			}


		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 100rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 28rpx;
		color: $u-content-color;
	}

	.button-demo {
		margin-top: 80rpx;
	}

	.link-demo {
		margin-top: 80rpx;
	}
</style>
