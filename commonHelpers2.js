import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},a=document.querySelector(".feedback-form"),r=a.querySelector("input"),o=a.querySelector("textarea"),s="feedback-form-state";a.addEventListener("input",m);a.addEventListener("submit",n);const l=localStorage.getItem(s);if(l){const t=JSON.parse(l);e.email=t.email||"",e.message=t.message||"",r.value=e.email,o.value=e.message}function m(t){e[t.target.name]=t.target.value.trim(),localStorage.setItem(s,JSON.stringify(e)),console.log(e)}function n(t){if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(s),e.email="",e.message="",a.reset()}
//# sourceMappingURL=commonHelpers2.js.map
