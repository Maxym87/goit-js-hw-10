import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as o}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form");document.querySelector("input");const c=document.querySelector('input[name="delay"]'),u=document.querySelectorAll('input[name="state"]');document.querySelector("button");function i(t,n){return new Promise((r,e)=>{setTimeout(()=>{n==="fulfilled"?r(t):e(t)},t)})}s.addEventListener("submit",t=>{t.preventDefault();const n=parseInt(c.value),r=[...u].find(e=>e.checked).value;i(n,r).then(e=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{o.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map
