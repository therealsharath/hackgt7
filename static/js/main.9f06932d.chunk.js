(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{180:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(31),c=a.n(r),l=(a(91),a(4)),s=a(8),i=a.n(s),m=a(13),u=a(24),p=a.n(u),d=a(77),b=a.n(d),f=a(25),g=a.n(f),h=a(45),v=a.n(h),E=(a(109),a(112),a(78));v.a.initializeApp({apiKey:"AIzaSyCbx4JvFiTp1DWCDH2hyEuhnblsSM0rJI4",authDomain:"hackgt7-abs.firebaseapp.com",databaseURL:"https://hackgt7-abs.firebaseio.com",projectId:"hackgt7-abs",storageBucket:"hackgt7-abs.appspot.com",messagingSenderId:894677172810,appId:"1:894677172810:web:f42768573a8a2bd7ae9cb3"});var y=v.a.auth();function N(){return o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){var e=new v.a.auth.GoogleAuthProvider;y.signInWithPopup(e)}},"Sign in with ",o.a.createElement("img",{className:"google-icon",src:b.a})))}function O(){return y.currentUser&&o.a.createElement("button",{className:"nav-button",onClick:function(){return y.signOut()}},"Sign Out")}var S=function(e){var t=Object(E.a)(y),a=Object(l.a)(t,1)[0],r=Object(n.useState)(!1),c=Object(l.a)(r,2),s=c[0],u=c[1],d=Object(n.useState)(!1),b=Object(l.a)(d,2),f=b[0],h=b[1];return Object(n.useEffect)((function(){function t(){return(t=Object(m.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=JSON.stringify({userId:a.uid,userEmail:a.email}),n={method:"post",url:"http://maelstrom.pythonanywhere.com/login",headers:{"Content-Type":"application/json"},data:t},p()(n).then((function(e){})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a?(!s&&u(!0),s&&!f&&(!function(){t.apply(this,arguments)}(),h(!0),e.setUser(a)),e.setIsLogged(!0)):(s&&u(!1),h(!1),e.setIsLogged(!1),e.setUser(a))}),[a,s,u,f,h,e]),a?o.a.createElement(O,null):o.a.createElement("div",{className:"login-screen login-bg-image"},o.a.createElement("div",{className:"login-box"},o.a.createElement("img",{src:g.a,className:"main-logo"}),o.a.createElement("div",{className:"simply"},o.a.createElement(N,null))))},j=a(5),k=a(30);var w=function(e){var t=Object(n.useState)([["bot","Hey there! I\u2019m Fizz, your personal financial consultant!"],["bot","I can help you with some of the following: analyzing your current portfolio, providing you with suggestions about the stocks you may want to transact, and even recommending potential assets to invest in!"],["bot","Where would you like to start?"]]),a=Object(l.a)(t,2),r=a[0],c=a[1],s=Object(k.useForm)(),i=s.register,m=s.handleSubmit,u=s.reset;return o.a.createElement("div",{className:"bot"},o.a.createElement("div",null,r!==[]&&r.map((function(e){return o.a.createElement("div",{className:"container "+e[0]+"-message"},o.a.createElement("img",{src:g.a,alt:"Avatar"}),o.a.createElement("font",{className:e[0]+"-text"},e[1]))}))),o.a.createElement("form",{onSubmit:m((function(t){!function(t){var a={method:"post",url:"http://maelstrom.pythonanywhere.com/chatbot/query",headers:{"Content-Type":"application/json"},data:JSON.stringify({userId:e.user.uid,userEmail:e.user.email,query:t})};p()(a).then((function(e){var a=Object(j.a)(r);a.push(["user",t]),""!=JSON.stringify(e.data.response)?a.push(["bot",JSON.stringify(e.data.response)]):a.push(["bot","I'm not sure what you mean?"]),c(a)})).catch((function(e){console.log(e)}))}(t.message),u()}))},o.a.createElement("input",{name:"message",ref:i}),o.a.createElement("input",{type:"submit",value:"Send"})))},I=a(82),x=a(35),C=a(83),P=a.n(C),D=(a(114),x.b().shape({ticker:x.c().required(),quantity:x.a().positive().integer().required(),slp:x.a()}));var J=function(e){var t=Object(k.useForm)({resolver:Object(I.yupResolver)(D)}),a=t.register,r=t.handleSubmit,c=(t.errors,t.reset),s=t.control,i=Object(n.useState)(new Date),m=Object(l.a)(i,2),u=m[0],p=m[1];return o.a.createElement("form",{className:"new-stock",onSubmit:r((function(t){c();var a=Object(j.a)(e.portfolio);t.date=t.date.toString(),a.push(t),console.log(a),e.setPortfolio(a)}))},o.a.createElement("div",{className:"form-item"},o.a.createElement("label",{className:"label"},"Stock Ticker"),o.a.createElement("input",{id:"ticker",name:"ticker",type:"text",ref:a,placeholder:"Eg. AAPL"})),o.a.createElement("div",{className:"form-item"},o.a.createElement("label",{className:"label"},"Stock Quantity"),o.a.createElement("input",{name:"quantity",type:"text",ref:a,placeholder:"Number of shares you own"})),o.a.createElement("div",{className:"form-item"},o.a.createElement("label",{className:"label"},"Date Purchased"),o.a.createElement(k.Controller,{as:P.a,control:s,valueName:u.getDate(),onChange:function(e){return p(e)},name:"date",className:"input",placeholderText:"Select date",dateFormat:"yyyy/MM/dd",maxDate:new Date})),o.a.createElement("div",{className:"form-item"},o.a.createElement("label",{className:"label"},"Stop-loss Point/Downside Put"),o.a.createElement("input",{name:"slp",type:"text",ref:a,placeholder:"Eg. 5",defaultValue:0})),o.a.createElement("div",{className:"form-item"},o.a.createElement("label",{className:"hide label"}),o.a.createElement("button",{className:"form-button",type:"submit"},"Add Stock")))};var A=function(e){var t=Object(n.useState)(e.portfolio),a=Object(l.a)(t,2),r=a[0],c=a[1];return o.a.createElement("div",null,r!==[]&&r.map((function(e){return o.a.createElement("div",null,e.ticker+","+e.quantity+","+e.date.toString()+","+e.spl)})),o.a.createElement(J,{portfolio:r,setPortfolio:c}),o.a.createElement("button",{onClick:function(){e.setPortfolio(r),function(){var e={method:"post",url:"http://maelstrom.pythonanywhere.com/portfolio/upload",headers:{"Content-Type":"application/json"},data:JSON.stringify({userId:"HuXTITuGVlXZmwNsyNZlNIsjDky1",userEmail:"sharathbabu16@gmail.com",portfolio:r})};p()(e).then((function(e){JSON.stringify(e.data.response)})).catch((function(e){console.log(e)}))}()}},"Submit Portfolio"))};var T=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(l.a)(c,2),i=s[0],m=s[1],u=Object(n.useState)(!0),p=Object(l.a)(u,2),d=p[0],b=p[1],f=Object(n.useState)(null),h=Object(l.a)(f,2),v=h[0],E=h[1],y=Object(n.useState)([]),N=Object(l.a)(y,2),O=N[0],j=N[1];return o.a.createElement("div",null,a?o.a.createElement("div",null,o.a.createElement("div",{className:"navbar"},o.a.createElement("div",{className:"nav-wrapper"},o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:g.a,className:"logo-image"})),o.a.createElement("div",{className:"nav-link",onClick:function(){m(!0),b(!1)}},"Upload"),o.a.createElement("div",{className:"nav-link",onClick:function(){m(!1),b(!0)}},"Stonks")),o.a.createElement("div",{className:"sign-out-nav"},o.a.createElement(S,{setIsLogged:r,setUser:E}))),i&&o.a.createElement(A,{portfolio:O,setPortfolio:j}),d&&o.a.createElement(w,{user:v})):o.a.createElement(S,{setIsLogged:r,setUser:E}))};a(180);var q=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,a){e.exports=a.p+"static/media/fizzlogo.4b93b019.png"},77:function(e,t,a){e.exports=a.p+"static/media/G.0b1e5c66.png"},86:function(e,t,a){e.exports=a(181)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.9f06932d.chunk.js.map