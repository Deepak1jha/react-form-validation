(this["webpackJsonpreact-form-validation"]=this["webpackJsonpreact-form-validation"]||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),n=t(5),m=t.n(n),l=(t(12),t(1)),o=t(2),c=t(6),i=function(e,a){var t=Object(r.useState)({username:"",email:"",password:"",confirmPassword:""}),s=Object(l.a)(t,2),n=s[0],m=s[1],i=Object(r.useState)({}),u=Object(l.a)(i,2),d=u[0],p=u[1],f=Object(r.useState)(!1),E=Object(l.a)(f,2),b=E[0],v=E[1];return Object(r.useEffect)((function(){0===Object.keys(d).length&&b&&e()}),[d]),{handleChange:function(e){var a=e.target,t=a.name,r=a.value;m(Object(c.a)({},n,Object(o.a)({},t,r)))},values:n,handleSubmit:function(e){e.preventDefault(),p(a(n)),v(!0)},errors:d}};function u(e){var a={};return e.username.trim()||(a.username="Username required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(a.email="Email address is invalid"):a.email="Email required",e.password?e.password.length<6&&(a.password="Password needs to be 6 characters or more"):a.password="Password is required",e.confirmPassword?e.confirmPassword!==e.password&&(a.confirmPassword="Passwords do not match"):a.confirmPassword="Password is required",a}t(3);function d(e){var a=e.submitForm,t=i(a,u),r=t.handleChange,n=t.values,m=t.handleSubmit,l=t.errors;return s.a.createElement("div",{className:"form-content-right"},s.a.createElement("form",{className:"form",onSubmit:m},s.a.createElement("h1",null,"Get Started with us today ! Create your account by filling information below"),s.a.createElement("div",{className:"form-inputs"},s.a.createElement("label",{htmlFor:"username",className:"form-label"},"Username"),s.a.createElement("input",{id:"username",type:"text",name:"username",className:"form-input",placeholder:"enter your username",value:n.username,onChange:r}),l.username&&s.a.createElement("p",null,l.username)),s.a.createElement("div",{className:"form-inputs"},s.a.createElement("label",{htmlFor:"email",className:"form-label"},"Email"),s.a.createElement("input",{id:"email",type:"email",name:"email",className:"form-input",placeholder:"enter your email",value:n.email,onChange:r}),l.email&&s.a.createElement("p",null," ",l.email," ")),s.a.createElement("div",{className:"form-inputs"},s.a.createElement("label",{htmlFor:"password",className:"form-label"},"Password"),s.a.createElement("input",{id:"password",type:"password",name:"password",className:"form-input",placeholder:"enter your password",value:n.password,onChange:r}),l.password&&s.a.createElement("p",null," ",l.password)),s.a.createElement("div",{className:"form-inputs"},s.a.createElement("label",{htmlFor:"password",className:"form-label"},"Confirm Password"),s.a.createElement("input",{id:"password",type:"password",name:"confirmPassword",className:"form-input",placeholder:"enter your Confirm password",value:n.confirmPassword,onChange:r}),l.confirmPassword&&s.a.createElement("p",null,l.confirmPassword)),s.a.createElement("button",{className:"form-input-btn",type:"submit"},"Sign Up"),s.a.createElement("span",{className:"form-input-login"},"Already have account ? ",s.a.createElement("a",{href:"#"},"here"))))}var p=function(){return s.a.createElement("div",{className:"form-content-right"},s.a.createElement("h1",{className:"form-success"},"We have received your request!"),s.a.createElement("img",{className:"form-img-2",src:"https://firebasestorage.googleapis.com/v0/b/isstracker-190613.appspot.com/o/validationImages%2Fimg-1.svg?alt=media&token=588120e4-ea40-4efd-8d20-da7dc9f79676",alt:"success-image"}))};function f(){var e=Object(r.useState)(!1),a=Object(l.a)(e,2),t=a[0],n=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"form-container"},s.a.createElement("span",{className:"close-btn"},"X"),s.a.createElement("div",{className:"form-content-left"},s.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/isstracker-190613.appspot.com/o/validationImages%2Fimg-2.svg?alt=media&token=c643c251-8f68-4c19-b903-337658a1bd4c",alt:"Rocket",className:"form-img"})),t?s.a.createElement(p,null):s.a.createElement(d,{submitForm:function(){n(!0)}})))}var E=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(f,null))};m.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(E,null)),document.getElementById("root"))},3:function(e,a,t){},7:function(e,a,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.90f1e441.chunk.js.map