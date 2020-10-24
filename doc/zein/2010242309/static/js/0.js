webpackJsonp([0],{IiWk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{id:0,billNo:"",type:"",theme:"",emergency:"",startTime:"",endTime:"",frequency:"",context:"",target:"",creator:"",createTime:"",updater:"",updateTime:"",level:"",parentId:"",finished:"",status:""},dataRule:{billNo:[{required:!0,message:"任务单号不能为空",trigger:"blur"}],theme:[{required:!0,message:"任务主题不能为空",trigger:"blur"}],emergency:[{required:!0,message:"紧急程度不能为空",trigger:"blur"}],frequency:[{required:!0,message:"反馈频率不能为空",trigger:"blur"}],context:[{required:!0,message:"任务内容不能为空",trigger:"blur"}],target:[{required:!0,message:"任务目标不能为空",trigger:"blur"}],creator:[{required:!0,message:"创建人不能为空",trigger:"blur"}],updater:[{required:!0,message:"更新人不能为空",trigger:"blur"}],level:[{required:!0,message:"等级不能为空",trigger:"blur"}],parentId:[{required:!0,message:"父任务ID不能为空",trigger:"blur"}],status:[{required:!0,message:"状态不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http({url:t.$http.adornUrl("/generator/task/info/"+t.dataForm.id),method:"get",params:t.$http.adornParams()}).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.billNo=a.task.billNo,t.dataForm.type=a.task.type,t.dataForm.theme=a.task.theme,t.dataForm.emergency=a.task.emergency,t.dataForm.startTime=a.task.startTime,t.dataForm.endTime=a.task.endTime,t.dataForm.frequency=a.task.frequency,t.dataForm.context=a.task.context,t.dataForm.target=a.task.target,t.dataForm.creator=a.task.creator,t.dataForm.createTime=a.task.createTime,t.dataForm.updater=a.task.updater,t.dataForm.updateTime=a.task.updateTime,t.dataForm.level=a.task.level,t.dataForm.parentId=a.task.parentId,t.dataForm.finished=a.task.finished,t.dataForm.status=a.task.status)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/generator/task/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,billNo:e.dataForm.billNo,type:e.dataForm.type,theme:e.dataForm.theme,emergency:e.dataForm.emergency,startTime:e.dataForm.startTime,endTime:e.dataForm.endTime,frequency:e.dataForm.frequency,context:e.dataForm.context,target:e.dataForm.target,creator:e.dataForm.creator,createTime:e.dataForm.createTime,updater:e.dataForm.updater,updateTime:e.dataForm.updateTime,level:e.dataForm.level,parentId:e.dataForm.parentId,finished:e.dataForm.finished,status:e.dataForm.status})}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.dataFormSubmit()}}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"任务单号",prop:"billNo","label-width":"120px"}},[a("el-input",{attrs:{placeholder:"任务单号"},model:{value:e.dataForm.billNo,callback:function(t){e.$set(e.dataForm,"billNo",t)},expression:"dataForm.billNo"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"任务主题",prop:"theme"}},[a("el-input",{attrs:{placeholder:"任务主题"},model:{value:e.dataForm.theme,callback:function(t){e.$set(e.dataForm,"theme",t)},expression:"dataForm.theme"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"紧急程度",prop:"emergency"}},[a("el-input",{attrs:{placeholder:"紧急程度"},model:{value:e.dataForm.emergency,callback:function(t){e.$set(e.dataForm,"emergency",t)},expression:"dataForm.emergency"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"开始时间",prop:"startTime"}},[a("el-input",{attrs:{placeholder:"开始时间"},model:{value:e.dataForm.startTime,callback:function(t){e.$set(e.dataForm,"startTime",t)},expression:"dataForm.startTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"结束时间",prop:"endTime"}},[a("el-input",{attrs:{placeholder:"结束时间"},model:{value:e.dataForm.endTime,callback:function(t){e.$set(e.dataForm,"endTime",t)},expression:"dataForm.endTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"反馈频率",prop:"frequency"}},[a("el-input",{attrs:{placeholder:"反馈频率"},model:{value:e.dataForm.frequency,callback:function(t){e.$set(e.dataForm,"frequency",t)},expression:"dataForm.frequency"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"任务内容",prop:"context"}},[a("el-input",{attrs:{placeholder:"任务内容"},model:{value:e.dataForm.context,callback:function(t){e.$set(e.dataForm,"context",t)},expression:"dataForm.context"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"任务目标",prop:"target"}},[a("el-input",{attrs:{placeholder:"任务目标"},model:{value:e.dataForm.target,callback:function(t){e.$set(e.dataForm,"target",t)},expression:"dataForm.target"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"创建人",prop:"creator"}},[a("el-input",{attrs:{placeholder:"创建人"},model:{value:e.dataForm.creator,callback:function(t){e.$set(e.dataForm,"creator",t)},expression:"dataForm.creator"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"创建时间",prop:"createTime"}},[a("el-input",{attrs:{placeholder:"创建时间"},model:{value:e.dataForm.createTime,callback:function(t){e.$set(e.dataForm,"createTime",t)},expression:"dataForm.createTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"更新人",prop:"updater"}},[a("el-input",{attrs:{placeholder:"更新人"},model:{value:e.dataForm.updater,callback:function(t){e.$set(e.dataForm,"updater",t)},expression:"dataForm.updater"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"更新时间",prop:"updateTime"}},[a("el-input",{attrs:{placeholder:"更新时间"},model:{value:e.dataForm.updateTime,callback:function(t){e.$set(e.dataForm,"updateTime",t)},expression:"dataForm.updateTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"等级",prop:"level"}},[a("el-input",{attrs:{placeholder:"等级"},model:{value:e.dataForm.level,callback:function(t){e.$set(e.dataForm,"level",t)},expression:"dataForm.level"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"父任务ID",prop:"parentId"}},[a("el-input",{attrs:{placeholder:"父任务ID"},model:{value:e.dataForm.parentId,callback:function(t){e.$set(e.dataForm,"parentId",t)},expression:"dataForm.parentId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-input",{attrs:{placeholder:"状态"},model:{value:e.dataForm.status,callback:function(t){e.$set(e.dataForm,"status",t)},expression:"dataForm.status"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},s=a("VU/8")(r,o,!1,null,null,null);t.default=s.exports},JNba:function(e,t,a){var r=a("Vl1l");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("34883d82",r,!0)},Vl1l:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.task[data-v-41c72504] {\n  margin: 0px 10px;\n}\n.task_content[data-v-41c72504] {\n  word-wrap: break-word;\n  word-break: break-all;\n  overflow: hidden;\n  padding: 3px 2px;\n  margin-top: 8px;\n}\n.name[data-v-41c72504] {\n  width: 10%;\n  margin: 1px;\n}\n.term[data-v-41c72504] {\n  width: 35%;\n}\n.term[data-v-41c72504],\n.name[data-v-41c72504],\n.task_content[data-v-41c72504],\n.task_target[data-v-41c72504] {\n  display: table-cell;\n  padding: 1px;\n}\n.feedback[data-v-41c72504] {\n  border: 1px solid #30a5e487;\n  padding: 10px;\n  margin: 10px;\n  background-color: #f4f4f599;\n}\n",""])},"cdA+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("0xDb"),o={data:function(){var e=this;return{visible:!1,dataForm:{password:"",newPassword:"",confirmPassword:""},dataRule:{password:[{required:!0,message:"原密码不能为空",trigger:"blur"}],newPassword:[{required:!0,message:"新密码不能为空",trigger:"blur"}],confirmPassword:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{validator:function(t,a,r){e.dataForm.newPassword!==a?r(new Error("确认密码与新密码不一致")):r()},trigger:"blur"}]}}},computed:{userName:{get:function(){return this.$store.state.user.name}},mainTabs:{get:function(){return this.$store.state.common.mainTabs},set:function(e){this.$store.commit("common/updateMainTabs",e)}}},methods:{init:function(){var e=this;this.visible=!0,this.$nextTick(function(){e.$refs.dataForm.resetFields()})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/sys/user/password"),method:"post",data:e.$http.adornData({password:e.dataForm.password,newPassword:e.dataForm.newPassword})}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$nextTick(function(){e.mainTabs=[],Object(r.a)(),e.$router.replace({name:"login"})})}}):e.$message.error(a.msg)})})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"修改密码",visible:e.visible,"append-to-body":!0},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"账号"}},[a("span",[e._v(e._s(e.userName))])]),e._v(" "),a("el-form-item",{attrs:{label:"原密码",prop:"password"}},[a("el-input",{attrs:{type:"password"},model:{value:e.dataForm.password,callback:function(t){e.$set(e.dataForm,"password",t)},expression:"dataForm.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[a("el-input",{attrs:{type:"password"},model:{value:e.dataForm.newPassword,callback:function(t){e.$set(e.dataForm,"newPassword",t)},expression:"dataForm.newPassword"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"确认密码",prop:"confirmPassword"}},[a("el-input",{attrs:{type:"password"},model:{value:e.dataForm.confirmPassword,callback:function(t){e.$set(e.dataForm,"confirmPassword",t)},expression:"dataForm.confirmPassword"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},l=a("VU/8")(o,s,!1,null,null,null);t.default=l.exports},gecv:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("0xDb");var r={data:function(){return{visible:!1,menuList:[],statusList:[{value:"1",label:"已完成"},{value:"2",label:"未完成"}],selefSecoreList:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"}],menuListTreeProps:{label:"name",children:"children"},task:{},dataForm:{id:"",taskId:"",userId:"",status:"",comment:"",otherScore:"7"},dataRule:{status:[{required:!0,message:"状态不能为空",trigger:"blur"}]},tempKey:-666666}},methods:{init:function(e){console.log("id:-----"),console.log(e),this.task=e,this.visible=!0,this.dataForm.status="",this.dataForm.taskId=e.taskId,this.dataForm.id=e.id,this.dataForm.userId=e.userId,this.dataForm.comment=""},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&("2"==e.dataForm.status&&(e.dataForm.otherScore=""),e.$http({url:e.$http.adornUrl("/generator/taskdesignator/confirmed"),method:"post",data:e.$http.adornData({comment:e.dataForm.comment,status:e.dataForm.status,otherScore:e.dataForm.otherScore,taskId:e.dataForm.taskId,userId:e.dataForm.userId,id:e.dataForm.id})}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)}))})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"任务反馈情况","close-on-click-modal":!1,"append-to-body":!0,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("div",{staticClass:"task"},[a("div",{staticClass:"row"},[a("div",{staticClass:"name"},[e._v("任务编号:")]),e._v(" "),a("div",{staticClass:"term"},[e._v(e._s(e.task.billNo))]),e._v(" "),a("div",{staticClass:"name"},[e._v("任务主题:")]),e._v(" "),a("div",{staticClass:"term"},[e._v(e._s(e.task.theme))])])]),e._v(" "),a("div",{staticClass:"feedback"},[a("div",{staticClass:"row1"},[a("icon-svg",{attrs:{name:"admin"}}),e._v("  "+e._s(e.task.username))],1),e._v(" "),a("div",{staticStyle:{"margin-left":"40px"}},[e._v("反馈内容："+e._s(e.task.context))]),e._v(" "),a("div",{staticStyle:{"margin-left":"40px"}},[e._v("任务状态：已完成")])]),e._v(" "),a("el-form",{ref:"dataForm",staticStyle:{margin:"10px"},attrs:{model:e.dataForm,rules:e.dataRule},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.dataFormSubmit()}}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"确认完成",prop:"status",size:"small"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.dataForm.status,callback:function(t){e.$set(e.dataForm,"status",t)},expression:"dataForm.status"}},e._l(e.statusList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:14}},["1"==e.dataForm.status?a("el-form-item",{attrs:{label:"请对该任务进行评分",prop:"otherScore",size:"small"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.dataForm.otherScore,callback:function(t){e.$set(e.dataForm,"otherScore",t)},expression:"dataForm.otherScore"}},e._l(e.selefSecoreList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1):e._e()],1),e._v(" "),a("el-col",[a("el-form-item",{attrs:{label:"备注信息",size:"small"}},[a("el-input",{attrs:{size:"small",type:"textarea",rows:5,placeholder:"请输入备注信息"},model:{value:e.dataForm.comment,callback:function(t){e.$set(e.dataForm,"comment",t)},expression:"dataForm.comment"}})],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")]),e._v(" "),a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")])],1)],1)},staticRenderFns:[]};var s=a("VU/8")(r,o,!1,function(e){a("JNba")},"data-v-41c72504",null);t.default=s.exports},oZaA:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"sub-menu",props:{menu:{type:Object,required:!0},dynamicMenuRoutes:{type:Array,required:!0}},components:{SubMenu:l},computed:{sidebarLayoutSkin:{get:function(){return this.$store.state.common.sidebarLayoutSkin}}},methods:{gotoRouteHandle:function(e){var t=this.dynamicMenuRoutes.filter(function(t){return t.meta.menuId===e.menuId});t.length>=1&&this.$router.push({name:t[0].name})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.menu.list&&e.menu.list.length>=1?a("el-submenu",{attrs:{index:e.menu.menuId+"","popper-class":"site-sidebar--"+e.sidebarLayoutSkin+"-popper"}},[a("template",{slot:"title"},[a("icon-svg",{staticClass:"site-sidebar__menu-icon",attrs:{name:e.menu.icon||""}}),e._v(" "),a("span",[e._v(e._s(e.menu.name))])],1),e._v(" "),e._l(e.menu.list,function(t){return a("sub-menu",{key:t.menuId,attrs:{menu:t,dynamicMenuRoutes:e.dynamicMenuRoutes}})})],2):a("el-menu-item",{attrs:{index:e.menu.menuId+""},on:{click:function(t){e.gotoRouteHandle(e.menu)}}},[a("icon-svg",{staticClass:"site-sidebar__menu-icon",attrs:{name:e.menu.icon||""}}),e._v(" "),a("span",[e._v(e._s(e.menu.name))])],1)},staticRenderFns:[]},s=a("VU/8")(r,o,!1,null,null,null),l=t.default=s.exports}});