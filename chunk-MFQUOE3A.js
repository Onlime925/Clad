import{a as d}from"./chunk-NHL74IMT.js";import{a as h,b as m,c as l}from"./chunk-ZYBNDVFS.js";import{h as a,i as p,o as c}from"./chunk-SKYEZCWB.js";import{P as s,U as r}from"./chunk-TL672DAF.js";var k=(()=>{let e=class e{constructor(t,i,n,u,f){this.http=t,this.router=i,this.appService=n,this.adminService=u,this.language=f,this.apiUrl=h.apiUrl,this.data=[]}list(t){let i=`${this.apiUrl}/admin/filemanagers?search=${t.search}`;return this.http.get(i,{headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}create(t){let i=`${this.apiUrl}/admin/filemanagers`,n=t;return this.http.post(i,n,{headers:new a({Authorization:`Bearer ${this.adminService.token}`})})}update(t){let i=`${this.apiUrl}/admin/filemanagers/${t.id}?lang=${this.language.lang}`,n=t;return this.http.put(i,n,{headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}delete(t){let i=`${this.apiUrl}/admin/filemanagers/${t}`;return this.http.delete(i,{headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}};e.\u0275fac=function(i){return new(i||e)(r(p),r(c),r(m),r(l),r(d))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();export{k as a};
