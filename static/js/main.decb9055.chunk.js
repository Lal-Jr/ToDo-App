(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n(8),i=n.n(c),a=(n(15),n(7)),r=n(3),d=n(1);var u=function(t){var e=Object(o.useState)(t.edit?t.edit.value:""),n=Object(r.a)(e,2),c=n[0],i=n[1],a=Object(o.useRef)(null);Object(o.useEffect)((function(){a.current.focus()}));var u=function(t){i(t.target.value)};return Object(d.jsx)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),i("")},children:t.edit?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{type:"text",placeholder:"Update Your Item",value:c,name:"text",className:"todo-input edit",onChange:u,ref:a}),Object(d.jsx)("button",{className:"todo-button edit",children:"Update"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{type:"text",placeholder:"Add Todo",value:c,name:"text",className:"todo-input",onChange:u,ref:a}),Object(d.jsx)("button",{className:"todo-button",children:"Add Todo"})]})})},s=n(9),l=n(10);var j=function(t){var e=t.todos,n=t.completeTodo,c=t.removeTodo,i=t.updateTodo,a=Object(o.useState)({id:null,value:""}),j=Object(r.a)(a,2),b=j[0],f=j[1];return b.id?Object(d.jsx)(u,{edit:b,onSubmit:function(t){i(b.id,t),f({id:null,value:""})}}):e.map((function(t,e){return Object(d.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(d.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(d.jsxs)("div",{className:"icons",children:[Object(d.jsx)(s.a,{onClick:function(){return c(t.id)},className:"delete-icon"}),Object(d.jsx)(l.a,{onClick:function(){return f({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var b=function(){var t=Object(o.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"What's the Plan for Today?"}),Object(d.jsx)(u,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(a.a)(n));c(e)}}}),Object(d.jsx)(j,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTodo:function(t){var e=Object(a.a)(n).filter((function(e){return e.id!==t}));c(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&c((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var f=function(){return Object(d.jsx)("div",{className:"todo-app",children:Object(d.jsx)(b,{})})};i.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.decb9055.chunk.js.map