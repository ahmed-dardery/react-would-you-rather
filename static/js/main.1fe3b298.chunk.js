(this["webpackJsonpreact-would-you-rather"]=this["webpackJsonpreact-would-you-rather"]||[]).push([[0],{30:function(e,t,n){e.exports=n(44)},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(17),c=n.n(r),i=n(4),s=n(5),l=n(6),u=n(7),m=n(9),d=n(2),p=n(3);function h(e){return{type:"SET_AUTHED_USER",userId:e}}var v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).logOut_click=function(t){t.preventDefault(),(0,e.props.dispatch)({type:"SET_AUTHED_USER",userId:null}),e.props.history.push("/login")},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.authedUser;return o.a.createElement("ul",{className:"nav-bar"},o.a.createElement("span",{className:"nav-bar-title nav-bar-left"},"Would You Rather?"),o.a.createElement("li",{className:"nav-bar-left"},o.a.createElement(m.c,{className:"nav-bar-link",exact:!0,to:"/",activeClassName:"nav-bar-active"},"Home")),o.a.createElement("li",{className:"nav-bar-left"},o.a.createElement(m.c,{className:"nav-bar-link",to:"/add",activeClassName:"nav-bar-active"},"New Question")),o.a.createElement("li",{className:"nav-bar-left"},o.a.createElement(m.c,{className:"nav-bar-link",to:"/leaderboard",activeClassName:"nav-bar-active"},"Leaderboard")),o.a.createElement("li",{className:"nav-bar-right"},n?o.a.createElement("span",{className:"nav-bar-link",onClick:this.logOut_click},"Logout"):o.a.createElement(m.c,{className:"nav-bar-link",to:"/login",activeClassName:"nav-bar-active"},"Login")),n&&o.a.createElement("span",{className:"nav-bar-text nav-bar-right"},"Hello ",t?t.name:n))}}]),n}(a.Component);var b=Object(d.g)(Object(p.connect)((function(e){var t=e.users,n=e.authedUser;return{authedUser:n,user:t[n]}}))(v));function f(e){var t=e.title,n=e.imageInfo,a=e.innerContent,r=e.corner,c=e.centerTitle;return o.a.createElement("div",{className:"block-box"},r&&o.a.createElement("div",{className:"block-corner"},r),t&&o.a.createElement("div",{style:{textAlign:c?"center":"auto"},className:"block-bar"},t),o.a.createElement("div",{className:"block-body"},n&&o.a.createElement("div",{className:"block-image-wrapper"},o.a.createElement("div",{className:"block-image"},o.a.createElement("img",{src:n.url,alt:n.alt}))),o.a.createElement("div",{className:"block-content"},a)))}var E=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.question,n=e.author,r=e.answered,c="".concat(t.optionOne.text," or ").concat(t.optionTwo.text),i=c.length>20?"".concat(c.substr(0,27),"..."):c,s=r?"Go to poll":"View";return o.a.createElement(f,{title:"".concat(n.name," asks"),imageInfo:{url:n.avatarURL,alt:n.name},innerContent:o.a.createElement(a.Fragment,null,o.a.createElement("h3",null,"Would you rather"),i,o.a.createElement(m.b,{to:"/q/".concat(t.id)},o.a.createElement("button",{className:"block-content-button"},s)))})}}]),n}(a.Component);function g(e,t){return e.optionOne.votes.includes(t)?1:e.optionTwo.votes.includes(t)?2:0}var O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={tab:0},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;if(!this.props.authedUser)return o.a.createElement(d.a,{to:"/login"});var t=this.props,n=t.answered,a=t.unanswered,r=t.questions,c=t.users,i=function(e,t){return 0===e.length?o.a.createElement("div",{className:"block-content-center"},"No questions! Why not ",o.a.createElement(m.b,{to:"/add"},"add a new one"),"?"):e.map((function(e){var n=r[e.id],a=c[n.author];return o.a.createElement("li",{key:e.id},o.a.createElement(E,{question:n,author:a,answered:t}))}))},s=this.state.tab;return o.a.createElement("div",{className:"window"},o.a.createElement("div",{className:"tab-bar"},o.a.createElement("button",{className:"tab-link ".concat(0===s&&"active"),onClick:function(){return e.setState({tab:0})}},"Unanswered"),o.a.createElement("button",{className:"tab-link ".concat(1===s&&"active"),onClick:function(){return e.setState({tab:1})}},"Answered")),0===s?o.a.createElement("div",{className:"tab-window"},o.a.createElement("ul",{className:"view-block"},i(a,!1))):o.a.createElement("div",{className:"tab-window"},o.a.createElement("ul",{className:"view-block"},i(n,!0))))}}]),n}(a.Component);var j=Object(p.connect)((function(e){var t=e.authedUser,n=e.users,a=e.questions;if(null===t)return{authedUser:null};var o=[],r=[];Object.keys(a).forEach((function(e){var n=g(a[e],t);0!==n?o.push({id:e,choice:n}):r.push({id:e,choice:0})}));var c=function(e,t){return a[t.id].timestamp-a[e.id].timestamp};return o.sort(c),r.sort(c),{authedUser:t,users:n,questions:a,answered:o,unanswered:r}}))(O),w=n(11),y=n.n(w),k=n(29),x=n(8),N=n(1),T={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://image.flaticon.com/icons/svg/761/761842.svg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://image.flaticon.com/icons/svg/828/828785.svg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://image.flaticon.com/icons/svg/828/828775.svg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},q={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function U(e){return new Promise((function(t,n){var a=e.author,o=function(e){var t=e.optionOneText,n=e.optionTwoText,a=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:a,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){q=Object(N.a)({},q,Object(x.a)({},o.id,o)),T=Object(N.a)({},T,Object(x.a)({},a,Object(N.a)({},T[a],{questions:T[a].questions.concat([o.id])}))),t(o)}),1e3)}))}function C(e){return function(e){var t=e.authedUser,n=e.qid,a=e.answer;return new Promise((function(e,o){setTimeout((function(){T=Object(N.a)({},T,Object(x.a)({},t,Object(N.a)({},T[t],{answers:Object(N.a)({},T[t].answers,Object(x.a)({},n,a))}))),q=Object(N.a)({},q,Object(x.a)({},n,Object(N.a)({},q[n],Object(x.a)({},a,Object(N.a)({},q[n][a],{votes:q[n][a].votes.concat([t])}))))),e()}),500)}))}(e)}function S(e){return function(t){t(Object(w.showLoading)()),function(e){return U(e)}(e).then((function(n){t(function(e){return{type:"ADD_QUESTION",question:e}}(n)),t(Object(w.hideLoading)()),e.callback(n.id)})).catch((function(){alert("An error occurred, please retry again.")}))}}function I(e){return function(t){t(Object(w.showLoading)()),C(e).then((function(){t(function(e){return{type:"ANSWER_QUESTION",info:e}}(e)),t(Object(w.hideLoading)())}))}}var _=function(e){var t=e.option,n=e.total,a=e.highlight,r=t.votes.length,c=(100*r/n).toFixed(1),i="".concat(c,"%");return o.a.createElement("div",{className:"progress-box"},a&&o.a.createElement("div",{className:"progress-corner"},"\u2713"),t.text,o.a.createElement("div",{className:"progress-border"},!(c>=10)&&o.a.createElement("div",{style:{width:"100%",position:"absolute"}},i),o.a.createElement("div",{style:{width:i},className:"progress-fill ".concat(a&&"highlight")},c>=10&&i)),o.a.createElement("div",{className:"progress-text"},"".concat(r," out of ").concat(n," votes")))},R=function(e){var t=e.selected,n=e.option,a=e.text,r=e.callback;return o.a.createElement("div",null,o.a.createElement("input",{checked:t===n,onChange:r,className:"block-option-radio",type:"radio",value:n,id:n}),o.a.createElement("label",{className:"block-option-label",htmlFor:n},a))},A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={selected:null},e.onChange=function(t){e.setState({selected:t.target.value})},e.onClick=function(t){if(t.preventDefault(),null!==e.state.selected){var n=e.props.authedUser,a=e.props.question.id,o="option"+e.state.selected;e.props.dispatch(I({authedUser:n,qid:a,answer:o}))}},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.question,r=t.author,c=t.choice,i=t.authedUser,s=this.state.selected;if(!i)return o.a.createElement(d.a,{to:"/"});if(!n)return o.a.createElement(d.a,{to:"/404"});var l=n.optionOne.votes.length+n.optionTwo.votes.length;return o.a.createElement("div",{className:"window"},o.a.createElement(f,{title:"".concat(r.name," asks"),imageInfo:{url:r.avatarURL,alt:r.name},innerContent:c?o.a.createElement(a.Fragment,null,o.a.createElement("h3",null,"Would you rather"),o.a.createElement(_,{highlight:1===c,option:n.optionOne,total:l}),o.a.createElement("p",{className:"block-content-center"},"Or"),o.a.createElement(_,{highlight:2===c,option:n.optionTwo,total:l})):o.a.createElement(a.Fragment,null,o.a.createElement("h3",null,"Would you rather"),o.a.createElement("form",null,o.a.createElement(R,{selected:s,option:"One",text:n.optionOne.text,callback:e.onChange}),o.a.createElement("p",{className:"block-content-center"},"Or"),o.a.createElement(R,{selected:s,option:"Two",text:n.optionTwo.text,callback:e.onChange}),o.a.createElement("button",{onClick:e.onClick,disabled:!s,className:"block-content-button"},"Vote")))}))}}]),n}(a.Component);var L=Object(p.connect)((function(e,t){var n=e.questions,a=e.users,o=e.authedUser,r=t.match;if(null===o)return{authedUser:null};var c=n[r.params.id];return c?{question:c,author:a[c.author],choice:g(c,o),authedUser:o}:{authedUser:o,question:null}}))(A),z=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={optionOneText:"",optionTwoText:""},e.updateOptionOne=function(t){return e.setState({optionOneText:t.target.value})},e.updateOptionTwo=function(t){return e.setState({optionTwoText:t.target.value})},e.noneEmpty=function(){return e.state.optionOneText.trim()&&e.state.optionTwoText.trim()},e.onClick=function(t){t.preventDefault();var n=e.props,a=n.authedUser,o=n.history,r=e.state,c=r.optionOneText,i=r.optionTwoText;e.props.dispatch(S({author:a,optionOneText:c,optionTwoText:i,callback:function(e){return o.push("/q/".concat(e))}}))},e}return Object(s.a)(n,[{key:"render",value:function(){if(!this.props.authedUser)return o.a.createElement(d.a,{to:"/login"});var e=this.state,t=e.optionOneText,n=e.optionTwoText;return o.a.createElement("div",{className:"window"},o.a.createElement(f,{title:"Create New Question",innerContent:o.a.createElement("form",null,o.a.createElement("h3",null,"Would you rather..."),o.a.createElement("input",{className:"block-input",type:"text",onChange:this.updateOptionOne,value:t,placeholder:"Enter first option here"}),o.a.createElement("p",{className:"block-content-center"},"Or"),o.a.createElement("input",{className:"block-input",type:"text",onChange:this.updateOptionTwo,value:n,placeholder:"Enter first option here"}),o.a.createElement("button",{onClick:this.onClick,disabled:!this.noneEmpty(),className:"block-content-button"},"Submit"))}))}}]),n}(a.Component),D=Object(d.g)(Object(p.connect)((function(e){return{authedUser:e.authedUser}}))(z)),Q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.userIds,n=e.users;return o.a.createElement("div",{className:"window"},o.a.createElement("ol",{className:"view-block"},t.map((function(e,t){var r,c=n[e],i=Object.keys(c.answers).length,s=c.questions.length;return o.a.createElement("li",{key:e},o.a.createElement(f,{centerTitle:!0,corner:(r=t+1,r+(r%100-r%10===10||r%10<1||r%10>3?"th":[0,"st","nd","rd"][r%10])),imageInfo:{url:c.avatarURL,alt:c.name},title:c.name,innerContent:o.a.createElement(a.Fragment,null,o.a.createElement("div",null,"Answered Questions: ",i),o.a.createElement("div",null,"Created Questions: ",s),o.a.createElement("div",null,"Total Score: ",i+s))}))}))))}}]),n}(a.Component);var W=Object(p.connect)((function(e){var t=e.users,n=Object.keys(t),a=function(e){return e.questions+e.answers};return n.sort((function(e,n){return a(t[e])-a(t[n])})),{userIds:n,users:t}}))(Q),F=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,"404 Not Found")}}]),n}(a.Component);function P(){return function(e){e(Object(w.showLoading)()),Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(N.a)({},T))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(N.a)({},q))}),1e3)}))]).then((function(e){var t=Object(k.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var n=t.users,a=t.questions;e(function(e){return{type:"RECEIVE_USERS",users:e}}(n)),e(function(e){return{type:"RECEIVE_QUESTIONS",questions:e}}(a)),e(Object(w.hideLoading)())})).catch((function(){alert("An error occurred, please refresh the page")}))}}var V=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={selected:"none"},e.login_click=function(t){t.preventDefault();var n=e.state.selected;e.props.dispatch(h(n))},e.select_change=function(t){e.setState({selected:t.target.value})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.selected;if(this.props.authedUser)return o.a.createElement(d.a,{to:"/"});var t=this.props.users;return o.a.createElement("div",{className:"window"},o.a.createElement(f,{title:"Login",centerTitle:!0,innerContent:o.a.createElement("form",{onSubmit:this.login_click},o.a.createElement("h3",null,"Login as:"),o.a.createElement("select",{className:"block-input",value:e,onChange:this.select_change},o.a.createElement("option",{value:"none",disabled:!0},"Select a user"),Object.keys(t).map((function(e){return o.a.createElement("option",{key:e,value:e},t[e].name)}))),o.a.createElement("button",{className:"block-content-button",disabled:"none"===e,type:"submit"},"Login"))}))}}]),n}(a.Component),H=Object(p.connect)((function(e){return{users:e.users,authedUser:e.authedUser}}))(V),M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(P())}},{key:"render",value:function(){var e=this.props.loading;return o.a.createElement(m.a,{basename:"/react-would-you-rather"},o.a.createElement(a.Fragment,null,o.a.createElement(y.a,null),o.a.createElement(b,null),o.a.createElement("div",{className:"body"},!e&&o.a.createElement(d.d,null,o.a.createElement(d.b,{exact:!0,path:"/",component:j}),o.a.createElement(d.b,{path:"/q/:id",component:L}),o.a.createElement(d.b,{exact:!0,path:"/add",component:D}),o.a.createElement(d.b,{exact:!0,path:"/leaderboard",component:W}),o.a.createElement(d.b,{exact:!0,path:"/login",component:H}),o.a.createElement(d.b,{component:F})))))}}]),n}(a.Component),B=Object(p.connect)((function(e){return{loading:0!==e.loadingBar.default}}))(M),J=n(13);var G=Object(J.c)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHED_USER":return t.userId;default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_QUESTIONS":return Object(N.a)({},t.questions);case"ADD_QUESTION":return Object(N.a)({},e,Object(x.a)({},t.question.id,t.question));case"ANSWER_QUESTION":var n=t.info,a=n.authedUser,o=n.qid,r=n.answer;return Object(N.a)({},e,Object(x.a)({},o,Object(N.a)({},e[o],Object(x.a)({},r,Object(N.a)({},e[o][r],{votes:e[o][r].votes.concat([a])})))));default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_USERS":return Object(N.a)({},t.users);case"ADD_QUESTION":var n=t.question,a=n.author,o=n.id;return Object(N.a)({},e,Object(x.a)({},a,Object(N.a)({},e[a],{questions:e[a].questions.concat([o])})));case"ANSWER_QUESTION":var r=t.info,c=r.authedUser,i=r.qid,s=r.answer;return Object(N.a)({},e,Object(x.a)({},c,Object(N.a)({},e[c],{answers:Object(N.a)({},e[c].answers,Object(x.a)({},i,s))})));default:return e}},loadingBar:w.loadingBarReducer}),$=n(28),Y=Object(J.a)($.a,(function(e){return function(t){return function(n){console.group(n.type),console.log("The action:",n);var a=t(n);return console.log("The new state:",e.getState()),console.groupEnd(),a}}}));n(43);var K=Object(J.d)(G,Y);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p.Provider,{store:K},o.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){var e="".concat("/react-would-you-rather","/service-worker.js");navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}))}},[[30,1,2]]]);
//# sourceMappingURL=main.1fe3b298.chunk.js.map