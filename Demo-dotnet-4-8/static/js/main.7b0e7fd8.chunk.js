(this["webpackJsonpapplication-portfolio-manager"]=this["webpackJsonpapplication-portfolio-manager"]||[]).push([[0],{75:function(e,t,a){e.exports=a(93)},76:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);a(76);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),l=a.n(n),i=a(9),r=a.n(i),o=a(137),c=a(131),s=a(127),m=a(130),u=a(35),p=a.n(u),d=a(61),E=a(129),v=a(128);var f=e=>{let{onClose:t,version:a}=e;return l.a.createElement(o.a,{open:!0},l.a.createElement(s.a,null,l.a.createElement(v.a,{container:!0,justify:"space-between",alignItems:"center"},l.a.createElement(d.a,{variant:"div"},"About Application Portfolio Manager ",a.name," ","lite"==a.mode?"(Lite)":""),l.a.createElement(E.a,{onClick:()=>t(!1)},l.a.createElement(p.a,null)))),l.a.createElement(m.a,null,l.a.createElement(c.a,null,l.a.createElement(d.a,{variant:"div",style:{fontSize:"15px"}},"Application Portfolio Manager is a proprietary tool for use only by authorized personnel."),l.a.createElement("br",null),l.a.createElement(d.a,{variant:"div",style:{fontSize:"15px"}},"Copying, reverse engineering, and/or distribution is strictly forbidden."))))};var h=e=>{let{navigationCallBack:t,version:a}=e;const[i,r]=Object(n.useState)("..."),[o,c]=Object(n.useState)(!1);return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"flex-container"},l.a.createElement("div",{className:"logo"}),l.a.createElement("div",{className:"title"},"Application Portfolio Manager ",l.a.createElement("span",{id:"version"},a.name," "),l.a.createElement("span",{id:"stack"},"[.NET FRAMEWORK 4.8]")),l.a.createElement("div",{className:"instance-index"},"TAS Instance: "+i),l.a.createElement("div",{className:"about-bt",onClick:()=>{c(!0)}})),o&&l.a.createElement(f,{version:a,onClose:()=>{c(!1)}}))};var g=e=>{let{}=e;return l.a.createElement("nav",{className:"navigation"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"api-doc-off",href:"/swagger-ui/index.html",target:"_blank",value:"Filter"})),l.a.createElement("li",null,l.a.createElement("a",{className:"api-graphql-doc-off",href:"/graphiql",target:"_blank",value:"Filter"})),l.a.createElement("li",null,l.a.createElement("a",{className:"plugin-off",value:"Filter"})),l.a.createElement("li",null,l.a.createElement("a",{className:"grouptag-off",value:"Filter"})),l.a.createElement("li",null,l.a.createElement("a",{className:"info-off",value:"Filter"}))))},b=a(55),C=a(56),S=a(45),y=a(133),A=a(135),N=a(132);var P=e=>{let{title:t,application:a,onSubmit:n,onClose:i}=e;const[r,c]=l.a.useState(!1),[u,p]=l.a.useState(a?a.name:""),[d,E]=l.a.useState(a?a.description:""),[v,f]=l.a.useState(a?a.identifier:""),[h,g]=l.a.useState(a?a.businessUnit:""),[b,C]=l.a.useState(a?a.businessOwner:""),[S,P]=l.a.useState(a?a.organization:"");return l.a.createElement("div",null,l.a.createElement(o.a,{open:!0,onClose:i,"aria-labelledby":"form-dialog-title"},l.a.createElement(s.a,{id:"form-dialog-title"},t),l.a.createElement(m.a,null,l.a.createElement(A.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"name",fullWidth:!0,value:u,onChange:function(e){p(e.target.value)}}),l.a.createElement(A.a,{autoFocus:!0,margin:"dense",id:"identifier",label:"Identifier",type:"indentifier",fullWidth:!0,value:v,onChange:function(e){f(e.target.value)}}),l.a.createElement(A.a,{autoFocus:!0,margin:"dense",id:"description",label:"Description",type:"description",fullWidth:!0,value:d,onChange:function(e){E(e.target.value)}}),l.a.createElement(A.a,{autoFocus:!0,margin:"dense",id:"businessUnit",label:"Business Unit",type:"businessUnit",fullWidth:!0,value:h,onChange:function(e){g(e.target.value)}}),l.a.createElement(A.a,{autoFocus:!0,margin:"dense",id:"businessOwner",label:"Business Owner",type:"businessOwner",fullWidth:!0,value:b,onChange:function(e){C(e.target.value)}}),l.a.createElement(A.a,{autoFocus:!0,margin:"dense",id:"organization",label:"Organization",type:"organization",fullWidth:!0,value:S,onChange:function(e){P(e.target.value)}})),l.a.createElement(N.a,null,l.a.createElement(y.a,{onClick:i,color:"primary"},"Cancel"),l.a.createElement(y.a,{onClick:function(){var e={};e.id=a?a.id:void 0,e.name=u,e.description=d,e.identifier=v,e.businessOwner=b,e.businessUnit=h,e.organization=S,n(e)},color:"primary"},a?"Save":"Create"))))},w=a(134);const T=Object(w.a)(e=>({root:{width:"100%",height:400,maxWidth:300,backgroundColor:e.palette.background.paper}}));var O=e=>{let{props:t}=e;T();var a=[];for(var n in t)t.hasOwnProperty(n)&&a.push({name:n,value:"string"==typeof t[n]?t[n]:JSON.stringify(t[n])});return l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Value"),a.map((e,t)=>l.a.createElement("tr",{key:t},l.a.createElement("td",null,l.a.createElement(d.a,{style:{fontSize:"12px",color:"black",fontWeight:"bold"}},e.name)),l.a.createElement("td",null,l.a.createElement(d.a,{style:{fontSize:"12px",color:"black"}},e.value))))))};var k=()=>{const[e,t]=l.a.useState(),[a,i]=l.a.useState(),[r,o]=l.a.useState();return Object(n.useEffect)(()=>{(async()=>{await fetch("/api/activeProfiles",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.text()})).then((function(e){t(e)}))})(),(async()=>{await fetch("/api/envProps",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e.VCAP_APPLICATION),e.VCAP_APPLICATION&&(e.VCAP_APPLICATION=JSON.parse(e.VCAP_APPLICATION)),e.VCAP_SERVICES&&(e.VCAP_SERVICES=JSON.parse(e.VCAP_SERVICES)),console.log(e),i(e)}))})(),(async()=>{await fetch("/api/appProps",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){o(e)}))})()},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"section-title"},"Active Profile: ",e),l.a.createElement("div",{className:"section-title"},"Application Properties:"),r&&l.a.createElement(O,{props:r}),l.a.createElement("div",{className:"section-title"},"Environment Properties:"),a&&l.a.createElement(O,{props:a}),l.a.createElement("div",{className:"section-title"},"TAS Application Properties:"),a&&a.VCAP_APPLICATION&&l.a.createElement(O,{props:a.VCAP_APPLICATION}),l.a.createElement("div",{className:"section-title"},"TAS Service Properties:"),a&&a.VCAP_SERVICES&&l.a.createElement(O,{props:a.VCAP_SERVICES}))};class j extends n.Component{constructor(){super(...arguments),this.onClick=()=>{const{title:e,onClick:t}=this.props;t(e)}}render(){const{onClick:e,props:{activeTab:t,title:a}}=this;let n="tab-list-item";return t===a&&(n+=" tab-list-active"),l.a.createElement("li",{className:n,onClick:e},a)}}var F=j;a(91);class I extends n.Component{constructor(e){super(e),this.onClickTabItem=e=>{this.setState({activeTab:e})},this.state={activeTab:this.props.children[0].props.title}}render(){const{onClickTabItem:e,props:{children:t},state:{activeTab:a}}=this;return l.a.createElement("div",{className:"tabs"},l.a.createElement("ol",{className:"tab-list"},t.map(t=>{const{title:n,about:i}=t.props;return l.a.createElement(F,{activeTab:a,key:n,title:n,about:i,onClick:e})})),l.a.createElement("div",{className:"tab-content"},t.map(e=>{if(e.props.title===a)return l.a.createElement("div",{className:"tab-description"},e.props.about)}),t.map(e=>{if(e.props.title===a)return e.props.children})))}}var V=I;var x;const z=C.a.div(x||(x=Object(b.a)(["\n  padding: 1rem;\n  label {\n      font-weight: bold;\n      border-bottom: 1px solid black;\n  }  \n"])));function _(e){let{column:{filterValue:t=[],preFilteredRows:a,setFilter:n,id:i}}=e;return l.a.createElement("div",null)}function R(e){let{column:{filterValue:t,preFilteredRows:a,setFilter:n}}=e;a.length;return l.a.createElement("input",{value:t||"",onChange:e=>{n(e.target.value||void 0)},placeholder:""})}function H(e){let{columns:t,data:a}=e;const n=l.a.useMemo(()=>({customText:(e,t,a)=>e.filter(e=>{const n=e.values[t];return void 0===n||String(n.name).toLowerCase().includes(String(a).toLowerCase())})}),[]),i=l.a.useMemo(()=>({Filter:R}),[]),{getTableProps:r,getTableBodyProps:o,headerGroups:c,rows:s,prepareRow:m,state:u,visibleColumns:p,preGlobalFilteredRows:d,setGlobalFilter:E}=Object(S.useTable)({columns:t,data:a,defaultColumn:i,filterTypes:n},S.useFilters),v=s.slice(0,1e3);return l.a.createElement(l.a.Fragment,null,l.a.createElement("table",Object.assign({className:"styled-table"},r()),l.a.createElement("thead",null,c.map(e=>l.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map(e=>l.a.createElement("th",e.getHeaderProps(),e.render("Header"),l.a.createElement("div",null,e.canFilter?e.render("Filter"):null)))))),l.a.createElement("tbody",o(),v.map((e,t)=>(m(e),l.a.createElement("tr",e.getRowProps(),e.cells.map(e=>l.a.createElement("td",e.getCellProps(),e.render("Cell")))))))))}var M=function(){const[e,t]=l.a.useState([]),[a,i]=l.a.useState(),[r,c]=l.a.useState(!1),[m,u]=l.a.useState(!1);function f(){c(!1)}function h(){u(!1)}const g=[{Header:"Applications",columns:[{Header:"Identifier",accessor:"identifier"},{Header:"Name",accessor:"name"},{Header:"Description",accessor:"description"},{Header:"Organization",accessor:"organization"},{Header:"Business Unit",accessor:"businessUnit"},{Header:"Business Owner",accessor:"businessOwner"},{Header:"Actions",accessor:e=>e,Cell:function(e){let{value:t}=e;return l.a.createElement("div",{className:"action-items"},l.a.createElement("div",{onClick:()=>(i(t),void u(!0)),title:"Edit",className:"edit-on"}),l.a.createElement("div",{onClick:()=>(async e=>{await fetch("/api/Application/".concat(e),{method:"DELETE"}).then((function(e){S()}))})(t.id),title:"Delete",className:"delete-on"}))},Filter:_}]}],b=l.a.useMemo(()=>g,[]),C=l.a.useMemo(()=>e),S=async()=>{await fetch("/api/Application",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){t(e)}))};return Object(n.useEffect)(()=>{S()},[]),l.a.createElement(z,null,l.a.createElement(V,null,l.a.createElement("div",{title:"Manage Applications"},l.a.createElement("div",{className:"main-table"},l.a.createElement(y.a,{style:{fontSize:"13px"},onClick:()=>{c(!0)},variant:"outlined"},"Create Application"),l.a.createElement(H,{columns:b,data:C}))),l.a.createElement("div",{title:"Manage Organizations"}),l.a.createElement("div",{title:"Manage Users"}),l.a.createElement("div",{title:"Settings"}),l.a.createElement("div",{title:"Properties"},l.a.createElement(k,null))),r&&l.a.createElement(o.a,{open:!0,onClose:f},l.a.createElement(s.a,null,l.a.createElement(v.a,{container:!0,justify:"space-between",alignItems:"center"},l.a.createElement(d.a,{variant:"div"},"Create new Application"),l.a.createElement(E.a,{onClick:()=>f()},l.a.createElement(p.a,null)))),l.a.createElement(P,{onClose:f,onSubmit:async e=>{await fetch("/api/Application",{method:"POST",body:JSON.stringify(e),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){S(),f()}))},title:"Create Application"})),m&&l.a.createElement(o.a,{open:!0,onClose:h},l.a.createElement(s.a,null,l.a.createElement(v.a,{container:!0,justify:"space-between",alignItems:"center"},l.a.createElement(d.a,{variant:"div"},"Update Application ",a.name),l.a.createElement(E.a,{onClick:()=>f()},l.a.createElement(p.a,null)))),l.a.createElement(P,{onClose:h,application:a,onSubmit:async e=>{await fetch("/api/Application",{method:"PUT",body:JSON.stringify(e),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){S(),h()}))},title:"Udpate Application"+a.name})))};var U=e=>{let{navigationState:t,updateNavigationState:a}=e;return Object(n.useEffect)(()=>{},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(M,null))};var W=()=>{const[e,t]=Object(n.useState)({}),[a,i]=Object(n.useState)();function r(e){e&&t(e)}return Object(n.useEffect)(()=>{(async()=>{await fetch("/api/version",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){i(e)}))})()},[]),l.a.createElement(l.a.Fragment,null,a&&l.a.createElement(h,{version:a,navigationCallBack:r}),l.a.createElement("div",{className:"layout"},l.a.createElement(g,null),l.a.createElement(U,{navigationState:e,updateNavigationState:r})))};r.a.render(l.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[75,1,2]]]);
//# sourceMappingURL=main.7b0e7fd8.chunk.js.map