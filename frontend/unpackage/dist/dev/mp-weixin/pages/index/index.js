(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\index\\index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!E:/luoxiang/aaluoxiang/me/garbageProject/garbageClassification/frontend/pages/index/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var uniNoticeBar = function uniNoticeBar() {return __webpack_require__.e(/*! import() | components/uni-notice-bar/uni-notice-bar */ "components/uni-notice-bar/uni-notice-bar").then(__webpack_require__.bind(null, /*! ../../components/uni-notice-bar/uni-notice-bar.vue */ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\components\\uni-notice-bar\\uni-notice-bar.vue"));};var uniIcon = function uniIcon() {return __webpack_require__.e(/*! import() | components/uni-icon/uni-icon */ "components/uni-icon/uni-icon").then(__webpack_require__.bind(null, /*! ../../components/uni-icon/uni-icon.vue */ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\components\\uni-icon\\uni-icon.vue"));};var uniPopup = function uniPopup() {return __webpack_require__.e(/*! import() | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/components/uni-popup/uni-popup.vue */ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\components\\uni-popup\\uni-popup.vue"));};var share = function share() {return __webpack_require__.e(/*! import() | components/share */ "components/share").then(__webpack_require__.bind(null, /*! @/components/share.vue */ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\components\\share.vue"));};


































































































var recorderManager = uni.getRecorderManager();
var innerAudioContext = uni.createInnerAudioContext();

innerAudioContext.autoplay = true;var _default =

{
  components: {
    uniNoticeBar: uniNoticeBar,
    uniIcon: uniIcon,
    uniPopup: uniPopup,
    share: share },

  data: function data() {
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

      swiper: [], // 幻灯片 swiper 数据
      isShowKeywordList: false,
      keywordList: [],
      randOneObj: {
        garbageName: "干电池" },

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
      "请给垃圾找个合适的家"] };


  },
  // onShareAppMessage() {
  // 	return {
  // 		title: "这是首页的分享",
  // 		path: '/pages/index/index',
  // 		imageUrl: this.image ? this.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png'
  // 	}
  // },
  onShow: function onShow() {
    this.randOne();
    this.randomTip = this.simpleTips[Math.round(Math.random() * 20)];
  },
  onLoad: function onLoad() {
    var me = this;
    console.log("typeid:" + getApp().globalData.typeid); // 'test'


    //  获取幻灯片 swiper start
    uni.request({
      url: me.serverUrl + '/slideShow', //仅为示例，并非真实接口地址。
      success: function success(res) {
        console.log(res);
        console.log(res.data.data);
        me.swiper = res.data.data;
      } });

    //  获取幻灯片 swiper end

    // 录音过程圆圈动画

    console.log(1);

    // 录音结束的事件监听

    recorderManager.onStop(function (res) {
      uni.showLoading({
        title: '努力识别中...' });

      // console.log('recorder stop' + JSON.stringify(res));
      me.voicePath = res.tempFilePath;
      // console.log(me.voicePath)
      me.popupShow = false;

      // if (me.voicePath) {
      // 	innerAudioContext.src = me.voicePath;
      // 	innerAudioContext.play();
      // 	console.log("播放了声音")
      // }
      var angle = -0.5;
      var context = uni.createCanvasContext('canvas');
      me.draw = setTimeout(function () {
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
        success: function success(uploadFileRes) {
          console.log(uploadFileRes.data);
          var res = JSON.parse(uploadFileRes.data);
          console.log(res);
          console.log(res.data);
          // console.log(JSON.parse(uploadFileRes.data.data))
          var data = res.data;
          var uniOne = JSON.stringify(data.uni);
          me.keyword = data.keyword;
          me.isShowKeywordList = true;
          // me.keywordList = me.drawCorrelativeKeyword(data.results, me.keyword);
          me.keywordList = JSON.stringify(data.results);
          console.log(" keywordList");
          console.log(me.keywordList);
          uni.navigateTo({
            url: "/pages/search/search?keyword=".concat(me.keyword, "&keywordList=").concat(me.keywordList, "&uni=").concat(uniOne) });

          uni.hideLoading();

        } });

    });
  },
  methods: {
    randOne: function randOne() {var _this = this;
      uni.request({
        url: this.serverUrl + '/qb/randOne', //仅为示例，并非真实接口地址。
        success: function success(res) {
          console.log(res);
          console.log(res.data.data);
          _this.randOneObj = res.data.data[0];
          _this.keyword = res.data.data[0].garbageName;
        } });

    },
    // 幻灯片 的点击跳转事件 start
    navigateTo: function navigateTo(skipUrl) {
      uni.navigateTo({
        url: '/pages/webview/webview?url=' + skipUrl });

    },
    // 幻灯片 的点击跳转事件 end
    searchKeyword: function searchKeyword() {
      var me = this;
      if (!me.keyword) return;
      uni.request({
        url: me.serverUrl + "/qb/uniname/" + me.keyword, //仅为示例
        success: function success(res) {
          console.log(res);
          // me.keywordList = me.drawCorrelativeKeyword(res.data.data, me.keyword);
          // let uniOne = JSON.stringify(res.data.data);
          var data = res.data.data;
          var uniOne = JSON.stringify(data.uni);
          var results = JSON.stringify(data.results);
          // console.log("  goto before")
          // console.log(me.keywordList)
          // console.log(JSON.stringify(me.keywordList))
          // let str=JSON.stringify(me.keywordList)
          console.log(res.data.data);
          uni.navigateTo({
            url: "/pages/search/search?type=3&keyword=".concat(me.keyword, "&keywordList=").concat(results, "&uni=").concat(uniOne) });

        } });

    },
    readyRecord2: function readyRecord2() {
      uni.navigateTo({
        url: "/pages/search/search?type=2" });

    },
    readyRecord: function readyRecord() {
      this.popupShow = true;
    },
    start: function start() {
      console.log("startTiming");
      this.startTiming = setTimeout(this.recording, 150);
    },
    end: function end() {
      console.log("录音 end");
      recorderManager.stop();
      clearInterval(this.draw);
      clearTimeout(this.startTiming);
      clearTimeout(this.timeoutTiming);
      this.draw = false;
      this.startTiming = false;
      this.timeoutTiming = false;
    },
    recording: function recording() {
      var me = this;
      console.log('录音开始');
      recorderManager.start();
      var angle = -0.5;
      var context = uni.createCanvasContext('canvas');
      me.draw = setInterval(function () {
        context.beginPath();
        context.setStrokeStyle("#1296db");
        context.setLineWidth(3);
        context.arc(75, 75, 50, -0.5 * Math.PI, (angle += 2 / (me.maxTime / me.frame)) * Math.PI, false);
        context.stroke();
        context.draw();
      }, me.frame);
      me.timeoutTiming = setTimeout(function () {
        clearInterval(me.draw);
        me.draw = false;
        console.log("时间到，录音结束");
        recorderManager.stop();
      }, me.maxTime);
    },
    playVoice: function playVoice() {
      var me = this;
      console.log(" 点击 播放");
      console.log(me.voicePath);
      if (me.voicePath) {
        innerAudioContext.src = me.voicePath;
        innerAudioContext.play();
        console.log("播放了声音");
      }
    },
    hidePopup: function hidePopup() {
      this.popupShow = false;
    },
    handleSearchEvent: function handleSearchEvent() {
      console.log("click icon");
    },
    switchTabToClassify: function switchTabToClassify(index) {
      console.log(index);
      getApp().globalData.typeid = index;
      uni.switchTab({
        url: '/pages/type/type' });

    },
    gotoSearch: function gotoSearch() {
      uni.navigateTo({
        url: '/pages/search/search' });

    },
    takePhoto2: function takePhoto2() {
      uni.navigateTo({
        url: "/pages/search/search?type=1" });

    },
    takePhoto: function takePhoto() {
      var me = this;
      uni.chooseImage({
        count: 1,
        success: function success(res) {
          me.imagePath = res.tempFilePaths[0];
          console.log(me.imagePath);
          uni.showLoading({
            title: '努力识别中...' });

          uni.uploadFile({
            url: me.serverUrl + '/upload/image', //仅为示例，非真实的接口地址
            filePath: res.tempFilePaths[0],
            name: 'file',
            success: function success(uploadFileRes) {
              console.log(uploadFileRes.data);
              var res = JSON.parse(uploadFileRes.data);
              console.log(res);
              console.log(res.data);
              // console.log(JSON.parse(uploadFileRes.data.data))
              var data = res.data;
              var uniOne = JSON.stringify(data.uni);
              me.keyword = data.keyword;
              me.isShowKeywordList = true;
              // me.keywordList = me.drawCorrelativeKeyword(data.results, me.keyword);
              me.keywordList = JSON.stringify(data.results);
              console.log(" keywordList");
              console.log(me.keywordList);
              uni.navigateTo({
                url: "/pages/search/search?keyword=".concat(me.keyword, "&keywordList=").concat(me.keywordList, "&uni=").concat(uniOne) });

            },
            complete: function complete() {
              uni.hideLoading();
            } });


        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\index\\index.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!E:/luoxiang/aaluoxiang/me/garbageProject/garbageClassification/frontend/pages/index/index.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\index\\index.vue?vue&type=template&id=062bc6f1&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!E:/luoxiang/aaluoxiang/me/garbageProject/garbageClassification/frontend/pages/index/index.vue?vue&type=template&id=062bc6f1& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\index\\index.vue":
/*!*****************************************************************************************************!*\
  !*** E:/luoxiang/aaluoxiang/me/garbageProject/garbageClassification/frontend/pages/index/index.vue ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_062bc6f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=062bc6f1& */ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\index\\index.vue?vue&type=template&id=062bc6f1&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\index\\index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\index\\index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_062bc6f1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_062bc6f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/luoxiang/aaluoxiang/me/garbageProject/garbageClassification/frontend/pages/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\index\\index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** E:/luoxiang/aaluoxiang/me/garbageProject/garbageClassification/frontend/pages/index/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\index\\index.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\index\\index.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************!*\
  !*** E:/luoxiang/aaluoxiang/me/garbageProject/garbageClassification/frontend/pages/index/index.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\index\\index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\index\\index.vue?vue&type=template&id=062bc6f1&":
/*!************************************************************************************************************************************!*\
  !*** E:/luoxiang/aaluoxiang/me/garbageProject/garbageClassification/frontend/pages/index/index.vue?vue&type=template&id=062bc6f1& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_062bc6f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=062bc6f1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\index\\index.vue?vue&type=template&id=062bc6f1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_062bc6f1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_062bc6f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\main.js?{\"page\":\"pages%2Findex%2Findex\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map