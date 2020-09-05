(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{117:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),i=o(29),r=o.n(i),l=(o(94),o(88)),d=o(87),c=o(48),s=o(49),u=o.n(s),m=o(77),p=function(){return m.get("https://jsonplaceholder.typicode.com/todos?_limit=5")},_=o(6),D=o.n(_),E=o(9),T=o.n(E),f=o(47),g=o(78),x=o.n(g),v=o(79),h=o.n(v),b=function(e){var t=e.showDeleteQuestion,o=e.removeToDo,a=e.id;return n.a.createElement("div",{className:T.a.deleteQuestion},"Delete?\xa0",n.a.createElement("button",{onClick:function(){return o(a)}},"Yes"),n.a.createElement("button",{autoFocus:!0,onClick:function(){return t(!1)}},"No"))},k=function(e){var t=e.title,o=e.id,i=e.completed,r=e.removeToDo,l=e.onChange,d=e.index,s=e.openEditWindow,u={text:T.a.notCompletedText,title:T.a.titleInProgress,background:T.a.notCompletedBackground};i&&(u={text:T.a.completedText,title:T.a.titleCompleted,background:T.a.completedBackground});var m=Object(a.useState)(!1),p=Object(c.a)(m,2),_=p[0],E=p[1];return n.a.createElement(f.b,{draggableId:o.toString(),index:d},(function(e){return n.a.createElement("div",Object.assign({className:D()(T.a.toDo,u.background)},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,onDoubleClick:s,id:o,title:t,onPointerLeave:function(){}}),n.a.createElement("input",{id:"toDoCheck".concat(o),className:T.a.customCheckbox,type:"checkbox",checked:i,onChange:function(){return l(o)}}),n.a.createElement("label",{for:"toDoCheck".concat(o)}),n.a.createElement("span",{className:u.title,id:o},i?"Completed!":"In progress..."),_?n.a.createElement(b,{showDeleteQuestion:E,removeToDo:r,id:o}):n.a.createElement("span",{className:D()(T.a.edit)},n.a.createElement("input",{id:o,title:"Edit",className:D()(T.a.editButton),type:"image",alt:"Edit",onClick:s,src:x.a}),n.a.createElement("input",{className:D()(T.a.detButton),type:"image",src:h.a,title:"Delete",alt:"Delete",onClick:function(){return E(!0)}})),n.a.createElement("div",{className:D()(u.text,T.a.title),id:o,title:t}," ",t," "))}))},C=o(59),B=o(43),N=o(44),M=o.n(N),F=function(e){var t=e.addToDo,o=Object(C.a)({initialValues:{toDoText:""},validationSchema:B.a({toDoText:B.b().required("Your to-do must have text!")}),validateOnChange:!1,validateOnBlur:!1,onSubmit:function(e){t(e.toDoText),o.resetForm()}}),a=o.errors.toDoText?D()(M.a.errorForInput,M.a.toDoTextField):M.a.toDoTextField;return n.a.createElement("form",{onSubmit:o.handleSubmit},n.a.createElement("div",null,n.a.createElement("textarea",{onChange:o.handleChange,id:"toDoText",name:"toDoText",value:o.values.toDoText,placeholder:"Your new to do",className:a})," ",n.a.createElement("input",{type:"submit",className:M.a.addToDoButton,value:""}),o.errors.toDoText&&n.a.createElement("div",{className:D()(M.a.error)},o.errors.toDoText)))},y=o(20),w=o.n(y),S=o(84),I=o.n(S),O=function(e){var t=e.toDoEditMode,o=e.completeEditToDo,a=e.closeEditMode,i=Object(C.a)({initialValues:{toDoText:t.title},validationSchema:B.a({toDoText:B.b().required("Required!")}),onSubmit:function(e){o(t.id,e.toDoText)}}),r=w.a.input;return i.errors.toDoText&&(r=D()(r,w.a.inputError)),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:D()(w.a.modal),id:"background",onDoubleClick:a},n.a.createElement("div",{className:D()(w.a.modalBody)},n.a.createElement("form",{onSubmit:i.handleSubmit,className:w.a.formBlock},n.a.createElement("textarea",{className:r,onChange:i.handleChange,id:"toDoText",name:"toDoText",value:i.values.toDoText,placeholder:"Your to do",autoFocus:!0}),n.a.createElement("button",{className:w.a.editButton,type:"submit"},"Edit to do"),n.a.createElement("input",{className:D()(w.a.closeImg),type:"image",alt:"Close",src:I.a,onClick:a,id:"background"}),i.errors.toDoText&&n.a.createElement("div",{className:D()(w.a.error)},i.errors.toDoText)))))},L=o(85),j=o.n(L),R=o(86),W=o.n(R),P=function(){return n.a.createElement("div",null,n.a.createElement("img",{className:j.a.loader,src:W.a,alt:"Loading..."}))},V=n.a.memo((function(e){var t=e.toDosList,o=e.onChangeCompletion,a=e.removeToDo,i=e.addToDo,r=e.onDragEnd,l=e.openEditWindow,d=e.toDoEditMode,c=e.completeEditToDo,s=e.closeEditMode;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:u.a.toDoBlock},n.a.createElement("h1",{className:u.a.logoName},"ToDo List"),n.a.createElement(F,{addToDo:i}),n.a.createElement(f.a,{onDragEnd:r},n.a.createElement(f.c,{droppableId:"list"},(function(e){return n.a.createElement("div",Object.assign({className:D()(u.a.toDoList)},e.droppableProps,{ref:e.innerRef}),0!==t.length?t.map((function(e,t){return n.a.createElement(k,{key:e.id,id:e.id,title:e.title,completed:e.completed,onChange:o,removeToDo:a,index:t,openEditWindow:l})})):n.a.createElement("span",{className:u.a.noTasks},"No tasks!"),e.placeholder)})))),d.edit&&n.a.createElement(O,{toDoEditMode:d,completeEditToDo:c,closeEditMode:s}))})),J=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),o=t[0],i=t[1],r=Object(a.useState)({edit:!1,id:null,title:null}),s=Object(c.a)(r,2),u=s[0],m=s[1];Object(a.useEffect)((function(){p().then((function(e){i(e.data.reverse())}))}),[]);return n.a.createElement(n.a.Fragment,null,!o&&n.a.createElement(P,null),o&&n.a.createElement(V,{toDosList:o,onChangeCompletion:function(e){i(o.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},removeToDo:function(e){i(o.filter((function(t){return t.id!==e})))},addToDo:function(e){var t=o.map((function(e){return e.id})),a=Math.max.apply(null,t)+1;a===-1/0&&(a=1);var n=Object(d.a)(o);n.unshift({userId:1,id:a,title:e,completed:!1}),i(n)},onDragEnd:function(e){var t=e.destination,a=e.source;if(t&&(t.droppableId!==a.droppableId||t.index!==a.index)){var n=Array.from(o),r=Object(l.a)({},n[a.index]);n.splice(a.index,1),n.splice(t.index,0,r),i(n)}},openEditWindow:function(e){if("checkbox"!==e.target.type){var t=null;o.forEach((function(o){o.id.toString()!==e.target.id.toString()||(t=o.title)})),m({edit:!0,id:e.target.id,title:t})}},toDoEditMode:u,completeEditToDo:function(e,t){var a=o.map((function(o){return o.id.toString()===e&&(o.title=t),o}));i(a),m({edit:!1,id:null,title:null})},closeEditMode:function(e){"background"===e.target.id&&m({edit:!1,id:null,title:null})}}))},q=function(){return n.a.createElement(J,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},20:function(e,t,o){e.exports={modal:"ModalEditMode_modal__1L_dm",modalBody:"ModalEditMode_modalBody__2RfV-",error:"ModalEditMode_error__3yLH7",formBlock:"ModalEditMode_formBlock__3Wtfq",input:"ModalEditMode_input__2cmCs",inputError:"ModalEditMode_inputError__1hXWc",closeImg:"ModalEditMode_closeImg__3fvKy",editButton:"ModalEditMode_editButton__3ZhEF"}},44:function(e,t,o){e.exports={error:"ToDoField_error__2qULJ",errorForInput:"ToDoField_errorForInput__2rFWl",addToDoButton:"ToDoField_addToDoButton__1FA5V",toDoTextField:"ToDoField_toDoTextField__2TV7r"}},49:function(e,t,o){e.exports={toDoBlock:"ToDoList_toDoBlock__1F8vA",logoName:"ToDoList_logoName__3TycJ",toDoList:"ToDoList_toDoList__38NNc",noTasks:"ToDoList_noTasks__3Z-vc"}},78:function(e,t,o){e.exports=o.p+"static/media/edit.5c12591d.svg"},79:function(e,t,o){e.exports=o.p+"static/media/trash.665926e2.svg"},84:function(e,t,o){e.exports=o.p+"static/media/close.20ced97c.svg"},85:function(e,t,o){e.exports={loader:"loader_loader__3ob6H"}},86:function(e,t,o){e.exports=o.p+"static/media/loader.73cfd7f8.svg"},89:function(e,t,o){e.exports=o(117)},9:function(e,t,o){e.exports={completedBackground:"ToDo_completedBackground__1UXK7",notCompletedBackground:"ToDo_notCompletedBackground__XzVhG",completedText:"ToDo_completedText__2cRpw",notCompletedText:"ToDo_notCompletedText__1kRvc",toDo:"ToDo_toDo__2B14_",edit:"ToDo_edit__2J7hJ",editButton:"ToDo_editButton__37Z0R",detButton:"ToDo_detButton__2V3OR",title:"ToDo_title__1ReA-",titleCompleted:"ToDo_titleCompleted__20cda",titleInProgress:"ToDo_titleInProgress__hSc5w",deleteQuestion:"ToDo_deleteQuestion__2pP3-",customCheckbox:"ToDo_customCheckbox__TMmno"}},94:function(e,t,o){}},[[89,1,2]]]);
//# sourceMappingURL=main.7eaddf0a.chunk.js.map