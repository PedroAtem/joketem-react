(this["webpackJsonpjoketem-react"]=this["webpackJsonpjoketem-react"]||[]).push([[0],{36:function(e,t,n){e.exports=n.p+"static/media/logo.84e66372.svg"},43:function(e,t,n){e.exports=n(78)},48:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),i=(n(48),n(36)),u=n.n(i),s=n(40),l=n(15),p=n(8),m=n(9),h=n(11),j=n(10),b=n(12),f=n(16),d=n(7),k=(n(53),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.props.click,disabled:this.props.disabled},this.props.text)}}]),t}(a.Component)),O=(n(54),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.value,a=e.change;return r.a.createElement("input",{placeholder:t,value:n,onChange:a})}}]),t}(a.Component)),E=n(24),v=n.n(E),g=n(38),y=n.n(g).a.create({baseURL:"https://geek-jokes.sameerkumar.website/api"}),A=function(){return function(e){var t;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"LOADING_UPDATE_VALUE",show:!0}),n.next=3,v.a.awrap(y.get());case 3:t=n.sent,e({type:"JOKE_UPDATE_VALUE",joke:t.data}),e({type:"LOADING_UPDATE_VALUE",show:!1});case 6:case"end":return n.stop()}}))}},w=function(e){return{type:"NAME_UPDATE_VALUE",name:e}},U=(n(73),function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).goJoke=function(){var e=n.props.name;n.props.history.push("/joke".concat(e?"?name=".concat(e):""))},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.goJoke,t=this.props,n=t.name,a=t.updateName;return r.a.createElement("div",{className:"home"},r.a.createElement("h1",null,"JOKETEM"),r.a.createElement(O,{type:"text",label:"What's your name?",value:n,change:function(e){return a(e.target.value)}}),r.a.createElement(k,{click:function(){return e()},text:"Go forward!"}))}}]),t}(a.Component)),N=Object(f.b)((function(e){return{name:e.nameState.name}}),(function(e){return Object(d.b)({updateName:w},e)}))(U),_=n(39),J=n.n(_),D=(n(75),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"joke-container"},this.props.text)}}]),t}(a.Component)),L=(n(76),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=J.a.parse(this.props.location.search).name;e&&this.props.updateName(e),this.props.updateJoke()}},{key:"render",value:function(){var e=this.props,t=e.name,n=e.joke,a=e.loading,o=e.updateJoke;return r.a.createElement("div",{className:"joke"},r.a.createElement("h1",null,"Hello ",t||"Stranger","!!!"),r.a.createElement(k,{disabled:a,click:function(){return o()},text:a?"Getting Joke...":"Get Joke!"}),r.a.createElement(D,{text:n}))}}]),t}(a.Component)),x=Object(f.b)((function(e){return{joke:e.jokeState.joke,loading:e.jokeState.loading,name:e.nameState.name}}),(function(e){return Object(d.b)({updateJoke:A,updateName:w},e)}))(L),T=function(){return r.a.createElement(s.a,{basename:"/joketem-react/"},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/joke",component:x}),r.a.createElement(l.a,{path:"/",component:N})))};n(77);var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement("img",{className:"logo",src:u.a,alt:""}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=n(18),S={joke:"",loading:!1},V={name:""},G=Object(d.c)({jokeState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"JOKE_UPDATE_VALUE":return Object(P.a)({},e,{joke:t.joke});case"LOADING_UPDATE_VALUE":return Object(P.a)({},e,{loading:t.show});default:return e}},nameState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NAME_UPDATE_VALUE":return Object(P.a)({},e,{name:t.name});default:return e}}}),I=n(42),M=Object(d.d)(G,{},Object(d.a)(I.a)),K=n(3);n.d(t,"history",(function(){return W})),c.a.render(r.a.createElement(f.a,{store:M},r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}));var W=Object(K.a)({basename:"/joketem-react"})}},[[43,1,2]]]);
//# sourceMappingURL=main.0092e4b7.chunk.js.map