(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{14:function(module,__webpack_exports__,__webpack_require__){"use strict";function isDigit(e){return void 0!==e}function handleClick(clicked,displayValue,setDisplay,setResult,setOperand,setMemory,memory,operand){if(console.log("memory = ",memory),"number"==typeof clicked){if(displayValue.length<=1&&"0"==displayValue&&""==operand)return void setDisplay(String(clicked));if("-0"==displayValue)return void setDisplay("-".concat(String(clicked)));if(""!=operand)return setDisplay(String(clicked)),setMemory(memory.concat(operand)),void setOperand("");setDisplay(displayValue.concat(String(clicked))),setOperand("")}else{switch(clicked){case".":return displayValue.includes(".")?void 0:void setDisplay(displayValue.concat(String(clicked)));case"AC":setDisplay("0"),setResult(0),setMemory(""),setOperand("");break;case"+/-":switch(console.log("here in +/-"),displayValue){case"0":setDisplay("-0");break;case"-0":setDisplay("0");break;default:setDisplay(String(-1*Number(displayValue)))}case"=":memory=memory.concat(displayValue),setMemory(memory),console.log("memory = ",memory),displayValue=String(eval(memory)),setDisplay(displayValue),console.log("result gets calced here"),setOperand(""),memory="",operand="",setMemory("");break;default:""==operand&&setMemory(memory.concat(displayValue)),setOperand(clicked)}"AC"===clicked&&(setDisplay("0"),setResult(0))}}__webpack_exports__.a=handleClick},15:function(e,t,a){e.exports=a(29)},20:function(e,t,a){},21:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var l,n=a(0),o=a.n(n),r=a(10),s=a.n(r),i=(a(20),a(21),a(3)),u=a(11),m=a(8),d=a(12),c=a(7),p=new function e(){Object(d.a)(this,e),this.borderDefault="1px solid #B7C2C6",this.navDropShadow="0px 5px 5px #EEEEEE",this.navLogoSize="36px",this.transitionTime="250ms",this.font={thin:{fontFamily:"Inter",fontStyle:"normal",fontWeight:"100"},extraLight:{fontFamily:"Inter",fontStyle:"normal",fontWeight:"200"},light:{fontFamily:"Inter",fontStyle:"normal",fontWeight:"300"},regular:{fontFamily:"Inter",fontStyle:"normal",fontWeight:"400"},medium:{fontFamily:"Inter",fontStyle:"normal",fontWeight:"500"},semiBold:{fontFamily:"Inter",fontStyle:"normal",fontWeight:"600"},bold:{fontFamily:"Inter",fontStyle:"normal",fontWeight:"700"},extraBold:{fontFamily:"Inter",fontStyle:"normal",fontWeight:"800"},black:{fontFamily:"Inter",fontStyle:"normal",fontWeight:"900"}},this.palette={white:"#ffffff",transparent:"transparent",primary:{fsBlue:"#149EC6",fsBluePrimary:"#1487AB",fsBlueSecondary:"#E7F5F9",fsDarkBlue:"#162E3F",fsDarkBlueSub:"#2D4253"},secondary:{turquoise:"#5EBFC0",red:"#C76767",green:"#91C340",yellow:"#EDC53E"},grays:{dark:"#3F4750",neutralWarm:"#A5A9B0",neutralCool:"#B7C2C6",light:"#EAECF1",extraLight:"#F6F7FA",neutralCoolTransparent:"rgba(183,194,198,0.3)"},opacity:{alpha60:"99",alpha30:"4D"},chart:{primary:{blue:"#4472C4",orange:"#ED7D31",gray:"#A5A5A5",yellow:"#FFC000",purple:"#AA77B4"},secondary:{green:"#70AD47"}}},this.scales={spacing:{xsmall:2,small:4,normal:8,medium:20,large:40},input:{widths:{xsmall:84,small:170,medium:400,large:810},height:{xsmall:28,small:36,medium:48,large:132}},icon:{xxsmall:12,xsmall:16,small:20,medium:24},button:{widths:{small:134,medium:190}},page:{maxWidth:1280},tooltip:{minWidth:150},grid:{width:{xsmall:50,small:100},padding:20,paddingTop:14,paddingBottom:14}},this.zIndex={popup:10,overlay:20,overlayContent:21,tooltip:100}},y=Object(n.createContext)(p),f=Object(c.a)(y),b=(f.ThemeProvider,f.useTheme,l=f,function(e,t){return Object(c.b)(e,Object(m.a)(Object(m.a)({},t),{},{theming:l}))}),g=b((function(e){return{calculator:{width:300,height:600,backgroundColor:"#1F1716",paddingTop:25,margin:"auto",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius:"25px;"}}})),h=b((function(e){return{row:{display:"flex",flexDirection:"row",width:"100%",height:100,backgroundcolot:"blue"}}})),V=b((function(e){return{button:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",flexGrow:function(e){return 0===e.buttonValue?2:1},marginTop:"10px",verticalAlign:"middle",height:"80px",fontSize:"28px",color:"black",fontFamily:"Orbitron, serif",background:"#dfe6e9","&:focus":{outline:"none"},"&:hover":{border:"3px solid #e17055",fontWeight:500}}}})),x=a(14),D=function(e){var t=V(e);return o.a.createElement("div",{className:t.button,onClick:function(){var t;return Object(x.a)(e.buttonValue,null!==(t=e.display)&&void 0!==t?t:"0",e.setDisplayValue,e.setResult,e.setOperand,e.setMemory,e.memory,e.operand)}},o.a.createElement("div",null,e.buttonValue))},O=function(e){var t=h();return o.a.createElement("div",{className:t.row},o.a.createElement(D,{buttonValue:e.buttonValue1,setDisplayValue:e.setDisplayValue,display:e.display,setResult:e.setResult,setOperand:e.setOperand,setMemory:e.setMemory,memory:e.memory,operand:e.operand}),o.a.createElement(D,{buttonValue:e.buttonValue2,setDisplayValue:e.setDisplayValue,display:e.display,setResult:e.setResult,setOperand:e.setOperand,setMemory:e.setMemory,memory:e.memory,operand:e.operand}),o.a.createElement(D,{buttonValue:e.buttonValue3,setDisplayValue:e.setDisplayValue,display:e.display,setResult:e.setResult,setOperand:e.setOperand,setMemory:e.setMemory,memory:e.memory,operand:e.operand}),e.buttonValue4&&o.a.createElement(D,{buttonValue:e.buttonValue4,setDisplayValue:e.setDisplayValue,display:e.display,setResult:e.setResult,setOperand:e.setOperand,setMemory:e.setMemory,memory:e.memory,operand:e.operand}))},E=b((function(e){return{Display:{backgroundColor:"lightgrey",width:"100%",height:"80px",fontSize:"2rem",display:"flex",justifyContent:"flex-end",alignItems:"center"},displayText:{padding:15}}})),k=function(e){var t,a=E();return o.a.createElement("div",{className:a.Display},o.a.createElement("div",{className:a.displayText},null!==(t=e.displayValue)&&void 0!==t?t:"0"))},v=function(e){Object(u.a)(e);var t=Object(n.useState)("0"),a=Object(i.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(0),m=Object(i.a)(s,2),d=(m[0],m[1]),c=Object(n.useState)(""),p=Object(i.a)(c,2),y=p[0],f=p[1],b=Object(n.useState)(""),h=Object(i.a)(b,2),V=h[0],x=h[1],D=g();return o.a.createElement("div",{className:D.calculator},o.a.createElement(k,{displayValue:l}),o.a.createElement(O,{buttonValue1:"AC",buttonValue2:"+/-",buttonValue3:"%",buttonValue4:"/",setDisplayValue:r,display:l,setOperand:x,setResult:d,setMemory:f,memory:y,operand:V}),o.a.createElement(O,{buttonValue1:9,buttonValue2:8,buttonValue3:7,buttonValue4:"*",setDisplayValue:r,display:l,setOperand:x,setResult:d,setMemory:f,memory:y,operand:V}),o.a.createElement(O,{buttonValue1:6,buttonValue2:5,buttonValue3:4,buttonValue4:"-",setDisplayValue:r,display:l,setOperand:x,setResult:d,setMemory:f,memory:y,operand:V}),o.a.createElement(O,{buttonValue1:3,buttonValue2:2,buttonValue3:1,buttonValue4:"+",setDisplayValue:r,display:l,setOperand:x,setResult:d,setMemory:f,memory:y,operand:V}),o.a.createElement(O,{buttonValue1:0,buttonValue2:".",buttonValue3:"=",setDisplayValue:r,display:l,setOperand:x,setResult:d,setMemory:f,memory:y,operand:V}))};var w=function(){return o.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.1c1cc8ba.chunk.js.map