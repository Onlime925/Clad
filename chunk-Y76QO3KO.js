import{o as c}from"./chunk-EG6VKY43.js";import{P as i,U as s}from"./chunk-7AR2EFHR.js";var f=(()=>{let e=class e{constructor(t){this.router=t}getErrorMessage(t){let r=this.form.get(t);return r?.hasError("required")?"Field is required.":r?.hasError("minlength")?`must be at least ${r.getError("minlength").requiredLength} characters long.`:r?.hasError("maxlength")?`Cannot exceed ${r.getError("maxlength").requiredLength} characters.`:r?.hasError("email")?"Please enter a valid email address.":null}setForm(t){this.form=t}form_patch(t){let r=Object.keys(this.form.controls),n={};for(let l of r){let a=String(l);n[a]=t?.[a]?.value}return n}};e.\u0275fac=function(r){return new(r||e)(s(c))},e.\u0275prov=i({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();export{f as a};