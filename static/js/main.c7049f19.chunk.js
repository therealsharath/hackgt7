(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{114:function(e,t,a){e.exports=a.p+"static/media/G.0b1e5c66.png"},115:function(e,t,a){e.exports=a.p+"static/media/fizzstart.6e8265f1.png"},117:function(e,t,a){e.exports=a.p+"static/media/stonksuser.f21ada93.png"},133:function(e,t,a){e.exports=a(227)},138:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),o=(a(138),a(9)),s=a(18),i=a.n(s),u=a(26),m=a(43),d=a.n(m),p=a(114),f=a.n(p),g=a(115),b=a.n(g),h=a(78),E=a.n(h),v=(a(156),a(159),a(116));E.a.initializeApp({apiKey:"AIzaSyCbx4JvFiTp1DWCDH2hyEuhnblsSM0rJI4",authDomain:"hackgt7-abs.firebaseapp.com",databaseURL:"https://hackgt7-abs.firebaseio.com",projectId:"hackgt7-abs",storageBucket:"hackgt7-abs.appspot.com",messagingSenderId:"894677172810",appId:"1:894677172810:web:f42768573a8a2bd7ae9cb3"});var O=E.a.auth();function y(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){var e=new E.a.auth.GoogleAuthProvider;O.signInWithPopup(e)}},"Sign in with ",r.a.createElement("img",{className:"google-icon",src:f.a,alt:"google-icon"})))}function N(){return O.currentUser&&r.a.createElement("button",{className:"sign-out-button",onClick:function(){return O.signOut()}},"Sign Out ")}var k=function(e){var t=Object(v.a)(O),a=Object(o.a)(t,1)[0],c=Object(n.useState)(!1),l=Object(o.a)(c,2),s=l[0],m=l[1],p=Object(n.useState)(!1),f=Object(o.a)(p,2),g=f[0],h=f[1];return Object(n.useEffect)((function(){function t(){return(t=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=JSON.stringify({userId:a.uid,userEmail:a.email}),n={method:"post",url:"https://maelstrom.pythonanywhere.com/login",headers:{"Content-Type":"application/json"},data:t},d()(n).then((function(e){})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a?(!s&&m(!0),s&&!g&&(!function(){t.apply(this,arguments)}(),h(!0),e.setUser(a)),e.setIsLogged(!0)):(s&&m(!1),h(!1),e.setIsLogged(!1),e.setUser(a))}),[a,s,m,g,h,e]),a?r.a.createElement(N,null):r.a.createElement("div",{className:"login-screen login-bg-image"},r.a.createElement("div",{className:"login-box"},r.a.createElement("img",{src:b.a,className:"main-logo",alt:"app-logo"}),r.a.createElement("div",{className:"sign-in"},r.a.createElement(y,null))))},j=a(14),S=a(62),w=a(65),x=a.n(w),C=a(117),P=a.n(C);var D=function(e){var t=Object(n.useState)(Object(j.a)(e.messageBoard)),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(P.a),i=Object(o.a)(s,2),u=i[0],m=i[1],p=Object(S.b)(),f=p.register,g=p.handleSubmit,b=p.reset,h=Object(n.useRef)(null);return Object(n.useEffect)((function(){h.current.scrollIntoView({behavior:"smooth"}),e.user&&u!==e.user.photoURL&&m(e.user.photoURL)}),[c,u,m,e.user]),r.a.createElement("div",{className:"bot"},r.a.createElement("div",{className:"message-container"},r.a.createElement("div",{className:"message-board"},c!==[]&&c.map((function(e){return r.a.createElement("div",{className:"container "+e[0]+"-message",key:c.indexOf(e)},r.a.createElement("img",{src:"bot"===e[0]?x.a:u,alt:"Avatar"}),r.a.createElement("font",{className:e[0]+"-text"},e[1]))})),r.a.createElement("div",{ref:h})),r.a.createElement("form",{className:"chat-form",onSubmit:g((function(t){!function(t){if(t.length>0){var a={method:"post",url:"https://maelstrom.pythonanywhere.com/chatbot/query",headers:{"Content-Type":"application/json"},data:JSON.stringify({userId:e.user.uid,userEmail:e.user.email,query:t})};d()(a).then((function(a){var n=Object(j.a)(c);if(n.push(["user",t]),null!==JSON.stringify(a.data.response)||JSON.stringify(a.data.response).length>1)if(JSON.stringify(a.data.response).length>60){var r=JSON.stringify(a.data.response).substring(1,JSON.stringify(a.data.response).length-1).replace(/(\.+|\:|\!|\?)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm,"$1$2|").split("|");r?r.forEach((function(e){n.push(["bot",e])})):n.push(["bot","I'm not sure what you mean?"])}else n.push(["bot",JSON.stringify(a.data.response).substring(1,JSON.stringify(a.data.response).length-1)]);else n.push(["bot","I'm not sure what you mean?"]);l(n),e.setMessageBoard(n)})).catch((function(e){console.log(e)}))}}(t.message),b()}))},r.a.createElement("div",{className:"chat-container"},r.a.createElement("input",{className:"chat-text",name:"message",ref:f})),r.a.createElement("input",{className:"chat-send",type:"submit",value:"\ud83d\ude80"}))))},I=a(118),q=a.n(I),J=(a(161),{Native:""});var z=function(e){var t=Object(S.b)({defaultValues:J}),a=t.register,c=t.handleSubmit,l=t.reset,s=t.control,i=t.errors,u=Object(n.useState)(null),m=Object(o.a)(u,2),d=m[0],p=m[1];return r.a.createElement("form",{className:"new-stock",onSubmit:c((function(t){l();var a=Object(j.a)(e.portfolio);t.purchaseDate=t.purchaseDate.getDate()+"/"+t.purchaseDate.getMonth()+"/"+t.purchaseDate.getFullYear(),a.push(t),e.setPortfolio(a),e.submitPortfolio(a)}))},r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{className:"label"},"Stock Ticker"),r.a.createElement("input",{name:"ticker",type:"text",ref:a({required:!0}),placeholder:"Eg. AAPL"}),i.ticker&&r.a.createElement("span",{className:"err"},"This field is required")),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{className:"label"},"Stock Quantity"),r.a.createElement("input",{name:"quantity",type:"text",ref:a({required:!0}),placeholder:"Number of shares you own"}),i.quantity&&r.a.createElement("span",{className:"err"},"This field is required")),r.a.createElement("section",{className:"form-item"},r.a.createElement("label",{className:"label"},"Date Purchased"),r.a.createElement(S.a,{as:q.a,control:s,valueName:"selected",selected:d,onChange:function(e){var t=Object(o.a)(e,1)[0];return p(t),t},dateFormat:"dd/MM/yyyy",placeholderText:"Select Date",name:"purchaseDate",rules:{required:!0},defaultValue:null,maxDate:new Date}),i.purchaseDate&&r.a.createElement("span",{className:"err"},"This field is required")),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{className:"label"},"Stop-loss/Downside (Optional)"),r.a.createElement("input",{name:"slp",type:"text",ref:a,placeholder:"Eg. 5",defaultValue:0})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{className:"hide label"},"\xa0"),r.a.createElement("button",{type:"submit"},"Add Stock")))},A=a(19),T=a(6),B=a(275),M=a(17),R=a(280),L=a(281),U=a(273),W=a(279),F=a(268),K=a(282),H=a(272),Q=a(285),V=a(276),Y=a(278),$=a(283),G=a(274),X=a(286),_=a(123),Z=a.n(_);function ee(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var te=[{id:"name",numeric:!1,disablePadding:!0,label:"Stock Ticker"},{id:"quantity",numeric:!0,disablePadding:!1,label:"Quantity"},{id:"date",numeric:!1,disablePadding:!1,label:"Date Purchased"},{id:"slp",numeric:!0,disablePadding:!1,label:"Stop-loss price/Downside price"}];function ae(e){var t=e.classes,a=e.onSelectAllClick,n=e.order,c=e.orderBy,l=e.numSelected,o=e.rowCount,s=e.onRequestSort;return r.a.createElement(F.a,null,r.a.createElement(H.a,null,r.a.createElement(U.a,{padding:"checkbox"},r.a.createElement($.a,{indeterminate:l>0&&l<o,checked:o>0&&l===o,onChange:a,inputProps:{"aria-label":"select all desserts"}})),te.map((function(e){return r.a.createElement(U.a,{key:e.id,align:"name"===e.id?"left":"center",padding:e.disablePadding?"none":"default",sortDirection:c===e.id&&n},r.a.createElement(Q.a,{active:c===e.id,direction:c===e.id?n:"asc",onClick:(a=e.id,function(e){s(e,a)})},e.label,c===e.id?r.a.createElement("span",{className:t.visuallyHidden},"desc"===n?"sorted descending":"sorted ascending"):null));var a}))))}var ne=Object(B.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(M.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),re=function(e){var t=ne(),a=e.numSelected;return r.a.createElement(V.a,{className:Object(T.a)(t.root,Object(A.a)({},t.highlight,a>0))},a>0?r.a.createElement(X.a,{title:"Delete",onClick:function(){e.deleteStock(),e.setSelected([])}},r.a.createElement(G.a,{"aria-label":"delete"},r.a.createElement(Z.a,null))):null)},ce=Object(B.a)((function(e){return{root:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},paper:{width:"90%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function le(e){var t=ce(),a=Object(n.useState)("asc"),c=Object(o.a)(a,2),l=c[0],s=c[1],i=Object(n.useState)("quantity"),u=Object(o.a)(i,2),m=u[0],d=u[1],p=Object(n.useState)([]),f=Object(o.a)(p,2),g=f[0],b=f[1],h=Object(n.useState)(0),E=Object(o.a)(h,2),v=E[0],O=E[1],y=Object(n.useState)(5),N=Object(o.a)(y,2),k=N[0],j=N[1],S=k-Math.min(k,e.rows.length-v*k);return r.a.createElement("div",{className:t.root},r.a.createElement(Y.a,{className:t.paper},r.a.createElement(W.a,null,r.a.createElement(R.a,{className:t.table,"aria-labelledby":"tableTitle",size:"small","aria-label":"enhanced table"},r.a.createElement(ae,{classes:t,numSelected:g.length,order:l,orderBy:m,onSelectAllClick:function(t){if(t.target.checked){var a=e.rows.map((function(e){return e.name}));b(a)}else b([])},onRequestSort:function(e,t){s(m===t&&"asc"===l?"desc":"asc"),d(t)},rowCount:e.rows.length}),r.a.createElement(L.a,null,function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(e.rows,function(e,t){return"desc"===e?function(e,a){return ee(e,a,t)}:function(e,a){return-ee(e,a,t)}}(l,m)).slice(v*k,v*k+k).map((function(e,t){var a,n=(a=e.name,-1!==g.indexOf(a)),c="enhanced-table-checkbox-".concat(t);return r.a.createElement(H.a,{hover:!0,onClick:function(t){return function(e,t){var a=g.indexOf(t),n=[];-1===a?n=n.concat(g,t):0===a?n=n.concat(g.slice(1)):a===g.length-1?n=n.concat(g.slice(0,-1)):a>0&&(n=n.concat(g.slice(0,a),g.slice(a+1))),b(n)}(0,e.name)},role:"checkbox","aria-checked":n,tabIndex:-1,key:e.name,selected:n},r.a.createElement(U.a,{padding:"checkbox"},r.a.createElement($.a,{checked:n,inputProps:{"aria-labelledby":c}})),r.a.createElement(U.a,{align:"left",component:"th",id:c,scope:"row",padding:"none"},e.name),r.a.createElement(U.a,{align:"center"},e.quantity),r.a.createElement(U.a,{align:"center"},e.purchaseDate),r.a.createElement(U.a,{align:"center"},e.slp))})),S>0&&r.a.createElement(H.a,{style:{height:33*S}},r.a.createElement(U.a,{colSpan:6}))))),r.a.createElement(K.a,{rowsPerPageOptions:[5],component:"div",count:e.rows.length,rowsPerPage:k,page:v,onChangePage:function(e,t){O(t)},onChangeRowsPerPage:function(e){j(parseInt(e.target.value,10)),O(0)}})),r.a.createElement(re,{numSelected:g.length,selected:g,deleteStock:function(){e.deleteStock(g)},setSelected:b}))}var oe=function(e){var t=Object(n.useState)(e.portfolio),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(e.rows),i=Object(o.a)(s,2),u=i[0],m=i[1],p=function(){var t={method:"post",url:"https://maelstrom.pythonanywhere.com/portfolio/upload",headers:{"Content-Type":"application/json"},data:JSON.stringify({userId:e.user.uid,userEmail:e.user.email,portfolio:c})};d()(t).then((function(e){JSON.stringify(e.data.response)})).catch((function(e){console.log(e)}))},f=function(e,t,a,n){return{name:e,quantity:t,purchaseDate:a,slp:n}};return r.a.createElement("div",{className:"portfolio-container"},r.a.createElement("h1",null,"Your Portfolio"),c.length>=1?r.a.createElement(le,{rows:u,deleteStock:function(t){if(t&&t.length>0){var a=[],n=[];u.forEach((function(e){t.indexOf(e.name)<0&&a.push(f(e.name,e.quantity,e.purchaseDate,e.slp))})),e.portfolio.forEach((function(e){t.indexOf(e.ticker)<0&&n.push(e)})),m(a),e.setRows(a),l(n),e.setPortfolio(n),e.user&&p()}}}):r.a.createElement("div",{className:"main-folio"}," ",r.a.createElement("h2",null,"Your portfolio is empty ",r.a.createElement("span",{role:"img","aria-label":"cry"},"\ud83d\ude2d"))," "),r.a.createElement("div",{className:"add-new"},r.a.createElement("h2",null,"Add additional stocks"),r.a.createElement(z,{portfolio:c,setPortfolio:l,submitPortfolio:function(t){if(t){var a=Object(j.a)(u),n=t[t.length-1];n&&a.push(f(n.ticker,n.quantity,n.purchaseDate,n.slp)),m(a),e.setRows(a),e.setPortfolio(t),e.user&&p()}}}),r.a.createElement("div",{className:"buffer"})))};var se=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),s=Object(o.a)(l,2),i=s[0],u=s[1],m=Object(n.useState)(!0),d=Object(o.a)(m,2),p=d[0],f=d[1],g=Object(n.useState)(null),b=Object(o.a)(g,2),h=b[0],E=b[1],v=Object(n.useState)([]),O=Object(o.a)(v,2),y=O[0],N=O[1],j=Object(n.useState)([]),S=Object(o.a)(j,2),w=S[0],C=S[1],P=Object(n.useState)([["bot","Hey there! I\u2019m Fizz, your personal financial consultant!"],["bot","I can help you with some of the following: analyzing your current portfolio, providing you with suggestions about the stocks you may want to transact, and even recommending potential assets to invest in!"],["bot",'For example, get started by asking me "What is AMZN??!"']]),I=Object(o.a)(P,2),q=I[0],J=I[1],z=Object(n.useState)("burger-container"),A=Object(o.a)(z,2),T=A[0],B=A[1],M=Object(n.useState)("nav-wrapper"),R=Object(o.a)(M,2),L=R[0],U=R[1],W=function(){u(!0),f(!1)},F=function(){u(!1),f(!0)},K=function(){B("burger-container"===T?"change":"burger-container"),U("nav-wrapper"===L?"open-wrapper-class":"nav-wrapper")};return r.a.createElement("div",{className:"home"},a?r.a.createElement("div",null,r.a.createElement("div",{className:"navbar"},r.a.createElement("img",{src:x.a,className:"logo-image",alt:"fizzLogo"}),r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("div",{className:"nav-link",onClick:F},"Fizz"),r.a.createElement("div",{className:"nav-link",onClick:W},"Portfolio"),r.a.createElement("a",{className:"nav-link",href:"https://docs.google.com/document/d/1aeIvsM8bKKWKqaCXBCv7tIAwjWvPFJ6s40DcxDTlx7Q/",target:"_blank",rel:"noopener noreferrer"},"Docs"),r.a.createElement("div",{className:"nav-link",onClick:function(){return console.log(4)}},"About Us")),r.a.createElement("div",{className:"sign-out-nav"},r.a.createElement(k,{setIsLogged:c,setUser:E})),r.a.createElement("div",{className:T,onClick:K},r.a.createElement("div",{className:"bar1"}),r.a.createElement("div",{className:"bar2"}),r.a.createElement("div",{className:"bar3"}))),r.a.createElement("div",{className:L},r.a.createElement("div",{className:"open-nav-link",onClick:function(){F(),K()}},"Fizz"),r.a.createElement("div",{className:"open-nav-link",onClick:function(){W(),K()}},"Portfolio"),r.a.createElement("a",{className:"open-nav-link",href:"https://docs.google.com/document/d/1aeIvsM8bKKWKqaCXBCv7tIAwjWvPFJ6s40DcxDTlx7Q/",target:"_blank",rel:"noopener noreferrer",onClick:K},"Docs"),r.a.createElement("div",{className:"open-nav-link",onClick:function(){return console.log(4)}},"About Us")),i&&r.a.createElement(oe,{user:h,portfolio:y,setPortfolio:N,rows:w,setRows:C}),p&&r.a.createElement(D,{user:h,messageBoard:q,setMessageBoard:J})):r.a.createElement(k,{setIsLogged:c,setUser:E}))};a(226);var ie=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,a){e.exports=a.p+"static/media/fizzlogo.4b93b019.png"}},[[133,1,2]]]);
//# sourceMappingURL=main.c7049f19.chunk.js.map