webpackJsonp([23],{"8qY5":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("IcnI"),i={name:"ipPlan",data:function(){return{tabHeight:0,columns1:[{type:"selection",align:"center"},{title:"IP地址",key:"IPAddress",align:"center",minWidth:100},{title:"子网掩码",key:"subnetMask",align:"center",minWidth:100},{title:"地址池",key:"addressPool",align:"center",minWidth:100},{title:"使用数",key:"usedNum",align:"center",minWidth:60},{title:"规划数",key:"planNum",align:"center",minWidth:60},{title:"空闲数",key:"freeNum",align:"center",minWidth:60},{title:"备注",key:"mask",align:"center",minWidth:200}],columns2:[{title:"序号",type:"index",align:"center"},{title:"IP范围",key:"IPRange",align:"center",minWidth:160},{title:"IP数量",key:"IPNum",align:"center",minWidth:60},{title:"地址类型",key:"addressType",align:"center",minWidth:180},{title:"规划时间",key:"planTime",align:"center",minWidth:140},{title:"规划人",key:"planPerson",align:"center",minWidth:100},{title:"备注",key:"remark",align:"center",minWidth:160}],avaliableInfoData:[],planRecordData:[],addressTypeId:"",maskId:"",addressPoolId:"",addressTypeArray:[],maskArray:[],addressPoolArray:[],addPlan:!1,addPlanTitle:"",dateTime:new Date,planPerson:"",remark:""}},methods:{getAddressTypeData:function(){this.addressTypeArray.push({addressTypeId:"1",addressTypeName:"管理地址"},{addressTypeId:"2",addressTypeName:"接口地址"},{addressTypeId:"3",addressTypeName:"业务地址"})},getMaskData:function(){this.maskArray.push({maskId:"1",maskName:"27"},{maskId:"2",maskName:"28"})},getAddressPoolData:function(){this.addressPoolArray.push({addressPoolId:"1",addressPoolName:"10.50.0.1~10.50.1.255"})},getIPInfoTab:function(){for(var t=0;t<10;t++)this.avaliableInfoData.push({IPAddress:"10.50.0.1",subnetMask:"255.255.255.252",addressPool:"10.50.0.1~10.50.1.255",usedNum:"155",planNum:"255",freeNum:"255",mask:"B网元12- LE3业务IP地址"+t})},getPlanRecordTab:function(){for(var t=0;t<2;t++)this.planRecordData.push({IPRange:"10.237.30.176 ~ 10.237.30.179",IPNum:"4",addressType:"管理地址",planTime:"2019-10-30",planPerson:"张三",remark:"B客专线申请设备管理地址"})},addPlanEvent:function(){this.addPlan=!0,this.addPlanTitle="加入规划"},saveData:function(){}},computed:{skinStyle:function(){return s.a.state.skinStyle}},mounted:function(){var t=this,e=document.body.clientHeight;this.tabHeight=(e-190)/2,window.addEventListener("resize",function(){var e=document.body.clientHeight;t.tabHeight=(e-190)/2}),this.getIPInfoTab(),this.getPlanRecordTab(),this.getAddressTypeData(),this.getMaskData(),this.getAddressPoolData()}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"ipPlan ipPlan-"+t.skinStyle},[a("div",{staticClass:"setting"},[a("ul",[a("li",[a("span",[t._v("IP地址类型：")]),t._v(" "),a("i-select",{staticStyle:{width:"100px"},attrs:{filterable:"",clearable:""},model:{value:t.addressTypeId,callback:function(e){t.addressTypeId=e},expression:"addressTypeId"}},t._l(t.addressTypeArray,function(e){return a("Option",{key:e.addressTypeId,attrs:{value:e.addressTypeId}},[t._v(t._s(e.addressTypeName))])}),1)],1),t._v(" "),a("li",[a("span",[t._v("需求数量：")]),t._v(" "),a("Input",{staticStyle:{width:"60px"},attrs:{type:"text"}})],1),t._v(" "),a("li",[a("span",[t._v("掩码：")]),t._v(" "),a("i-select",{staticStyle:{width:"100px"},attrs:{filterable:"",clearable:""},model:{value:t.maskId,callback:function(e){t.maskId=e},expression:"maskId"}},t._l(t.maskArray,function(e){return a("Option",{key:e.maskId,attrs:{value:e.maskId}},[t._v(t._s(e.maskName))])}),1)],1),t._v(" "),a("li",[a("span",[t._v("IP地址段：")]),t._v(" "),a("Input",{staticStyle:{width:"120px"},attrs:{type:"text"}}),t._v(" "),a("i-select",{staticStyle:{width:"60px"},attrs:{filterable:"",clearable:""},model:{value:t.addressPoolId,callback:function(e){t.addressPoolId=e},expression:"addressPoolId"}})],1)]),t._v(" "),a("div",{staticClass:"btn"},[a("i-button",{staticClass:"search-btn",attrs:{type:"primary"}},[t._v("查询")]),t._v(" "),a("i-button",{staticClass:"addplan-btn",attrs:{type:"primary"},on:{click:t.addPlanEvent}},[t._v("加入规划")])],1)]),t._v(" "),a("div",{staticClass:"dataTable"},[a("div",{staticClass:"toptable"},[a("span",{staticClass:"title"},[t._v("可用IP信息")]),t._v(" "),a("i-table",{attrs:{"highlight-row":"",border:"",height:t.tabHeight,columns:t.columns1,data:t.avaliableInfoData}})],1),t._v(" "),a("div",{staticClass:"bottable"},[a("span",{staticClass:"title"},[t._v("规划记录")]),t._v(" "),a("i-table",{attrs:{"highlight-row":"",border:"",height:t.tabHeight,columns:t.columns2,data:t.planRecordData}})],1)]),t._v(" "),a("Modal",{attrs:{draggable:"",title:t.addPlanTitle,width:"400"},on:{"on-ok":t.saveData},model:{value:t.addPlan,callback:function(e){t.addPlan=e},expression:"addPlan"}},[a("ul",{staticClass:"addPlanForm"},[a("li",[a("span",[t._v("提交日期：")]),t._v(" "),a("DatePicker",{staticStyle:{width:"160px"},attrs:{type:"date",value:t.dateTime}})],1),t._v(" "),a("li",[a("span",[t._v("规划人：")]),t._v(" "),a("i-input",{staticStyle:{width:"160px"},attrs:{value:t.planPerson}})],1),t._v(" "),a("li",[a("span",[t._v("备注：")]),t._v(" "),a("i-input",{staticStyle:{width:"160px"},attrs:{type:"textarea",row:"5",value:t.remark}})],1)])])],1)},staticRenderFns:[]};var d=a("C7Lr")(i,n,!1,function(t){a("g85J")},"data-v-00acf4f5",null);e.default=d.exports},g85J:function(t,e){}});