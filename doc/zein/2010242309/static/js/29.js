webpackJsonp([29],{qD4a:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{billNo:"",type:"",theme:"",emergency:"",taskTime:"",startTime:"",endTime:"",frequency:"",context:"",target:"",msgWays:[],msgWay:"",designators:[],designatorNames:"",parentId:0,finished:"",status:""},dataRule:{billNo:[{required:!0,message:"任务单号不能为空",trigger:"blur"}],theme:[{required:!0,message:"任务主题不能为空",trigger:"blur"}],emergency:[{required:!0,message:"紧急程度不能为空",trigger:"blur"}],taskTime:[{required:!0,message:"任务时间不能为空",trigger:"blur"}],frequency:[{required:!0,message:"反馈频率不能为空",trigger:"blur"}],designatorNames:[{required:!0,message:"任务负责人不能为空",trigger:"blur"}],context:[{required:!0,message:"任务内容不能为空",trigger:"blur"}],target:[{required:!0,message:"任务目标不能为空",trigger:"blur"}],creator:[{required:!0,message:"创建人不能为空",trigger:"blur"}],parentId:[{required:!0,message:"父任务ID不能为空",trigger:"blur"}]},emergencyOptions:[{value:"1",label:"一般"},{value:"2",label:"重要"},{value:"3",label:"紧急"}],frequencyOptions:[{value:"1",label:"1天"},{value:"2",label:"2天"},{value:"3",label:"3天"},{value:"4",label:"4天"},{value:"5",label:"5天"}],gridData:[{id:"1",number:"001",name:"张三",deptName:"研发部"},{id:"2",number:"003",name:"李四",deptName:"人事部"},{id:"3",number:"003",name:"王五",deptName:"产品部"}],dialogTableVisible:!1,multipleSelection:[],tempMultipleSelection:[],taskId:""}},activated:function(){var e=this;console.log("activated:"+this.$route.query.taskId),this.$route.query.taskId&&(this.dataForm.parentId=this.$route.query.taskId),this.$http({url:this.$http.adornUrl("/generator/task/generator/"+this.dataForm.parentId),method:"get",params:this.$http.adornParams()}).then(function(t){var a=t.data;console.log(a),e.dataForm.billNo=a.taskNo}),this.$http({url:this.$http.adornUrl("/generator/task/designators"),method:"get",params:this.$http.adornParams()}).then(function(t){var a=t.data;console.log(a),e.gridData=a.data})},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http({url:t.$http.adornUrl("/generator/task/info/"+t.dataForm.id),method:"get",params:t.$http.adornParams()}).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.billNo=a.task.billNo,t.dataForm.type=a.task.type,t.dataForm.theme=a.task.theme,t.dataForm.emergency=a.task.emergency,t.dataForm.startTime=a.task.startTime,t.dataForm.endTime=a.task.endTime,t.dataForm.frequency=a.task.frequency,t.dataForm.context=a.task.context,t.dataForm.target=a.task.target,t.dataForm.creator=a.task.creator,t.dataForm.createTime=a.task.createTime,t.dataForm.updater=a.task.updater,t.dataForm.updateTime=a.task.updateTime,t.dataForm.level=a.task.level,t.dataForm.parentId=a.task.parentId,t.dataForm.finished=a.task.finished,t.dataForm.status=a.task.status,t.dataForm.msgWay=a.task.msgWay)})})},dataFormSubmit:function(){var e=this;console.log(this.dataForm.msgWays),this.dataForm.msgWay=this.dataForm.msgWays.toString(),this.dataForm.startTime=this.dataForm.taskTime[0],this.dataForm.endTime=this.dataForm.taskTime[1],this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/generator/task/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,billNo:e.dataForm.billNo,type:e.dataForm.type,theme:e.dataForm.theme,emergency:e.dataForm.emergency,startTime:e.dataForm.startTime,endTime:e.dataForm.endTime,frequency:e.dataForm.frequency,context:e.dataForm.context,target:e.dataForm.target,creator:e.dataForm.creator,createTime:e.dataForm.createTime,updater:e.dataForm.updater,updateTime:e.dataForm.updateTime,level:e.dataForm.level,parentId:e.dataForm.parentId,finished:e.dataForm.finished,status:e.dataForm.status,msgWay:e.dataForm.msgWay,designators:e.dataForm.designators})}).then(function(t){var a=t.data;a&&0===a.code?(e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}),e.$router.push({name:"generator-task"}),location.reload()):e.$message.error(a.msg)})})},removeTabHandle:function(e){var t=this;if(this.mainTabs=this.mainTabs.filter(function(t){return t.name!==e}),this.mainTabs.length>=1){if(e===this.mainTabsActiveName){var a=this.mainTabs[this.mainTabs.length-1];this.$router.push({name:a.name,query:a.query,params:a.params},function(){t.mainTabsActiveName=t.$route.name})}}else this.menuActiveName="",this.$router.push({name:"home"})},selectionChangeHandle:function(e){console.log("手动选中"),console.log(e),this.multipleSelection=e},toggleSelection:function(){console.log("初始化"),console.log(this.multipleSelection),this.dialogTableVisible=!0},confirmMultipleSelection:function(){console.log("确认"),this.dataForm.designatorNames=this.multipleSelection.map(function(e){return e.name}).toString(),this.dataForm.designators=this.multipleSelection.map(function(e){return e.id}),this.dialogTableVisible=!1}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"100px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.dataFormSubmit()}}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"任务单号",prop:"billNo"}},[a("el-input",{attrs:{placeholder:"任务单号",disabled:""},model:{value:e.dataForm.billNo,callback:function(t){e.$set(e.dataForm,"billNo",t)},expression:"dataForm.billNo"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"任务主题",prop:"theme"}},[a("el-input",{attrs:{placeholder:"任务主题"},model:{value:e.dataForm.theme,callback:function(t){e.$set(e.dataForm,"theme",t)},expression:"dataForm.theme"}})],1)],1),e._v(" "),a("el-col",{staticStyle:{height:"58px"},attrs:{span:12}},[a("el-form-item",{attrs:{label:"任务时间",prop:"taskTime"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:e.dataForm.taskTime,callback:function(t){e.$set(e.dataForm,"taskTime",t)},expression:"dataForm.taskTime"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"反馈频率",prop:"frequency"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.dataForm.frequency,callback:function(t){e.$set(e.dataForm,"frequency",t)},expression:"dataForm.frequency"}},e._l(e.frequencyOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"紧急程度",prop:"emergency"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.dataForm.emergency,callback:function(t){e.$set(e.dataForm,"emergency",t)},expression:"dataForm.emergency"}},e._l(e.emergencyOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("el-col",{staticStyle:{height:"58px"},attrs:{span:12}},[a("el-form-item",{attrs:{label:"消息提示"}},[a("el-checkbox-group",{model:{value:e.dataForm.msgWays,callback:function(t){e.$set(e.dataForm,"msgWays",t)},expression:"dataForm.msgWays"}},[a("el-checkbox",{key:"email",attrs:{label:"邮件提醒",name:"email"}}),e._v(" "),a("el-checkbox",{key:"sms",attrs:{label:"短信提醒",name:"sms"}}),e._v(" "),a("el-checkbox",{key:"voice",attrs:{label:"语音呼叫",name:"voice"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"任务负责人",prop:"designatorNames"}},[a("el-col",{attrs:{span:20}},[a("el-input",{attrs:{placeholder:"请指派任务负责人",disabled:""},model:{value:e.dataForm.designatorNames,callback:function(t){e.$set(e.dataForm,"designatorNames",t)},expression:"dataForm.designatorNames"}})],1),e._v(" "),a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:4}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.toggleSelection()}}},[e._v("指派")])],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"任务内容",prop:"context"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:6,maxRows:12},placeholder:"请输入内容"},model:{value:e.dataForm.context,callback:function(t){e.$set(e.dataForm,"context",t)},expression:"dataForm.context"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"任务目标",prop:"target"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:6,maxRows:12},placeholder:"请输入内容"},model:{value:e.dataForm.target,callback:function(t){e.$set(e.dataForm,"target",t)},expression:"dataForm.target"}})],1)],1)],1),e._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("保存")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"任务负责人",visible:e.dialogTableVisible,center:""},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("el-table",{ref:"multipleTable",attrs:{data:e.gridData,border:""},on:{select:e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{property:"id",label:"序号",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{property:"number",label:"员工编号",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{property:"name",label:"员工姓名",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{property:"deptName",label:"所在部门",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{property:"address",label:"地址"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogTableVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.confirmMultipleSelection()}}},[e._v("确认")])],1)],1)],1)},staticRenderFns:[]},o=a("VU/8")(r,l,!1,null,null,null);t.default=o.exports}});