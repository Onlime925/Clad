import{a as u}from"./chunk-MGYJBGF2.js";import{a as c,b as l,c as m}from"./chunk-XILBEW5L.js";import{h as r,i as p,o as h}from"./chunk-UDRM3OUS.js";import{P as s,U as n}from"./chunk-3UUFCO54.js";var k=(()=>{let e=class e{constructor(t,i,a,d,g){this.http=t,this.router=i,this.appService=a,this.adminService=d,this.language=g,this.apiUrl=c.apiUrl,this.data=[]}list(){let t=`${this.apiUrl}/admin/posts?lang=${this.language.lang}`;return this.http.get(t,{headers:new r({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}create(t){let i=`${this.apiUrl}/admin/posts?lang=${this.language.lang}`,a=t;return this.http.post(i,a,{headers:new r({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}edit(t){let i=`${this.apiUrl}/admin/posts/${t}?lang=${this.language.lang}`;return this.http.get(i,{headers:new r({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}update(t){let i=`${this.apiUrl}/admin/posts/${t.id}?lang=${this.language.lang}`,a=t;return this.http.put(i,a,{headers:new r({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}delete(t){let i=`${this.apiUrl}/admin/posts/${t}`;return this.http.delete(i,{headers:new r({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}};e.\u0275fac=function(i){return new(i||e)(n(p),n(h),n(l),n(m),n(u))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();export{k as a};
