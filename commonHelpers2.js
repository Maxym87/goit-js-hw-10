import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as r}from"./assets/vendor-77e16229.js";const i="/goit-js-hw-10/assets/success-75135b54.svg",n=document.querySelector(".form");document.querySelector("input");const c=document.querySelector('input[name="delay"]'),l=document.querySelectorAll('input[name="state"]');document.querySelector("button");function u(t,o){return new Promise((s,e)=>{setTimeout(()=>{o==="fulfilled"?s(t):e(t)},t)})}n.addEventListener("submit",t=>{t.preventDefault();const o=parseInt(c.value),s=[...l].find(e=>e.checked).value;u(o,s).then(e=>{r.success({title:"Ok",titleColor:"#FFFFFF",messageColor:"#FFF",iconUrl:i,position:"topRight",backgroundColor:"#59A10D",timeout:3e3,progressBar:!1,close:!1,message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{r.error({title:"Error",iconUrl:cross,position:"topRight",timeout:3e3,progressBar:!1,close:!1,titleColor:"#FFF",messageColor:"#FFF",backgroundColor:"#FF544B",message:`❌ Rejected promise in ${e}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map
