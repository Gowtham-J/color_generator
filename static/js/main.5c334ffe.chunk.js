(this.webpackJsonpcolor_generator=this.webpackJsonpcolor_generator||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(6),o=c.n(a),l=(c(11),c(5)),s=c(2);var i=c(0),u=function(e){var t=e.rgb,c=e.index,r=e.weight,a=e.colorValue,o=Object(n.useState)(!1),l=Object(s.a)(o,2),u=l[0],j=l[1],b=t.join(","),O="#".concat(a);return Object(n.useEffect)((function(){var e=setTimeout((function(){j(!1)}),3e3);return function(){return clearTimeout(e)}}),[u]),Object(i.jsxs)("article",{className:"color ".concat(c>10&&"color-light"),style:{background:"rgb(".concat(b,")")},onClick:function(){j(!0),navigator.clipboard.writeText(O)},children:[Object(i.jsxs)("p",{className:"percent-value",children:[r,"%"]}),Object(i.jsx)("p",{className:"color-value",children:O}),u&&Object(i.jsx)("p",{className:"alert",children:"copied to clipboard"})]})},j=c(4),b=c.n(j);var O=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),o=Object(s.a)(a,2),j=o[0],O=o[1],h=Object(n.useState)(new b.a("#f15020").all(10)),d=Object(s.a)(h,2),f=d[0],g=d[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("section",{className:"container",children:[Object(i.jsx)("h3",{children:"color generator"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();try{var t=new b.a(c).all(10);g(t)}catch(j){O(!0),console.log(j)}},children:[Object(i.jsx)("input",{htmlFor:"text",value:c,onChange:function(e){return r(e.target.value)},placeholder:"#f15020",className:j?"error":null}),Object(i.jsx)("button",{className:"btn",type:"submit",children:"generate"})]})]}),Object(i.jsx)("section",{className:"colors",children:f.map((function(e,t){return Object(i.jsx)(u,Object(l.a)(Object(l.a)({},e),{},{index:t,colorValue:e.hex}),t)}))})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),a(e),o(e)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),h()}},[[13,1,2]]]);
//# sourceMappingURL=main.5c334ffe.chunk.js.map