(this.webpackJsonpbarvidademo=this.webpackJsonpbarvidademo||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),s=(a(13),a(1)),i=a(2),o=a(4),u=a(3),m=a(5),b=(a(14),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderMessage",value:function(e){var t=e.text;return r.a.createElement("li",null,r.a.createElement("div",{className:"Message-content"},r.a.createElement("div",{className:"text"},t)))}},{key:"render",value:function(){var e=this,t=this.props.messages;return r.a.createElement("ul",{className:"Messages-list"},t.map((function(t){return e.renderMessage(t)})))}}]),t}(n.Component)),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={text:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState({text:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.setState({text:""}),this.props.onSendMessage(this.state.text)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Input"},r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("input",{onChange:function(t){return e.onChange(t)},value:this.state.text,type:"text",placeholder:"Enter your message and press ENTER",autoFocus:"true"}),r.a.createElement("button",null,"Send")))}}]),t}(n.Component),h=(a(15),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={messages:[{text:"Welcome to Barvida Chat"}]},a.onSendMessage=function(e){var t=a.state.messages;t.push({text:e}),a.setState({messages:t})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,{messages:this.state.messages}),r.a.createElement(v,{onSendMessage:this.onSendMessage}))}}]),t}(n.Component)),p=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(){var e=a.props,t=e.label;(0,e.onClick)(t)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.onClick,t=this.props,a=t.activeTab,n=t.label,c="tab-list-item";return a===n&&(c+=" tab-list-active"),r.a.createElement("li",{className:c,onClick:e},n)}}]),t}(n.Component),d=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).onClickTabItem=function(e){a.setState({activeTab:e})},a.state={activeTab:a.props.children[0].props.label},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,a=this.state.activeTab;return r.a.createElement("div",{className:"tabs"},r.a.createElement("ol",{className:"tab-list"},t.map((function(t){var n=t.props.label;return r.a.createElement(p,{activeTab:a,key:n,label:n,onClick:e})}))),r.a.createElement("div",{className:"tab-content"},t.map((function(e){if(e.props.label===a)return e.props.children}))))}}]),t}(n.Component);a(16);var f=document.createElement("div");document.body.appendChild(f);var E=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Barvida Demo"),r.a.createElement(d,null,r.a.createElement("div",{label:"Start Seite"},r.a.createElement("div",{className:"Tabstyle"}," ",r.a.createElement("div",{className:"knockout"},"B\u039bRVID\u039b ")," ")),r.a.createElement("div",{label:"Chat"},r.a.createElement(h,null)),r.a.createElement("div",{label:"Info"},r.a.createElement("div",{className:"Tabstyle"},r.a.createElement("h1",null,"Barvida GmbH"),r.a.createElement("h4",null,"Gerhart-Hauptmannstr. 6",r.a.createElement("br",null),"33613 Bielefeld",r.a.createElement("br",null),"info@barvida.de")," "))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.b64c5818.chunk.js.map