webpackJsonp([2,9,26],{"5kaU":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("0xDb");var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"任务反馈","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"反馈内容",size:"small"}}),t._v(" "),a("el-input",{attrs:{size:"small",type:"textarea",rows:5,placeholder:"请输入反馈内容"},model:{value:t.dataForm.context,callback:function(e){t.$set(t.dataForm,"context",e)},expression:"dataForm.context"}}),t._v(" "),a("el-form",{staticClass:"demo-form-inline",staticStyle:{margin:"10px"},attrs:{inline:!0,model:t.dataForm}},[a("el-form-item",{attrs:{label:"状态",prop:"status",size:"small"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.dataForm.status,callback:function(e){t.$set(t.dataForm,"status",e)},expression:"dataForm.status"}},t._l(t.statusList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),"1"==t.dataForm.status?a("el-form-item",{attrs:{label:"自我评分",prop:"selfScore",size:"small"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.dataForm.selfScore,callback:function(e){t.$set(t.dataForm,"selfScore",e)},expression:"dataForm.selfScore"}},t._l(t.selefSecoreList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1):t._e()],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")]),t._v(" "),a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")])],1)],1)},staticRenderFns:[]},i=a("VU/8")({data:function(){return{visible:!1,menuList:[],statusList:[{value:"0",label:"未完成"},{value:"1",label:"已完成"}],selefSecoreList:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"}],menuListTreeProps:{label:"name",children:"children"},dataForm:{id:0,taskId:"",context:"",curTime:"",submitter:"",status:"",read:"",comment:"",selfScore:"7"},dataRule:{context:[{required:!0,message:"反馈内容不能为空",trigger:"blur"}],status:[{required:!0,message:"状态不能为空",trigger:"blur"}],selfScore:[{required:!0,message:"自我评分不能为空",trigger:"blur"}]},tempKey:-666666}},methods:{init:function(t){this.dataForm.id=t||0,this.visible=!0,this.dataForm.status="",this.dataForm.context="",this.dataForm.taskId=t,this.$nextTick(function(){})},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&t.$http({url:t.$http.adornUrl("/generator/taskfeedback/save"),method:"post",data:t.$http.adornData({context:t.dataForm.context,status:t.dataForm.status,selfScore:0==t.dataForm.status?"":t.dataForm.selfScore,taskId:t.dataForm.taskId})}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}}):t.$message.error(a.msg)})})}}},s,!1,null,null,null);e.default=i.exports},"8/mv":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("IiWk"),i=a("5kaU"),n=a("Xr+F"),r={data:function(){return{dataForm:{key:"",theme:"",billNo:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1,taskFeedbackAddOrUpdateVisible:!1,taskConfirmVisible:!1}},components:{AddOrUpdate:s.default,TaskFeedbackAddOrUpdate:i.default,TaskConfirm:n.default},activated:function(){this.getDataList()},methods:{getDataList:function(){var t=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/generator/task/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,billNo:this.dataForm.billNo,theme:this.dataForm.theme})}).then(function(e){var a=e.data;a&&0===a.code?(t.dataList=a.page.list,t.totalPage=a.page.totalCount):(t.dataList=[],t.totalPage=0),t.dataListLoading=!1})},sizeChangeHandle:function(t){this.pageSize=t,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(t){this.pageIndex=t,this.getDataList()},selectionChangeHandle:function(t){this.dataListSelections=t},addOrUpdateHandle:function(t){var e=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){e.$refs.addOrUpdate.init(t)}),this.$router.push({name:"task-add"})},confirm:function(t){var e=this;this.taskConfirmVisible=!0,this.$nextTick(function(){e.$refs.taskConfirm.init(t,!1)})},detail:function(t){var e=this;this.taskConfirmVisible=!0,this.$nextTick(function(){e.$refs.taskConfirm.init(t,!0)})},feedback:function(t){var e=this;this.taskFeedbackAddOrUpdateVisible=!0,this.$nextTick(function(){console.log(t),e.$refs.taskFeedbackAddOrUpdate.init(t)})},feedbackList:function(t){this.$router.push({name:"task-feedback",query:{taskId:t.id,creator:t.creator}})},issue:function(t){this.$router.push({name:"task-add",query:{taskId:t}})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"请输入任务单号",clearable:""},model:{value:t.dataForm.billNo,callback:function(e){t.$set(t.dataForm,"billNo",e)},expression:"dataForm.billNo"}})],1),t._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"请输入任务主题",clearable:""},model:{value:t.dataForm.theme,callback:function(e){t.$set(t.dataForm,"theme",e)},expression:"dataForm.theme"}})],1),t._v(" "),a("el-form-item",[a("el-button",{on:{click:function(e){t.getDataList()}}},[t._v("查询")]),t._v(" "),t.isAuth("generator:task:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.issue()}}},[t._v("新增")]):t._e()],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""},on:{"selection-change":t.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"billNo","header-align":"center",align:"center",label:"任务单号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"theme","header-align":"center",align:"center",label:"任务主题"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status","header-align":"center",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.status?a("span",{staticStyle:{"margin-left":"10px",color:"#ff0000cf"}},[t._v("待确认")]):t._e(),t._v(" "),1==e.row.status?a("span",{staticStyle:{"margin-left":"10px",color:"#67c23a"}},[t._v("进行中")]):t._e(),t._v(" "),2==e.row.status?a("span",{staticStyle:{"margin-left":"10px",color:"#999"}},[t._v("已完成")]):t._e(),t._v(" "),3==e.row.status?a("span",{staticStyle:{"margin-left":"10px",color:"#f3b016e0"}},[t._v("延期")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"startTime","header-align":"center",align:"center",label:"计划开始时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"endTime","header-align":"center",align:"center",label:"计划结束时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"username","header-align":"center",align:"center",label:"任务发布人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"deptName","header-align":"center",align:"center",label:"所属部门"}}),t._v(" "),a("el-table-column",{attrs:{prop:"deptName","header-align":"center",align:"center",label:"综合评分"},scopedSlots:t._u([{key:"default",fn:function(e){return[null!=e.row.otherScore&&""!=e.row.otherScore?a("span",[t._v(t._s((e.row.otherScore+e.row.selfScore)/2))]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"300",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.$store.state.user.id!=e.row.creator&&0==e.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.confirm(e.row)}}},[t._v("确认")]):t._e(),t._v(" "),t.$store.state.user.id!=e.row.creator&&2!=e.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.feedback(e.row.id)}}},[t._v("任务反馈")]):t._e(),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.feedbackList(e.row)}}},[t._v("反馈记录")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.detail(e.row)}}},[t._v("查看明细")]),t._v(" "),t.$store.state.user.id!=e.row.creator&&0==e.row.parentId?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.issue(e.row.id)}}},[t._v("分发")]):t._e()]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10,20,50,100],"page-size":t.pageSize,total:t.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}}),t._v(" "),t.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.getDataList}}):t._e(),t._v(" "),t.taskFeedbackAddOrUpdateVisible?a("task-feedback-add-or-update",{ref:"taskFeedbackAddOrUpdate",on:{refreshDataList:t.getDataList}}):t._e(),t._v(" "),t.taskConfirmVisible?a("task-confirm",{ref:"taskConfirm",on:{refreshDataList:t.getDataList}}):t._e()],1)},staticRenderFns:[]},o=a("VU/8")(r,l,!1,null,null,null);e.default=o.exports},"Xr+F":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("0xDb");var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.isDetail?"任务明细":"任务确认","close-on-click-modal":!1,visible:t.visible,width:"40%",center:!0,model:t.taskData},on:{"update:visible":function(e){t.visible=e}}},[a("div",{staticClass:"task"},[a("div",{staticClass:"row"},[a("div",{staticClass:"name"},[t._v("任务编号:")]),t._v(" "),a("div",{staticClass:"term"},[t._v(t._s(t.taskData.billNo))]),t._v(" "),a("div",{staticClass:"name"},[t._v("任务主题:")]),t._v(" "),a("div",{staticClass:"term"},[t._v(t._s(t.taskData.theme))])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"name"},[t._v("计划开始:")]),t._v(" "),a("div",{staticClass:"term"},[t._v(t._s(t.taskData.startTime))]),t._v(" "),a("div",{staticClass:"name"},[t._v("紧急程度:")]),t._v(" "),a("div",{staticClass:"term"},[1==t.taskData.emergency?a("span",[t._v("一般")]):t._e(),t._v(" "),2==t.taskData.emergency?a("span",[t._v("重要")]):t._e(),t._v(" "),3==t.taskData.emergency?a("span",[t._v("紧急")]):t._e()])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"name"},[t._v("计划结束:")]),t._v(" "),a("div",{staticClass:"term"},[t._v(t._s(t.taskData.endTime))]),t._v(" "),a("div",{staticClass:"name"},[t._v("反馈频率:")]),t._v(" "),a("div",{staticClass:"term"},[t._v(t._s(t.taskData.frequency)+" 天/次")])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"name"},[t._v("任务内容:")]),t._v(" "),a("div",{staticClass:"task_content"},[t._v("\n        "+t._s(t.taskData.context)+"\n      ")])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"name"},[t._v("任务目标:")]),t._v(" "),a("div",{staticClass:"task_target"},[t._v(t._s(t.taskData.target))])])]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t.isDetail?a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.visible=!1}}},[t._v("关闭")]):a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)])},staticRenderFns:[]};var i=a("VU/8")({props:["task"],data:function(){return{visible:!1,centerDialogVisible:!0,menuList:[],statusList:[{value:"0",label:"待确认"},{value:"1",label:"进行中"},{value:"2",label:"已完成"},{value:"4",label:"延期"}],menuListTreeProps:{label:"name",children:"children"},taskData:{billNo:"q23",theme:"",startTime:"",emergency:"",endTime:"",frequency:"",context:"",target:""},dataRule:{context:[{required:!0,message:"反馈内容不能为空",trigger:"blur"}]},isDetail:!1,tempKey:-666666}},methods:{init:function(t,e){this.taskData.id=t.id||0,this.visible=!0,this.taskData=t,this.isDetail=e,this.$nextTick(function(){})},dataFormSubmit:function(){var t=this;this.$http({url:this.$http.adornUrl("/generator/taskfeedback/update-task-status"),method:"get",params:this.$http.adornParams({taskId:this.taskData.id})}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}}):t.$message.error(a.msg)})}}},s,!1,function(t){a("mdc+")},"data-v-a292f4ba",null);e.default=i.exports},kApm:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.task[data-v-a292f4ba] {\n  /*margin: 0 auto;*/\n  /*width: 89%;*/\n  /*border: 1px solid red;*/\n}\n.task_content[data-v-a292f4ba],\n.task_target[data-v-a292f4ba],\n.term[data-v-a292f4ba] {\n  font-size: 12px;\n  color: #000;\n}\n.task_content[data-v-a292f4ba] {\n  word-wrap: break-word;\n  word-break: break-all;\n  overflow: hidden;\n  padding: 3px 2px;\n  margin-top: 8px;\n}\n.name[data-v-a292f4ba] {\n  width: 70px;\n  margin: 1px;\n  font-size: 12px;\n  color: #909399;\n}\n.term[data-v-a292f4ba] {\n  width: 35%;\n}\n.term[data-v-a292f4ba],\n.name[data-v-a292f4ba],\n.task_content[data-v-a292f4ba],\n.task_target[data-v-a292f4ba] {\n  display: table-cell;\n  padding: 1px;\n}\n.row[data-v-a292f4ba] {\n  padding: 5px;\n}\n",""])},"mdc+":function(t,e,a){var s=a("kApm");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("60ecbc88",s,!0)}});