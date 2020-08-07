(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{10:function(e,t,o){e.exports={completedBackground:"ToDo_completedBackground__1UXK7",notCompletedBackground:"ToDo_notCompletedBackground__XzVhG",completedText:"ToDo_completedText__2cRpw",notCompletedText:"ToDo_notCompletedText__1kRvc",toDo:"ToDo_toDo__2B14_",edit:"ToDo_edit__2J7hJ",editButton:"ToDo_editButton__37Z0R",detButton:"ToDo_detButton__2V3OR",title:"ToDo_title__1ReA-",titleCompleted:"ToDo_titleCompleted__20cda",titleInProgress:"ToDo_titleInProgress__hSc5w",deleteQuestion:"ToDo_deleteQuestion__2pP3-"}},117:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(29),i=o.n(r),l=(o(94),o(88)),d=o(87),c=o(47),s=o(48),u=o.n(s),m=o(77),p=function(){return m.get("https://jsonplaceholder.typicode.com/todos?_limit=5")},_=o(6),D=o.n(_),E=o(10),f=o.n(E),g=o(46),T=o(78),v=o.n(T),x=o(79),h=o.n(x),b=function(e){var t=e.showDeleteQuestion,o=e.removeToDo,n=e.id;return a.a.createElement("div",{className:f.a.deleteQuestion},"Delete?\xa0",a.a.createElement("button",{onClick:function(){return o(n)}},"Yes"),a.a.createElement("button",{autoFocus:!0,onClick:function(){return t(!1)}},"No"))},k=function(e){var t=e.title,o=e.id,r=e.completed,i=e.removeToDo,l=e.onChange,d=e.index,s=e.openEditWindow,u={text:f.a.notCompletedText,title:f.a.titleInProgress,background:f.a.notCompletedBackground};r&&(u={text:f.a.completedText,title:f.a.titleCompleted,background:f.a.completedBackground});var m=Object(n.useState)(!1),p=Object(c.a)(m,2),_=p[0],E=p[1];return a.a.createElement(g.b,{draggableId:o.toString(),index:d},(function(e){return a.a.createElement("div",Object.assign({className:D()(f.a.toDo,u.background)},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,onDoubleClick:s,id:o,title:t,onPointerLeave:function(){}}),a.a.createElement("input",{type:"checkbox",checked:r,onChange:function(){return l(o)}}),a.a.createElement("span",{className:u.title,id:o},r?"Completed!":"In progress..."),_?a.a.createElement(b,{showDeleteQuestion:E,removeToDo:i,id:o}):a.a.createElement("span",{className:D()(f.a.edit)},a.a.createElement("input",{id:o,title:"Edit",className:D()(f.a.editButton),type:"image",alt:"Edit",onClick:s,src:v.a}),a.a.createElement("input",{className:D()(f.a.detButton),type:"image",src:h.a,title:"Delete",alt:"Delete",onClick:function(){return E(!0)}})),a.a.createElement("div",{className:D()(u.text,f.a.title),id:o,title:t}," ",t," "))}))},C=o(58),N=o(43),B=o(63),M=o.n(B),y=function(e){var t=e.addToDo,o=Object(C.a)({initialValues:{toDoText:""},validationSchema:N.a({toDoText:N.b().required("Your to-do must have text!")}),onSubmit:function(e){t(e.toDoText),o.resetForm()}}),n=o.errors.toDoText?M.a.errorForInput:"";return a.a.createElement("form",{onSubmit:o.handleSubmit},a.a.createElement("div",null,a.a.createElement("input",{onChange:o.handleChange,id:"toDoText",name:"toDoText",type:"text",value:o.values.toDoText,placeholder:"Your new to do",className:n})," ",a.a.createElement("input",{type:"submit",className:M.a.addToDoButton,value:""}),o.errors.toDoText&&a.a.createElement("div",{className:D()(M.a.error)},o.errors.toDoText)))},w=o(26),S=o.n(w),I=o(84),F=o.n(I),L=function(e){var t=e.toDoEditMode,o=e.completeEditToDo,n=e.closeEditMode,r=Object(C.a)({initialValues:{toDoText:t.title},validationSchema:N.a({toDoText:N.b().required("Required!")}),onSubmit:function(e){o(t.id,e.toDoText)}}),i=S.a.input;return r.errors.toDoText&&(i=D()(i,S.a.inputError)),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:D()(S.a.modal),id:"background",onDoubleClick:n},a.a.createElement("div",{className:D()(S.a.modalBody)},a.a.createElement("form",{onSubmit:r.handleSubmit,className:S.a.formBlock},a.a.createElement("input",{className:i,onChange:r.handleChange,id:"toDoText",name:"toDoText",type:"text",value:r.values.toDoText,placeholder:"Your to do",autoFocus:!0}),a.a.createElement("button",{type:"submit"},"Edit to do"),a.a.createElement("input",{className:D()(S.a.closeImg),type:"image",alt:"Close",src:F.a,onClick:n,id:"background"}),r.errors.toDoText&&a.a.createElement("div",{className:D()(S.a.error)},r.errors.toDoText)))))},j=o(85),O=o.n(j),R=o(86),W=o.n(R),P=function(){return a.a.createElement("div",null,a.a.createElement("img",{className:O.a.loader,src:W.a,alt:"Loading..."}))},J=a.a.memo((function(e){var t=e.toDosList,o=e.onChangeCompletion,n=e.removeToDo,r=e.addToDo,i=e.onDragEnd,l=e.openEditWindow,d=e.toDoEditMode,c=e.completeEditToDo,s=e.closeEditMode;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:u.a.toDoBlock},a.a.createElement("h1",{className:u.a.logoName},"ToDo List"),a.a.createElement(y,{addToDo:r}),a.a.createElement(g.a,{onDragEnd:i},a.a.createElement(g.c,{droppableId:"list"},(function(e){return a.a.createElement("div",Object.assign({className:D()(u.a.toDoList)},e.droppableProps,{ref:e.innerRef}),0!==t.length?t.map((function(e,t){return a.a.createElement(k,{key:e.id,id:e.id,title:e.title,completed:e.completed,onChange:o,removeToDo:n,index:t,openEditWindow:l})})):a.a.createElement("span",{className:u.a.noTasks},"No tasks!"),e.placeholder)})))),d.edit&&a.a.createElement(L,{toDoEditMode:d,completeEditToDo:c,closeEditMode:s}))})),V=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),o=t[0],r=t[1],i=Object(n.useState)({edit:!1,id:null,title:null}),s=Object(c.a)(i,2),u=s[0],m=s[1];Object(n.useEffect)((function(){p().then((function(e){r(e.data.reverse())}))}),[]);return a.a.createElement(a.a.Fragment,null,!o&&a.a.createElement(P,null),o&&a.a.createElement(J,{toDosList:o,onChangeCompletion:function(e){r(o.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},removeToDo:function(e){r(o.filter((function(t){return t.id!==e})))},addToDo:function(e){var t=o.map((function(e){return e.id})),n=Math.max.apply(null,t)+1;n===-1/0&&(n=1);var a=Object(d.a)(o);a.unshift({userId:1,id:n,title:e,completed:!1}),r(a)},onDragEnd:function(e){var t=e.destination,n=e.source;if(t&&(t.droppableId!==n.droppableId||t.index!==n.index)){var a=Array.from(o),i=Object(l.a)({},a[n.index]);a.splice(n.index,1),a.splice(t.index,0,i),r(a)}},openEditWindow:function(e){if("checkbox"!==e.target.type){var t=null;o.forEach((function(o){o.id.toString()!==e.target.id.toString()||(t=o.title)})),m({edit:!0,id:e.target.id,title:t})}},toDoEditMode:u,completeEditToDo:function(e,t){var n=o.map((function(o){return o.id.toString()===e&&(o.title=t),o}));r(n),m({edit:!1,id:null,title:null})},closeEditMode:function(e){"background"===e.target.id&&m({edit:!1,id:null,title:null})}}))},q=function(){return a.a.createElement(V,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,o){e.exports={modal:"ModalEditMode_modal__1L_dm",modalBody:"ModalEditMode_modalBody__2RfV-",error:"ModalEditMode_error__3yLH7",formBlock:"ModalEditMode_formBlock__3Wtfq",input:"ModalEditMode_input__2cmCs",inputError:"ModalEditMode_inputError__1hXWc",closeImg:"ModalEditMode_closeImg__3fvKy"}},48:function(e,t,o){e.exports={toDoBlock:"ToDoList_toDoBlock__1F8vA",logoName:"ToDoList_logoName__3TycJ",toDoList:"ToDoList_toDoList__38NNc",noTasks:"ToDoList_noTasks__3Z-vc"}},63:function(e,t,o){e.exports={error:"ToDoField_error__2qULJ",errorForInput:"ToDoField_errorForInput__2rFWl",addToDoButton:"ToDoField_addToDoButton__1FA5V"}},78:function(e,t,o){e.exports=o.p+"static/media/edit.5c12591d.svg"},79:function(e,t,o){e.exports=o.p+"static/media/trash.665926e2.svg"},84:function(e,t,o){e.exports=o.p+"static/media/close.20ced97c.svg"},85:function(e,t,o){e.exports={loader:"loader_loader__3ob6H"}},86:function(e,t,o){e.exports=o.p+"static/media/loader.73cfd7f8.svg"},89:function(e,t,o){e.exports=o(117)},94:function(e,t,o){}},[[89,1,2]]]);
//# sourceMappingURL=main.8ff09f6c.chunk.js.map