<template>
	<view class="main">
		
		
		<view v-if="false">
			<swiper :indicator-dots="true" :autoplay="true" :circular="true">
				<swiper-item class="swiper-flex" v-for="(item,index) in swiper" :key="index">
					<view @click="navigateTo(item.skipUrl)" class="swiper-item" style="background-color: antiquewhite;">
						<image class="swiper-img" :src="item.imageUrl"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		
		<view>
			<swiper :indicator-dots="true" :autoplay="true" :circular="true">
				<swiper-item class="swiper-flex">
					<view class="swiper-flex" >
						<image class="swiper-img" :src="url+'/static/picture/lb-1.jpg'"></image>
					</view>
				</swiper-item>
				<swiper-item class="swiper-flex">
					<view>
						<image class="swiper-img" :src="url+'/static/picture/lb-2.jpg'"></image>
					</view>
				</swiper-item>
				<swiper-item class="swiper-flex">
					<view>
						<image class="swiper-img" :src="url+'/static/picture/lb-3.jpg'"></image>
					</view>
				</swiper-item>
				<swiper-item class="swiper-flex">
					<view>
						<image class="swiper-img" :src="url+'/static/picture/lb-4.jpg'"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		
		<view class="">
			<view class="simpleTips">
				{{randomTip}}
			</view>
		</view>
		
		
		<view class="main-show-classify">
			<view class="main-classify">
				<view @click="switchTabToClassify(1)">
					<image class="main-img" :src="url+'/static/icos/glj.jpg'"></image>
				</view>
				<view @click="switchTabToClassify(2)">
					<image class="main-img" :src="url+'/static/icos/slj.jpg'"></image>
				</view>
				<view @click="switchTabToClassify(3)">
					<image class="main-img" :src="url+'/static/icos/khsw.jpg'"></image>
				</view>
				<view @click="switchTabToClassify(4)">
					<image class="main-img" :src="url+'/static/icos/yhlj.jpg'"></image>
				</view>
			</view>
		</view>
		
		
		<view class="input-view">
			<view @click="readyRecord2()" class="input-view-item input-view-speech">
				<image class="search-img1" src="../../static/icos/yysb.png"></image>
			</view>
			
			<view @click="takePhoto2()" class="input-view-item input-view-camera">
				<image class="search-img2" src="../../static/icos/pzsb.png"></image>
			</view>
			
			<view @click="gotoSearch()" class="input-view-item input-view-search">
				<image class="search-img3" src="../../static/icos/srcx.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNoticeBar from "../../components/uni-notice-bar/uni-notice-bar.vue"
	import uniIcon from "../../components/uni-icon/uni-icon.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import share from "@/components/share.vue"
	import { url } from "@/global/data.js"
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();

	innerAudioContext.autoplay = true;

	export default {
		components: {
			uniNoticeBar,
			uniIcon,
			uniPopup,
			share
		},
		data() {
			return {
				title: '这是我的小程序，开始了',
				defaultKeyword: "111",
				keyword: "干电池",
				popupShow: false,
				voicePath: '',
				startTiming: false,
				drawTiming: false,
				timeoutTiming: false,
				maxTime: 5000,
				frame: 50,
				url:url,
				swiper: [{
					index :1,
					imageUrl: '../../static/picture/lb-1',
				}
				], // 幻灯片 swiper 数据
				isShowKeywordList: false,
				keywordList: [],
				randOneObj: {
					garbageName: "干电池"
				},
				randomTip: "",
				simpleTips: [
					"让垃圾找到自己的归属",
					"请给垃圾找个合适的家",
					"希望有一天，垃圾桶也会下岗",
					"垃圾分类放，环境有保障",
					"垃圾要分类，资源要利用",
					"今天分一分，明天美十分",
					"积极参与垃圾分类，共创优美社区环境",
					"分类收集人人有责，男女老幼齐来参与",
					"提高社区的品味，从垃圾分类开始",
					"垃圾分类，举手之劳",
					"配合垃圾分类，争做文明市民",
					"垃圾分类益处多，环境保护靠你我",
					"要是垃圾变为宝，分类回收不可少",
					"请给垃圾找个合适的家",
					"垃圾儿女要分家，安居乐业靠大家",
					"垃圾分类人人做，做好分类为人人",
					"让垃圾找到自己的归属",
					"垃圾要分类，生活变美好",
					"你我虽渺小，但意义重大",
					"让垃圾找到自己的归属",
					"请给垃圾找个合适的家",
				],
			}
		},
		// onShareAppMessage() {
		// 	return {
		// 		title: "这是首页的分享",
		// 		path: '/pages/index/index',
		// 		imageUrl: this.image ? this.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png'
		// 	}
		// },
		onShow() {
			this.randOne();
			this.randomTip = this.simpleTips[Math.round(Math.random() * 20)];
		},
		onLoad() {
			
			
			let me = this;
			console.log("typeid:" + getApp().globalData.typeid) // 'test'


			//  获取幻灯片 swiper start
			uni.request({
				url: me.serverUrl + '/slideShow', //仅为示例，并非真实接口地址。
				success: (res) => {
					console.log(res)
					console.log(res.data.data);
					me.swiper = res.data.data;
				}
			});
			//  获取幻灯片 swiper end

			// 录音过程圆圈动画

			console.log(1);

			// 录音结束的事件监听

			recorderManager.onStop(function(res) {
				uni.showLoading({
					title: '努力识别中...'
				});
				// console.log('recorder stop' + JSON.stringify(res));
				me.voicePath = res.tempFilePath;
				// console.log(me.voicePath)
				me.popupShow = false;

				// if (me.voicePath) {
				// 	innerAudioContext.src = me.voicePath;
				// 	innerAudioContext.play();
				// 	console.log("播放了声音")
				// }
				let angle = -0.5;
				let context = uni.createCanvasContext('canvas');
				me.draw = setTimeout(function() {
					context.beginPath();
					context.setStrokeStyle("#1296db");
					context.setLineWidth(3);
					context.arc(0, 0, 0, -0.5 * Math.PI, (angle += 2 / (me.maxTime / me.frame)) * Math.PI, false);
					context.stroke();
					context.draw();
				}, 1);
				uni.uploadFile({
					url: me.serverUrl + '/upload/record', //仅为示例，非真实的接口地址
					filePath: me.voicePath,
					name: 'file',
					success: (uploadFileRes) => {
						console.log(uploadFileRes.data)
						let res = JSON.parse(uploadFileRes.data);
						console.log(res)
						console.log(res.data)
						// console.log(JSON.parse(uploadFileRes.data.data))
						let data = res.data;
						let uniOne = JSON.stringify(data.uni);
						me.keyword = data.keyword;
						me.isShowKeywordList = true;
						// me.keywordList = me.drawCorrelativeKeyword(data.results, me.keyword);
						me.keywordList = JSON.stringify(data.results);
						console.log(" keywordList")
						console.log(me.keywordList)
						uni.navigateTo({
							url: `/pages/search/search?keyword=${me.keyword}&keywordList=${me.keywordList}&uni=${uniOne}`
						});
						uni.hideLoading();

					}
				});
			})
		},
		methods: {
			randOne() {
				uni.request({
					url: this.serverUrl + '/qb/randOne', //仅为示例，并非真实接口地址。
					success: (res) => {
						console.log(res)
						console.log(res.data.data);
						this.randOneObj = res.data.data[0];
						this.keyword = res.data.data[0].garbageName;
					}
				});
			},
			// 幻灯片 的点击跳转事件 start
			navigateTo(skipUrl) {
				uni.navigateTo({
					url: '/pages/webview/webview?url=' + skipUrl
				});
			},
			// 幻灯片 的点击跳转事件 end
			searchKeyword() {
				let me = this;
				if (!me.keyword) return;
				uni.request({
					url: me.serverUrl + "/qb/uniname/" + me.keyword, //仅为示例
					success: (res) => {
						console.log(res);
						// me.keywordList = me.drawCorrelativeKeyword(res.data.data, me.keyword);
						// let uniOne = JSON.stringify(res.data.data);
						let data = res.data.data;
						let uniOne = JSON.stringify(data.uni);
						let results = JSON.stringify(data.results);
						// console.log("  goto before")
						// console.log(me.keywordList)
						// console.log(JSON.stringify(me.keywordList))
						// let str=JSON.stringify(me.keywordList)
						console.log(res.data.data)
						uni.navigateTo({
							url: `/pages/search/search?type=3&keyword=${me.keyword}&keywordList=${results}&uni=${uniOne}`
						});
					}
				});
			},
			readyRecord2() {
				uni.navigateTo({
					url: `/pages/search/search?type=2`
				});
			},
			readyRecord() {
				this.popupShow = true;
			},
			start() {
				console.log("startTiming");
				this.startTiming = setTimeout(this.recording, 150);
			},
			end() {
				console.log("录音 end")
				recorderManager.stop();
				clearInterval(this.draw);
				clearTimeout(this.startTiming);
				clearTimeout(this.timeoutTiming);
				this.draw = false;
				this.startTiming = false;
				this.timeoutTiming = false;
			},
			recording() {
				let me = this;
				console.log('录音开始');
				recorderManager.start();
				let angle = -0.5;
				let context = uni.createCanvasContext('canvas');
				me.draw = setInterval(function() {
					context.beginPath();
					context.setStrokeStyle("#1296db");
					context.setLineWidth(3);
					context.arc(75, 75, 50, -0.5 * Math.PI, (angle += 2 / (me.maxTime / me.frame)) * Math.PI, false);
					context.stroke();
					context.draw();
				}, me.frame);
				me.timeoutTiming = setTimeout(() => {
					clearInterval(me.draw);
					me.draw = false;
					console.log("时间到，录音结束");
					recorderManager.stop();
				}, me.maxTime);
			},
			playVoice() {
				let me = this;
				console.log(" 点击 播放")
				console.log(me.voicePath)
				if (me.voicePath) {
					innerAudioContext.src = me.voicePath;
					innerAudioContext.play();
					console.log("播放了声音")
				}
			},
			hidePopup() {
				this.popupShow = false;
			},
			handleSearchEvent() {
				console.log("click icon")
			},
			switchTabToClassify(index) {
				console.log(index)
				getApp().globalData.typeid = index
				uni.switchTab({
					url: '/pages/type/type',
				});
			},
			gotoSearch() {
				console.log("go to search")
				uni.navigateTo({
					url: '/pages/search/search',
				});
			},
			takePhoto2() {
				uni.navigateTo({
					url: `/pages/search/search?type=1`
				});
			},
			takePhoto() {
				let me = this;
				uni.chooseImage({
					count: 1,
					success: res => {
						me.imagePath = res.tempFilePaths[0];
						console.log(me.imagePath)
						uni.showLoading({
							title: '努力识别中...'
						});
						uni.uploadFile({
							url: me.serverUrl + '/upload/image', //仅为示例，非真实的接口地址
							filePath: res.tempFilePaths[0],
							name: 'file',
							success: (uploadFileRes) => {
								console.log(uploadFileRes.data)
								let res = JSON.parse(uploadFileRes.data);
								console.log(res)
								console.log(res.data)
								// console.log(JSON.parse(uploadFileRes.data.data))
								let data = res.data;
								let uniOne = JSON.stringify(data.uni);
								me.keyword = data.keyword;
								me.isShowKeywordList = true;
								// me.keywordList = me.drawCorrelativeKeyword(data.results, me.keyword);
								me.keywordList = JSON.stringify(data.results);
								console.log(" keywordList")
								console.log(me.keywordList)
								uni.navigateTo({
									url: `/pages/search/search?keyword=${me.keyword}&keywordList=${me.keywordList}&uni=${uniOne}`
								});
							},
							complete() {
								uni.hideLoading();
							}
						});

					}
				});
			}

		}
	}
</script>

<style>
	@import url("index.css");
</style>
