webpackJsonp([4],{HQtt:function(t,e,a){var s=a("zjkg");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("403b5e26",s,!0)},TdIe:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("cdA+"),n=a("gecv"),i=a("0xDb"),o={data:function(){return{updatePassowrdVisible:!1,feedBackDataList:[],taskFeedbackConfirmedVisible:!1}},components:{UpdatePassword:s.default,TaskFeedbackConfirmed:n.default},computed:{navbarLayoutType:{get:function(){return this.$store.state.common.navbarLayoutType}},sidebarFold:{get:function(){return this.$store.state.common.sidebarFold},set:function(t){this.$store.commit("common/updateSidebarFold",t)}},mainTabs:{get:function(){return this.$store.state.common.mainTabs},set:function(t){this.$store.commit("common/updateMainTabs",t)}},userName:{get:function(){return this.$store.state.user.name}}},mounted:function(){console.log("111"),this.getFeedBackDataList()},methods:{viewDetail:function(t){var e=this;this.taskFeedbackConfirmedVisible=!0,this.$nextTick(function(){e.$refs.taskFeedbackConfirmed.init(t)})},getFeedBackDataList:function(){var t=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/generator/taskdesignator/finished"),method:"get",params:this.$http.adornParams()}).then(function(e){var a=e.data;a&&0===a.code&&(console.log("111"),console.log(a),t.feedBackDataList=a.data,t.dataListLoading=!1),t.dataListLoading=!1})},updatePasswordHandle:function(){var t=this;this.updatePassowrdVisible=!0,this.$nextTick(function(){t.$refs.updatePassowrd.init()})},logoutHandle:function(){var t=this;this.$confirm("确定进行[退出]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:t.$http.adornUrl("/sys/logout"),method:"post",data:t.$http.adornData()}).then(function(e){var a=e.data;a&&0===a.code&&(Object(i.a)(),t.$router.push({name:"login"}))})}).catch(function(){})}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"site-navbar",class:"site-navbar--"+t.navbarLayoutType},[s("div",{staticClass:"site-navbar__header"},[s("h1",{staticClass:"site-navbar__brand",on:{click:function(e){t.$router.push({name:"home"})}}},[s("a",{staticClass:"site-navbar__brand-lg",attrs:{href:"javascript:;"}},[t._v("任务管理系统")]),t._v(" "),s("a",{staticClass:"site-navbar__brand-mini",attrs:{href:"javascript:;"}},[t._v("任务")])])]),t._v(" "),s("div",{staticClass:"site-navbar__body clearfix"},[s("el-menu",{staticClass:"site-navbar__menu",attrs:{mode:"horizontal"}},[s("el-menu-item",{staticClass:"site-navbar__switch",attrs:{index:"0"},on:{click:function(e){t.sidebarFold=!t.sidebarFold}}},[s("icon-svg",{attrs:{name:"zhedie"}})],1)],1),t._v(" "),s("el-menu",{staticClass:"site-navbar__menu site-navbar__menu--right",attrs:{mode:"horizontal"}},[s("el-menu-item",{attrs:{index:"0"}},[s("template",{slot:"title"},[s("el-badge",{attrs:{value:t.feedBackDataList.length,hidden:0==t.feedBackDataList.length}},[s("el-popover",{attrs:{placement:"bottom",trigger:"click"}},[t.feedBackDataList.length>0?s("div",{staticStyle:{padding:"5px"}},t._l(t.feedBackDataList,function(e){return s("li",{staticClass:"feedback",on:{click:function(a){t.viewDetail(e)}}},[t._v("\n                  【任务反馈】"+t._s(e.username)+" 对任务编号\n                  "+t._s(e.billNo)+" 有新反馈\n                ")])})):s("div",{staticStyle:{padding:"5px"}},[s("span",{staticClass:"feedback"},[t._v(" 暂无新反馈信息 ")])]),t._v(" "),s("icon-svg",{staticClass:"el-icon-message-solid",attrs:{slot:"reference",name:"tixing"},slot:"reference"})],1)],1)],1)],2),t._v(" "),s("el-menu-item",{attrs:{index:"1"},on:{click:function(e){t.$router.push({name:"theme"})}}},[s("template",{slot:"title"},[s("el-badge",[s("icon-svg",{staticClass:"el-icon-message-solid",attrs:{name:"shezhi"}})],1)],1)],2),t._v(" "),s("el-menu-item",{staticClass:"site-navbar__avatar",attrs:{index:"3"}},[s("el-dropdown",{attrs:{"show-timeout":0,placement:"bottom"}},[s("span",{staticClass:"el-dropdown-link"},[s("img",{attrs:{src:a("zQrT"),alt:t.userName}}),t._v(t._s(t.userName)+"\n          ")]),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{nativeOn:{click:function(e){t.updatePasswordHandle()}}},[t._v("修改密码")]),t._v(" "),s("el-dropdown-item",{nativeOn:{click:function(e){t.logoutHandle()}}},[t._v("退出")])],1)],1)],1)],1)],1),t._v(" "),t.updatePassowrdVisible?s("update-password",{ref:"updatePassowrd"}):t._e(),t._v(" "),t.taskFeedbackConfirmedVisible?s("task-feedback-confirmed",{ref:"taskFeedbackConfirmed",on:{refreshDataList:t.getFeedBackDataList}}):t._e()],1)},staticRenderFns:[]};var d=a("VU/8")(o,r,!1,function(t){a("HQtt")},"data-v-df580366",null);e.default=d.exports},zQrT:function(t,e,a){t.exports=a.p+"static/img/avatar.c58e465.png"},zjkg:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.feedback[data-v-df580366] {\n  padding: 5px 0;\n  cursor: pointer;\n}\n.feedback[data-v-df580366]:hover {\n  color: #c0c4cc;\n}\n",""])}});