import{b as B,c as p,d as D,e as S,f as L,g as P,j as k,n as _,p as J}from"./chunk-MJKELEKQ.js";import{c as b,d as x}from"./chunk-XILBEW5L.js";import{d as y,f as A,o as w,p as E}from"./chunk-UDRM3OUS.js";import{$a as m,Aa as l,La as d,Na as U,Ta as i,Ua as s,Va as g,X as h,Za as v,_a as F,bb as u,eb as C,za as f}from"./chunk-3UUFCO54.js";import"./chunk-4CLCTAJ7.js";function M(r,n){if(r&1&&(i(0,"div",17),m(1),s()),r&2){let c=F();f(),u(" ",c.getErrorMessage("email")," ")}}function I(r,n){if(r&1&&(i(0,"div",17),m(1),s()),r&2){let c=F();f(),u(" ",c.getErrorMessage("password")," ")}}var Q=(()=>{let n=class n{constructor(o,e,t,a){this.service=o,this.fb=e,this.router=t,this.notification=a,this.formLoader=!1,this.myForm=this.fb.group({email:["admin@example.com",[p.required,p.email]],password:["12345678",[p.required,p.min(6)]]})}ngOnInit(){this.service.auth&&this.router.navigate(["/admin/dashboard"])}formSubmit(){if(this.formLoader=!0,this.myForm.valid){let{email:o,password:e}=this.myForm.value;this.service.login(o,e).subscribe({next:t=>{this.formLoader=!1,this.notification.success(t.message),this.myForm.reset(),localStorage.setItem("token",t.data.token),this.service.setAuth(),this.router.navigate(["/admin/dashboard"])},error:t=>{let a=t.error;a?a.errors?this.notification.error(Object.values(a.errors)[0]):this.notification.error(a.message):this.notification.error("Something Went Wrong"),this.formLoader=!1}})}else this.formLoader=!1,this.notification.error("Validation Failed")}getErrorMessage(o){let e=this.myForm.get(o);if(e?.hasError("required"))return`${o.charAt(0).toUpperCase()+o.slice(1)} is required.`;if(e?.hasError("minlength")){let t=e.getError("minlength").requiredLength;return`${o.charAt(0).toUpperCase()+o.slice(1)} must be at least ${t} characters long.`}return e?.hasError("email")?"Please enter a valid email address.":e?.hasError("invalid")?`${o.charAt(0).toUpperCase()+o.slice(1)} is Invalid.`:null}};n.\u0275fac=function(e){return new(e||n)(l(b),l(_),l(w),l(x))},n.\u0275cmp=h({type:n,selectors:[["app-admin-login"]],standalone:!0,features:[C],decls:25,vars:4,consts:[["id","wrapper"],[1,"login-register",2,"background-image","url(../assets/images/background/login-register.jpg)"],[1,"login-box","card"],[1,"card-body"],[1,"form-horizontal","form-material",3,"ngSubmit","formGroup"],[1,"text-center","m-b-20"],[1,"form-group"],[1,"col-xs-12"],["formControlName","email","placeholder","Email",1,"form-control"],["class","text-danger",4,"ngIf"],["formControlName","password","type","password","placeholder","Password",1,"form-control"],[1,"form-group","text-center"],[1,"col-xs-12","p-b-20"],["type","submit",1,"btn","w-100","btn-lg","btn-info","btn-rounded","text-white",3,"disabled"],[1,"form-group","m-b-0"],[1,"col-sm-12","text-center"],["routerLink","/register",1,"text-info","m-l-5"],[1,"text-danger"]],template:function(e,t){e&1&&(i(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",4),v("ngSubmit",function(){return t.formSubmit()}),i(5,"h3",5),m(6,"Sign In"),s(),i(7,"div",6)(8,"div",7),g(9,"input",8),d(10,M,2,1,"div",9),s()(),i(11,"div",6)(12,"div",7),g(13,"input",10),d(14,I,2,1,"div",9),s()(),i(15,"div",11)(16,"div",12)(17,"button",13),m(18,"Log In"),s()()(),i(19,"div",14)(20,"div",15),m(21," Don't have an account? "),i(22,"a",16)(23,"b"),m(24,"Sign Up"),s()()()()()()()()()),e&2&&(f(4),U("formGroup",t.myForm),f(6),U("ngIf",t.myForm.controls.email.invalid&&(t.myForm.controls.email.dirty||t.myForm.controls.email.touched)),f(4),U("ngIf",t.myForm.controls.password.invalid&&(t.myForm.controls.password.dirty||t.myForm.controls.password.touched)),f(3),U("disabled",t.formLoader))},dependencies:[E,J,L,B,D,S,P,k,A,y],styles:['@font-face{font-family:Poppins;font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLDz8Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJfecg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLCz7Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.login-register[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat;background-position:center center;height:100%;width:100%;padding:5% 0}.login-box[_ngcontent-%COMP%]{width:400px;margin:0 auto}.login-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{width:100%;left:0;right:0}.login-box[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{display:block;margin-bottom:30px}#recoverform[_ngcontent-%COMP%]{display:none}.login-sidebar[_ngcontent-%COMP%]{padding:0;margin-top:0}.login-sidebar[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]{right:0;position:absolute;height:100%}']});let r=n;return r})();export{Q as LoginComponent};