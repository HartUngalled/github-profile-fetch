(this["webpackJsonpgithub-profile-fetch"]=this["webpackJsonpgithub-profile-fetch"]||[]).push([[0],{20:function(e,t,n){e.exports=n(46)},25:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(18),u=n(4),l=n(19),s=function(e){return r.a.createElement("div",{className:"github-profile"},r.a.createElement("img",{alt:"GitHub user avatar",src:e.profile.avatar_url}),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"name"},e.profile.name),r.a.createElement("div",{className:"company"},e.profile.company)))},m=(n(25),function(e){return r.a.createElement("div",null,e.profiles.map((function(e){return r.a.createElement(s,{key:e.id,profile:Object(l.a)({},e)})})))}),f=n(5),p=n.n(f),d=n(16),h=n(17),v=n.n(h),b=function(e){var t=Object(a.useState)(),n=Object(u.a)(t,2),c=n[0],o=n[1],i=function(){var t=Object(d.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,v.a.get("https://api.github.com/users/".concat(c));case 3:a=t.sent,e.onSubmit(a.data),o("");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:i},r.a.createElement("input",{required:!0,type:"text",placeholder:"GitHub username",value:c,onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",null,"Add card"))},E=(n(44),function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),c=n[0],o=n[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},e.title),r.a.createElement(b,{onSubmit:function(e){o([].concat(Object(i.a)(c),[e]))}}),r.a.createElement(m,{profiles:c}))});n(45);o.a.render(r.a.createElement(E,{title:"The GitHub Cards App"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.872ea9ca.chunk.js.map