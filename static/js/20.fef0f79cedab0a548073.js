webpackJsonp([20],{uZZ0:function(t,e){},vYCd:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("IcnI"),a={props:{isShow:Number},data:function(){return{tableHeight:0,editModal:!1,columns:[{title:"序号",type:"index",align:"center",minWidth:30},{title:"模板名称",key:"templateName",align:"center",minWidth:100},{title:"协议名称",key:"agreementName",align:"center",minWidth:100},{title:"端口",key:"port",align:"center",minWidth:100},{title:"登录用户",key:"loginUser",align:"center",minWidth:100},{title:"登录口令",key:"loginCommand",align:"center",minWidth:100},{title:"登录超时(秒)",key:"loginTimeout",align:"center",minWidth:100},{title:"响应超时(秒)",key:"resTimeout",align:"center",minWidth:100}],tableList:[]}},methods:{addEvent:function(){this.editModal=!0},getDataList:function(){for(var t=0;t<9;t++)this.tableList.push({templateName:"模板名称"+t,agreementName:"协议名称"+t,port:"端口"+t,loginUser:"登录用户"+t,loginCommand:"登录口令"+t,loginTimeout:"登录超时"+t,resTimeout:"响应超时"+t})}},computed:{skinStyle:function(){return n.a.state.skinStyle}},mounted:function(){var t=this;if(this.isShow)this.tableHeight=400;else{var e=document.body.clientHeight;this.tableHeight=e-130,window.addEventListener("resize",function(){var e=document.body.clientHeight;t.tableHeight=e-130})}this.getDataList()}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:"telnetTemplate telnetTemplate-"+t.skinStyle},[i("div",{staticClass:"setting"},[i("ul",[i("li",[i("span",[t._v("模板名称：")]),t._v(" "),i("i-select")],1)]),t._v(" "),1!==t.isShow?i("div",{staticClass:"btn"},[i("i-button",{attrs:{type:"primary"},on:{click:t.addEvent}},[t._v("创建")]),t._v(" "),i("i-button",{attrs:{type:"primary"}},[t._v("删除")])],1):t._e()]),t._v(" "),i("div",{staticClass:"tab"},[i("div",{staticClass:"tab-table"},[i("i-table",{attrs:{"highlight-row":"",border:"",columns:t.columns,data:t.tableList,height:t.tableHeight}})],1)]),t._v(" "),i("Modal",{attrs:{draggable:"",title:"创建"},model:{value:t.editModal,callback:function(e){t.editModal=e},expression:"editModal"}},[i("ul",{staticClass:"modal1"},[i("li",[i("span",[t._v("协议名称：")]),t._v(" "),i("i-select")],1),t._v(" "),i("li",[i("span",[t._v("模板名称：")]),t._v(" "),i("i-input",{staticStyle:{flex:"1.5"}})],1),t._v(" "),i("li",[i("span",[t._v("端口：")]),t._v(" "),i("i-input",{staticStyle:{flex:"1.5"}})],1),t._v(" "),i("li",[i("span",[t._v("登录超时(秒)：")]),t._v(" "),i("i-input",{staticStyle:{flex:"1.5"}})],1),t._v(" "),i("li",[i("span",[t._v("响应超时(秒)：")]),t._v(" "),i("i-input",{staticStyle:{flex:"1.5"}})],1),t._v(" "),i("li",[i("span",[t._v("登录用户：")]),t._v(" "),i("i-input",{staticStyle:{flex:"1.5"}})],1),t._v(" "),i("li",[i("span",[t._v("登录口令：")]),t._v(" "),i("i-input",{staticStyle:{flex:"1.5"}})],1)])])],1)},staticRenderFns:[]};var s=i("C7Lr")(a,l,!1,function(t){i("uZZ0")},"data-v-120e66c6",null);e.default=s.exports}});