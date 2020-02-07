(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9193"],{"8ba4":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-col",{attrs:{span:24}},[a("base-card",[a("avue-crud",{ref:"crud",attrs:{option:e.listOption,data:e.listData,page:e.page,"table-loading":e.loading},on:{"on-load":e.list,"row-save":e.listAdd,"row-del":e.listDelete,"row-update":e.listUpdate,"search-reset":e.searchReset,"search-change":e.searchChange,"refresh-change":e.refreshChange,"size-change":e.sizeChange,"current-change":e.currentChange},model:{value:e.listForm,callback:function(t){e.listForm=t},expression:"listForm"}})],1)],1)},n=[],r=(a("d3b7"),a("e285")),s=a("0e0b"),l={data:function(){return{query:{},listForm:{},listData:[],listOption:{tip:!1,index:!0,stripe:!0,border:!0,viewBtn:!0,height:664,align:"center",column:[{label:"设备",prop:"name",span:24,search:!0,searchSpan:5,rules:[{required:!0,message:"请输入 设备名称",trigger:"blur"},{min:2,max:32,message:"请输入 2~32 位字长的设备名称",trigger:"blur"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"请输入 正确格式的设备名称"}]},{label:"编码",prop:"code",width:300,search:!0,searchSpan:5,disabled:!0},{label:"状态",prop:"status",width:80,search:!0,searchSpan:4,disabled:!0,type:"select",searchFilterable:!0,value:2,dicData:[{label:"离线",value:0},{label:"在线",value:1},{label:"维护",value:2},{label:"故障",value:3},{label:"失效",value:4}]},{label:"所属模板",prop:"profileId",search:!0,searchSpan:5,type:"tree",dicData:[],defaultExpandAll:!0,rules:[{required:!0,message:"请选择使用模板",trigger:"click"}]},{label:"所属分组",prop:"groupId",width:150,search:!0,searchSpan:5,type:"select",filterable:!0,searchFilterable:!0,dicData:[],rules:[{required:!0,message:"请选择所属分组",trigger:"click"}]},{label:"备注",prop:"description",width:200,span:24,type:"textarea",overHidden:!0,rules:[{max:380,message:"最多输入380个字符",trigger:"blur"}]},{label:"修改日期",prop:"updateTime",width:155,span:12,disabled:!0,type:"date",format:"yyyy-MM-dd HH:mm:ss",valueFormat:"yyyy-MM-dd HH:mm:ss"},{label:"创建日期",prop:"createTime",width:155,span:12,disabled:!0,type:"date",format:"yyyy-MM-dd HH:mm:ss",valueFormat:"yyyy-MM-dd HH:mm:ss"}]},loading:!0,page:{total:0,pageSize:20,currentPage:1}}},created:function(){this.group(),this.profile()},methods:{list:function(e){var t=this;this.loading=!0,r["b"].list(Object.assign({page:{current:e.currentPage,size:e.pageSize}},this.query)).then((function(e){var a=e.data;t.page.total=a.total,t.listData=a.records})).finally((function(){t.loading=!1}))},group:function(){var e=this;r["d"].dictionary().then((function(t){e.listOption.column[e.$refs.crud.findColumnIndex("groupId")].dicData=t.data})).catch((function(e){console.log(e)}))},profile:function(){var e=this;r["g"].dictionary().then((function(t){e.listOption.column[e.$refs.crud.findColumnIndex("profileId")].dicData=t.data})).catch((function(e){console.log(e)}))},listAdd:function(e,t,a){var i=this;r["b"].add(e).then((function(){a(),i.list(i.page),Object(s["a"])()})).finally((function(){t()}))},listDelete:function(e){var t=this;this.$confirm("是否删除该条数据？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return r["b"].delete(e.id)})).then((function(){t.list(t.page),Object(s["a"])()}))},listUpdate:function(e,t,a,i){var n=this;r["b"].update(e).then((function(){i(),n.list(n.page),Object(s["a"])()})).finally((function(){a()}))},refreshChange:function(){this.list(this.page)},currentChange:function(e){this.page.currentPage=e},sizeChange:function(e){this.page.pageSize=e},searchChange:function(e,t){this.query=e,this.list(this.page),t()},searchReset:function(){this.query={},this.list(this.page)}}},c=l,o=a("2877"),u=Object(o["a"])(c,i,n,!1,null,null,null);t["default"]=u.exports}}]);