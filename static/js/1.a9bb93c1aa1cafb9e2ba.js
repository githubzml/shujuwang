webpackJsonp([1],{MdI1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("IcnI"),l={name:"HelloWorld",data:function(){return{Switch:!1,style:"",tableData:[],data1:[{title:"parent 1",expand:!0,children:[{title:"parent 1-1",expand:!0,children:[{title:"leaf 1-1-1"},{title:"leaf 1-1-2"}]},{title:"parent 1-2",expand:!0,children:[{title:"leaf 1-2-1"},{title:"leaf 1-2-1"}]}]}],tableHead:[{title:"表头1",key:"head1",minWidth:60,align:"center",resizable:!0},{title:"表头2",key:"head2",minWidth:100,align:"center",resizable:!0},{title:"表头3",key:"head3",minWidth:60,align:"center",resizable:!0},{title:"表头4",key:"head4",minWidth:100,align:"center",resizable:!0},{title:"表头5",key:"head5",minWidth:160,align:"center",resizable:!0},{title:"表头6",key:"head6",minWidth:60,align:"center",resizable:!0},{title:"表头7",key:"head7",minWidth:100,align:"center",resizable:!0},{title:"表头8",key:"head8",minWidth:60,align:"center",resizable:!0},{title:"表头8",key:"head8",minWidth:60,align:"center",resizable:!0},{title:"表头9",key:"head9",minWidth:100,align:"center",resizable:!0}]}},mounted:function(){for(var e=0;e<50;e++){for(var t={},a=0;a<this.tableHead.length;a++)t[this.tableHead[a].key]="你好！你好！你好！";this.tableData.push(t)}},methods:{setStyle:function(){i.a.commit("set_skin",this.style)}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"20px"}},[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.Switch=!0}}},[e._v("你好")]),e._v(" "),a("Page",{attrs:{total:100,size:"small","show-sizer":""}}),e._v(" "),a("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"Select date"}}),e._v(" "),a("TimePicker",{staticStyle:{width:"168px"},attrs:{format:"HH点mm分ss秒",placeholder:"Select time"}}),e._v(" "),a("Select",{staticStyle:{width:"100px"},on:{"on-change":e.setStyle},model:{value:e.style,callback:function(t){e.style=t},expression:"style"}},[a("Option",{attrs:{value:"dark"}},[e._v(" 暗蓝")]),e._v(" "),a("Option",{attrs:{value:"light"}},[e._v(" 浅蓝")])],1),e._v(" "),a("div",{staticStyle:{padding:"20px"}},[a("Table",{attrs:{border:"","highlight-row":"",height:300,columns:e.tableHead,data:e.tableData}})],1),e._v(" "),a("Tree",{attrs:{data:e.data1}})],1)},staticRenderFns:[]};var r=a("C7Lr")(l,n,!1,function(e){a("cSNU")},"data-v-213c640d",null);t.default=r.exports},cSNU:function(e,t){}});