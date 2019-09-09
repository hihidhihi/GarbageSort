(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/challenge/challengeResult"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\challenge\\challengeResult.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!E:/luoxiang/aaluoxiang/me/garbageProject/garbageClassification/frontend/pages/challenge/challengeResult.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var uniSteps = function uniSteps() {return __webpack_require__.e(/*! import() | components/uni-steps/uni-steps */ "components/uni-steps/uni-steps").then(__webpack_require__.bind(null, /*! @/components/uni-steps/uni-steps.vue */ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\components\\uni-steps\\uni-steps.vue"));};var levelPopup = function levelPopup() {return __webpack_require__.e(/*! import() | components/levelPopup */ "components/levelPopup").then(__webpack_require__.bind(null, /*! @/components/levelPopup.vue */ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\components\\levelPopup.vue"));};var share = function share() {return __webpack_require__.e(/*! import() | components/share */ "components/share").then(__webpack_require__.bind(null, /*! @/components/share.vue */ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\components\\share.vue"));};var _default =































































































{
  data: function data() {
    return {
      popupShow: false,
      level: null,
      score: null,
      list: [],

      multiTips: [
      "让垃圾找到自己的归属,请给垃圾找个合适的家",
      "世界上没有垃圾，只有放错地方的宝藏",
      "1吨废物=700公斤的错误条件+200公斤的懒惰思想+100公斤真正的废物",
      "从垃圾中淘宝不如变垃圾为宝",
      "垃圾应该成为当今时代的一首诗",
      "继农业革命、工业革命、计算机革命之后，影响人类生存发展的又一次浪潮，将是在世纪之交时要出现的垃圾革命",
      "地球所提供的足以满足每个人的需要，但不足以填满每个人的欲壑",
      "参与垃圾分类，保护地球家园，共创美好世界",
      "大地给予所有的人是物质的精华，而最后，它从人们那里得到的回赠却是这些物质的垃圾",
      "我们违背大自然的结果是：我们破坏了自然景观的美，自然动态的美和天籁的美",
      "让垃圾找到自己的归属,请给垃圾找个合适的家"]

      // level: 4,
      // score: 6,
      // list: [{
      // 	"questionId": 8,
      // 	"garbageType": 1,
      // 	"garbageName": "猫砂",
      // 	"analysis": null,
      // 	"remark": null,
      // 	"selectedType": 4
      // }, {
      // 	"questionId": 15,
      // 	"garbageType": 1,
      // 	"garbageName": "编织袋",
      // 	"analysis": null,
      // 	"remark": null,
      // 	"selectedType": 4
      // }, {
      // 	"questionId": 28,
      // 	"garbageType": 1,
      // 	"garbageName": "毛发",
      // 	"analysis": null,
      // 	"remark": null,
      // 	"selectedType": 4
      // }, {
      // 	"questionId": 31,
      // 	"garbageType": 1,
      // 	"garbageName": "橡皮泥",
      // 	"analysis": null,
      // 	"remark": null,
      // 	"selectedType": 4
      // }, {
      // 	"questionId": 42,
      // 	"garbageType": 1,
      // 	"garbageName": "竹筷",
      // 	"analysis": null,
      // 	"remark": null,
      // 	"selectedType": 4
      // }, {
      // 	"questionId": 45,
      // 	"garbageType": 1,
      // 	"garbageName": "伞",
      // 	"analysis": null,
      // 	"remark": null,
      // 	"selectedType": 4
      // }, {
      // 	"questionId": 50,
      // 	"garbageType": 1,
      // 	"garbageName": "毛笔",
      // 	"analysis": null,
      // 	"remark": null,
      // 	"selectedType": 4
      // }, {
      // 	"questionId": 51,
      // 	"garbageType": 1,
      // 	"garbageName": "眼镜",
      // 	"analysis": null,
      // 	"remark": null,
      // 	"selectedType": 4
      // }, {
      // 	"questionId": 52,
      // 	"garbageType": 1,
      // 	"garbageName": "打火机",
      // 	"analysis": null,
      // 	"remark": "干垃圾哟",
      // 	"selectedType": 4
      // }, {
      // 	"questionId": 54,
      // 	"garbageType": 1,
      // 	"garbageName": "烟盒",
      // 	"analysis": null,
      // 	"remark": null,
      // 	"selectedType": 4
      // }],
    };

  },
  components: {
    uniSteps: uniSteps,
    levelPopup: levelPopup,
    share: share },

  onLoad: function onLoad(option) {//option为object类型，会序列化上个页面传递的参数
    console.log(option); //打印出上个页面传递的参数。
    console.log(option.score); //打印出上个页面传递的参数。
    console.log(option.list); //打印出上个页面传递的参数。
    this.score = option.score;
    this.list = JSON.parse(option.list);
    if (this.score <= 1) {
      this.level = 1;
    } else if (this.score <= 4) {
      this.level = 2;
    } else if (this.score <= 7) {
      this.level = 3;
    } else if (this.score <= 9) {
      this.level = 4;
    } else {
      this.level = 5;
    }
    console.log(this.level);
    this.popupShow = true;
  },
  methods: {
    hidePopup: function hidePopup() {
      this.popupShow = false;
    },
    goOnChallenge: function goOnChallenge() {
      uni.reLaunch({
        url: '/pages/challenge/challenge' });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\challenge\\challengeResult.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!E:/luoxiang/aaluoxiang/me/garbageProject/garbageClassification/frontend/pages/challenge/challengeResult.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\challenge\\challengeResult.vue?vue&type=template&id=9c32f860&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!E:/luoxiang/aaluoxiang/me/garbageProject/garbageClassification/frontend/pages/challenge/challengeResult.vue?vue&type=template&id=9c32f860& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var g0 = Math.round(Math.random() * 10)
  var g1 = Math.round(Math.random() * 10)
  var g2 = Math.round(Math.random() * 10)
  var g3 = Math.round(Math.random() * 10)
  var g4 = Math.round(Math.random() * 10)
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        g3: g3,
        g4: g4
      }
    }
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\challenge\\challengeResult.vue":
/*!*******************************************************************************************************************!*\
  !*** E:/luoxiang/aaluoxiang/me/garbageProject/garbageClassification/frontend/pages/challenge/challengeResult.vue ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _challengeResult_vue_vue_type_template_id_9c32f860___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./challengeResult.vue?vue&type=template&id=9c32f860& */ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\challenge\\challengeResult.vue?vue&type=template&id=9c32f860&");
/* harmony import */ var _challengeResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./challengeResult.vue?vue&type=script&lang=js& */ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\challenge\\challengeResult.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _challengeResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _challengeResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _challengeResult_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./challengeResult.vue?vue&type=style&index=0&lang=css& */ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\challenge\\challengeResult.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _challengeResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _challengeResult_vue_vue_type_template_id_9c32f860___WEBPACK_IMPORTED_MODULE_0__["render"],
  _challengeResult_vue_vue_type_template_id_9c32f860___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/luoxiang/aaluoxiang/me/garbageProject/garbageClassification/frontend/pages/challenge/challengeResult.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\challenge\\challengeResult.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** E:/luoxiang/aaluoxiang/me/garbageProject/garbageClassification/frontend/pages/challenge/challengeResult.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./challengeResult.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\challenge\\challengeResult.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\challenge\\challengeResult.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************!*\
  !*** E:/luoxiang/aaluoxiang/me/garbageProject/garbageClassification/frontend/pages/challenge/challengeResult.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeResult_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./challengeResult.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\challenge\\challengeResult.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeResult_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeResult_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeResult_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeResult_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeResult_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\challenge\\challengeResult.vue?vue&type=template&id=9c32f860&":
/*!**************************************************************************************************************************************************!*\
  !*** E:/luoxiang/aaluoxiang/me/garbageProject/garbageClassification/frontend/pages/challenge/challengeResult.vue?vue&type=template&id=9c32f860& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeResult_vue_vue_type_template_id_9c32f860___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./challengeResult.vue?vue&type=template&id=9c32f860& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\pages\\challenge\\challengeResult.vue?vue&type=template&id=9c32f860&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeResult_vue_vue_type_template_id_9c32f860___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeResult_vue_vue_type_template_id_9c32f860___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["E:\\luoxiang\\aaluoxiang\\me\\garbageProject\\garbageClassification\\frontend\\main.js?{\"page\":\"pages%2Fchallenge%2FchallengeResult\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/challenge/challengeResult.js.map