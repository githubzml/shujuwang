webpackJsonp([9],{"8q6S":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("IcnI"),n=i("u4v6"),l=i("vls+"),s={name:"deviceList",components:{topHeader:n.a},data:function(){return{exportDeviceShow:!1,checkResult:"",newDeviceShow:!1,dataPage:1,pageSize:100,tableCount:30,tableData:l.a,tableHeight:500,tableHead:[],lineNum:0,list:[{title:"线路名",key:"head3",minWidth:100,align:"center"},{title:"站点名",key:"head4",minWidth:100,align:"center"},{title:"网元名称",key:"head5",minWidth:100,align:"center"},{title:"设备名",key:"head14",minWidth:100,align:"center"},{title:"设备层次",key:"head13",minWidth:100,align:"center"},{title:"厂家",key:"head12",minWidth:100,align:"center"},{title:"设备类型",key:"head6",minWidth:100,align:"center"},{title:"IP地址",key:"head7",minWidth:100,align:"center"},{title:"MAC地址",key:"head8",minWidth:100,align:"center"},{title:"软件版本",key:"head10",minWidth:100,align:"center"},{title:"软件补丁",key:"head9",minWidth:100,align:"center"}]}},mounted:function(){var t=this;this.tableHeight=document.querySelectorAll(".deviceList>section")[0].clientHeight,window.addEventListener("resize",function(){setTimeout(function(){t.tableHeight=document.querySelectorAll(".deviceList>section")[0].clientHeight},200)})},computed:{skinStyle:function(){return a.a.state.skinStyle}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:"deviceList deviceList-"+t.skinStyle},[i("topHeader",{attrs:{tableHead:t.list},on:{exportHead:function(e){return t.tableHead=e}}},[i("Button",{staticStyle:{"margin-left":"10px"},attrs:{slot:"button1",type:"primary"},on:{click:function(e){t.newDeviceShow=!0}},slot:"button1"},[t._v("新增网元")]),t._v(" "),i("Button",{staticStyle:{"margin-left":"10px"},attrs:{slot:"button2",type:"primary"},on:{click:function(e){t.exportDeviceShow=!0}},slot:"button2"},[t._v("导入网元")])],1),t._v(" "),i("section",[i("Table",{attrs:{border:"",height:t.tableHeight,columns:t.tableHead,data:t.tableData}})],1),t._v(" "),i("footer",[i("Page",{attrs:{total:t.tableCount,size:"small",current:t.dataPage,"page-size":t.pageSize,"show-total":"","show-sizer":"","page-size-opts":[100,200,500]}})],1),t._v(" "),i("Modal",{attrs:{width:360,draggable:"",title:"新建网元"},on:{"on-cancel":function(e){t.checkResult="",t.lineNum=0},"on-ok":function(e){t.checkResult="",t.lineNum=0}},model:{value:t.newDeviceShow,callback:function(e){t.newDeviceShow=e},expression:"newDeviceShow"}},[i("div",{staticClass:"new_device"},[i("p",[i("span",[t._v("厂家：")]),t._v(" "),i("Input",{staticStyle:{width:"200px"}})],1),t._v(" "),i("p",[i("span",[t._v("IP地址：")]),t._v(" "),i("Input",{staticStyle:{width:"200px"}})],1),t._v(" "),i("p",[i("span",[t._v("设备层次：")]),t._v(" "),i("Select",{staticStyle:{width:"200px"},attrs:{value:"CR"}},[i("Option",{attrs:{value:"CR "}}),t._v(" "),i("Option",{attrs:{value:"RR"}}),t._v(" "),i("Option",{attrs:{value:"DR"}}),t._v(" "),i("Option",{attrs:{value:"AR"}}),t._v(" "),i("Option",{attrs:{value:"CE"}})],1)],1),t._v(" "),i("p",[i("span",[t._v("线路名：")]),t._v(" "),i("Input",{staticStyle:{width:"177px"}}),t._v(" "),i("b",{staticStyle:{display:"inline-block",width:"20px","text-align":"center",height:"28px","line-height":"26px",border:"1px solid #3ebce0",color:"#3ebce0",cursor:"pointer"},on:{click:function(e){t.lineNum++}}},[i("Icon",{attrs:{type:"md-add",size:16}})],1)],1),t._v(" "),t.lineNum>=1?i("p",[i("span",[t._v("备用线路1：")]),t._v(" "),i("Input",{staticStyle:{width:"200px"}})],1):t._e(),t._v(" "),t.lineNum>=2?i("p",[i("span",[t._v("备用线路2：")]),t._v(" "),i("Input",{staticStyle:{width:"200px"}})],1):t._e(),t._v(" "),t.lineNum>=3?i("p",[i("span",[t._v("备用线路3：")]),t._v(" "),i("Input",{staticStyle:{width:"200px"}})],1):t._e(),t._v(" "),t.lineNum>=4?i("p",[i("span",[t._v("备用线路4：")]),t._v(" "),i("Input",{staticStyle:{width:"200px"}})],1):t._e(),t._v(" "),t.lineNum>=5?i("p",[i("span",[t._v("备用线路5：")]),t._v(" "),i("Input",{staticStyle:{width:"200px"}})],1):t._e(),t._v(" "),i("p",[i("span",[t._v("设备名：")]),t._v(" "),i("Input",{staticStyle:{width:"200px"}})],1),t._v(" "),i("p",[i("span",[t._v("SNMP参数：")]),t._v(" "),i("Select",{staticStyle:{width:"200px"},attrs:{value:"SNMP V1:default"}},[i("Option",{attrs:{value:"SNMP V1:default"}}),t._v(" "),i("Option",{attrs:{value:"SNMP V2:default"}}),t._v(" "),i("Option",{attrs:{value:"SNMP V3:default"}})],1)],1),t._v(" "),i("p",[i("span",[t._v("Telnet/Stelnet：")]),t._v(" "),i("Select",{staticStyle:{width:"200px"},attrs:{value:"模板1"}},[i("Option",{attrs:{value:"模板1"}}),t._v(" "),i("Option",{attrs:{value:"模板2"}}),t._v(" "),i("Option",{attrs:{value:"模板3"}})],1)],1),t._v(" "),i("p",{staticStyle:{"line-height":"40px",overflow:"hidden"}},[i("Button",{staticStyle:{"margin-left":"64px"},attrs:{type:"primary"},on:{click:function(e){t.checkResult="测试通过"}}},[t._v("测试")]),t._v(" "),i("i",{staticStyle:{"margin-left":"10px",color:"#50eee5"}},[t._v(t._s(t.checkResult))])],1),t._v(" "),i("p",[i("span",[t._v("网元名称：")]),t._v(" "),i("Input",{staticStyle:{width:"200px"}})],1),t._v(" "),i("p",[i("span",[t._v("设备类型：")]),t._v(" "),i("Input",{staticStyle:{width:"200px"}})],1)])]),t._v(" "),i("Modal",{attrs:{width:360,draggable:"",title:"导入网元"},on:{"on-cancel":function(t){},"on-ok":function(t){}},model:{value:t.exportDeviceShow,callback:function(e){t.exportDeviceShow=e},expression:"exportDeviceShow"}},[i("div",{staticClass:"export_device"},[i("p",[i("span",[t._v("SNMP参数：")]),t._v(" "),i("Select",{staticStyle:{width:"210px"},attrs:{value:"SNMP V1:default"}},[i("Option",{attrs:{value:"SNMP V1:default"}}),t._v(" "),i("Option",{attrs:{value:"SNMP V2:default"}}),t._v(" "),i("Option",{attrs:{value:"SNMP V3:default"}})],1)],1),t._v(" "),i("p",[i("span",[t._v("Telnet/Stelnet：")]),t._v(" "),i("Select",{staticStyle:{width:"210px"},attrs:{value:"模板1"}},[i("Option",{attrs:{value:"模板1"}}),t._v(" "),i("Option",{attrs:{value:"模板2"}}),t._v(" "),i("Option",{attrs:{value:"模板3"}})],1)],1),t._v(" "),i("p",{staticStyle:{margin:"10px 0",overflow:"hidden"}},[i("Button",{staticStyle:{float:"right"},attrs:{type:"primary"}},[t._v("模板下载")])],1),t._v(" "),i("p",[i("Upload",{attrs:{multiple:"",type:"drag",action:"/"}},[i("div",{staticStyle:{padding:"20px 0"}},[i("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"36"}}),t._v(" "),i("p",[t._v("点击或拖入文件")])],1)])],1)])])],1)},staticRenderFns:[]};var o=i("C7Lr")(s,c,!1,function(t){i("LKHW"),i("o7kY")},"data-v-cf9956fa",null);e.default=o.exports},LKHW:function(t,e){},o7kY:function(t,e){}});