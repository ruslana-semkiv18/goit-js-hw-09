import"./assets/modulepreload-polyfill-3cfb730f.js";const e={email:"",message:""},a=document.querySelector(".feedback-form"),o=a.querySelector("input"),r=a.querySelector("textarea"),s="feedback-form-state";a.addEventListener("input",n);a.addEventListener("submit",m);const l=localStorage.getItem(s);if(l){const t=JSON.parse(l);e.email=t.email||"",e.message=t.message||"",o.value=e.email,r.value=e.message}function n(t){e[t.target.name]=t.target.value.trim(),localStorage.setItem(s,JSON.stringify(e)),console.log(e)}function m(t){if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(s),e.email="",e.message="",a.reset()}
//# sourceMappingURL=commonHelpers2.js.map
