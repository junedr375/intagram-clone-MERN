(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[0],{101:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(9),o=t.n(r),s=(t(64),t(35)),l=t.n(s),i=t(46),m=t(8),u=(t(66),t(67),t(126)),p=t(21),d=t.n(p),g=d.a.initializeApp({apiKey:"AIzaSyD3_zYAYz6cksr1Wg6FRUz-S5Lpb4Mc_RA",authDomain:"instagram-clone-mern-25a02.firebaseapp.com",databaseURL:"https://instagram-clone-mern-25a02.firebaseio.com",projectId:"instagram-clone-mern-25a02",storageBucket:"instagram-clone-mern-25a02.appspot.com",messagingSenderId:"23688901874",appId:"1:23688901874:web:bb75dc4e3c2c24410c0c6b",measurementId:"G-BNCHEK4XPP"}).firestore(),f=d.a.auth(),b=d.a.storage(),h=Object(n.forwardRef)((function(e,a){var t=e.user,r=e.username,o=e.postId,s=e.imageUrl,l=e.caption,i=Object(n.useState)([]),p=Object(m.a)(i,2),d=p[0],f=p[1],b=Object(n.useState)(""),h=Object(m.a)(b,2),E=h[0],_=h[1];Object(n.useEffect)((function(){var e;return o&&(e=g.collection("posts").doc(o).collection("comments").onSnapshot((function(e){f(e.docs.map((function(e){return e.data()})))}))),function(){e()}}),[o]);return c.a.createElement("div",{className:"post",ref:a},c.a.createElement("div",{className:"post__header"},c.a.createElement(u.a,{className:"post__avatar",alt:r,src:"/static/images/avatar/1.jpg"}),c.a.createElement("h3",null,r)),c.a.createElement("img",{className:"post__image",src:s,alt:"post"}),c.a.createElement("h4",{className:"post__text"},r," ",c.a.createElement("span",{className:"post__caption"},l)),c.a.createElement("div",{className:"post__comments"},d.map((function(e){return c.a.createElement("p",null,c.a.createElement("b",null,e.username)," ",e.text)}))),t&&c.a.createElement("form",{className:"post__commentBox"},c.a.createElement("input",{className:"post__input",type:"text",placeholder:"Add a comment...",value:E,onChange:function(e){return _(e.target.value)}}),c.a.createElement("button",{disabled:!E,className:"post__button",type:"submit",onClick:function(e){e.preventDefault(),g.collection("posts").doc(o).collection("comments").add({text:E,username:t.displayName}),_("")}},"Post")))})),E=(t(82),t(125)),_=t(124),v=t(51),j=t.n(v).a.create({baseURL:"https://instagram-clone-backed.herokuapp.com/"}),w=function(e){var a=e.username,t=Object(n.useState)(null),r=Object(m.a)(t,2),o=r[0],s=r[1],l=Object(n.useState)(""),i=Object(m.a)(l,2),u=(i[0],i[1]),p=Object(n.useState)(0),f=Object(m.a)(p,2),h=f[0],v=f[1],w=Object(n.useState)(""),N=Object(m.a)(w,2),O=N[0],y=N[1];return c.a.createElement("div",{className:"imageupload"},c.a.createElement("progress",{className:"imageupload__progress",value:h,max:"100"}),c.a.createElement(E.a,{placeholder:"Enter a caption",value:O,onChange:function(e){return y(e.target.value)}}),c.a.createElement("div",null,c.a.createElement("input",{type:"file",onChange:function(e){e.target.files[0]&&s(e.target.files[0])}}),c.a.createElement(_.a,{className:"imageupload__button",onClick:function(){b.ref("images/".concat(o.name)).put(o).on("state_changed",(function(e){var a=Math.round(e.bytesTransferred/e.totalBytes*100);v(a)}),(function(e){console.log(e)}),(function(){b.ref("images").child(o.name).getDownloadURL().then((function(e){u(e),j.post("/upload",{caption:O,user:a,image:e}),g.collection("posts").add({imageUrl:e,caption:O,username:a,timestamp:d.a.firestore.FieldValue.serverTimestamp()}),v(0),y(""),s(null)}))}))}},"Upload")),c.a.createElement("br",null))},N=t(122),O=t(123),y=t(55),S=t(52),C=t(54),k=t.n(C);function x(){return{height:"300px",top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var I=Object(N.a)((function(e){return{paper:{position:"absolute",width:400,height:200,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var A=function(){var e=I(),a=Object(n.useState)(x),t=Object(m.a)(a,1)[0],r=Object(n.useState)([]),o=Object(m.a)(r,2),s=o[0],p=o[1],d=Object(n.useState)(""),g=Object(m.a)(d,2),b=g[0],v=g[1],N=Object(n.useState)(""),C=Object(m.a)(N,2),A=C[0],L=C[1],R=Object(n.useState)(""),U=Object(m.a)(R,2),B=U[0],P=U[1],D=Object(n.useState)(null),W=Object(m.a)(D,2),z=W[0],F=W[1],M=Object(n.useState)(!1),T=Object(m.a)(M,2),G=T[0],H=T[1],J=Object(n.useState)(!1),K=Object(m.a)(J,2),Y=K[0],V=K[1];Object(n.useEffect)((function(){var e=f.onAuthStateChanged((function(e){if(e){if(console.log(e),F(e),!e.displayName)return e.updateProfile({displayName:b})}else F(null)}));return function(){e()}}),[z,b]);var X=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/sync").then((function(e){console.log(e),p(e.data)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){new k.a("f19a59fca1a6c9ee3e7e",{cluster:"ap2"}).subscribe("posts").bind("inserted",(function(e){console.log("data received",e),X()}))}),[]),Object(n.useEffect)((function(){X()}),[]),console.log("posts are >>>>>>>",s),c.a.createElement("div",{className:"app"},c.a.createElement(O.a,{open:G,onClose:function(){return H(!1)}},c.a.createElement("div",{style:t,className:e.paper},c.a.createElement("form",{className:"app__login"},c.a.createElement("center",null,c.a.createElement("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""})),c.a.createElement(E.a,{placeholder:"email",type:"text",value:A,onChange:function(e){return L(e.target.value)}}),c.a.createElement(E.a,{placeholder:"password",type:"password",value:B,onChange:function(e){return P(e.target.value)}}),c.a.createElement(_.a,{onClick:function(e){e.preventDefault(),f.signInWithEmailAndPassword(A,B).catch((function(e){return alert(e.message)})),H(!1)}},"Login")))),c.a.createElement(O.a,{open:Y,onClose:function(){return V(!1)}},c.a.createElement("div",{style:t,className:e.paper},c.a.createElement("form",{className:"app__login"},c.a.createElement("center",null,c.a.createElement("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""})),c.a.createElement(E.a,{type:"text",placeholder:"username",value:b,onChange:function(e){return v(e.target.value)}}),c.a.createElement(E.a,{placeholder:"email",type:"text",value:A,onChange:function(e){return L(e.target.value)}}),c.a.createElement(E.a,{placeholder:"password",type:"password",value:B,onChange:function(e){return P(e.target.value)}}),c.a.createElement(_.a,{onClick:function(e){e.preventDefault(),f.createUserWithEmailAndPassword(A,B).catch((function(e){return alert(e.message)})),V(!1)}},"Register")))),c.a.createElement("div",{className:"app__header"},c.a.createElement("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""}),(null===z||void 0===z?void 0:z.displayName)?c.a.createElement("div",{className:"app__headerRight"},c.a.createElement(_.a,{onClick:function(){return f.signOut()}},"Logout"),c.a.createElement(u.a,{className:"app__headerAvatar",alt:z.displayName,src:"/static/images/avatar/1.jpg"})):c.a.createElement("form",{className:"app__loginHome"},c.a.createElement(_.a,{onClick:function(){return H(!0)}},"Login"),c.a.createElement(_.a,{onClick:function(){return V(!0)}},"Sign Up"))),c.a.createElement("div",{className:"app__posts"},c.a.createElement("div",{className:"app__postsLeft"},c.a.createElement(y.a,null,s.map((function(e){return c.a.createElement(h,{user:z,key:e._id,postId:e._id,username:e.user,caption:e.caption,imageUrl:e.image})})))),c.a.createElement("div",{className:"app__postsRight"},c.a.createElement(S.a,{url:"https://www.instagram.com/p/B_uf9dmAGPw/",maxWidth:320,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}}))),(null===z||void 0===z?void 0:z.displayName)?c.a.createElement("div",{className:"app__upload"},c.a.createElement(w,{username:z.displayName})):c.a.createElement("center",null,c.a.createElement("h3",null,"Login to upload")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,a,t){e.exports=t(101)},64:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},82:function(e,a,t){}},[[59,1,2]]]);
//# sourceMappingURL=main.39ecd509.chunk.js.map