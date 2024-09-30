import{a as G}from"./chunk-PAR4QB2E.js";import{a as D,b as V}from"./chunk-J4ZRW73Q.js";import{b as j,c as _,d as A,e as N,f as w,g as M,j as T,n as H,o as L,p as k}from"./chunk-MJKELEKQ.js";import{a as F}from"./chunk-MGYJBGF2.js";import{d as I}from"./chunk-XILBEW5L.js";import{d as y,f as E}from"./chunk-UDRM3OUS.js";import{$a as r,Aa as s,La as p,Na as u,Pa as x,Ta as o,Ua as i,Va as v,X as g,Za as S,_a as f,bb as c,eb as C,za as n}from"./chunk-3UUFCO54.js";import{d as b}from"./chunk-4CLCTAJ7.js";function q(t,a){t&1&&(o(0,"p",16),r(1,"Loading"),i())}function O(t,a){if(t&1&&(o(0,"div",28),r(1),i()),t&2){let e=f(2);n(),c(" ",e.myFormService.getErrorMessage("home_about_title")," ")}}function W(t,a){if(t&1&&(o(0,"div",28),r(1),i()),t&2){let e=f(2);n(),c(" ",e.myFormService.getErrorMessage("home_about_image")," ")}}function z(t,a){if(t&1&&(o(0,"div",28),r(1),i()),t&2){let e=f(2);n(),c(" ",e.myFormService.getErrorMessage("home_about_description")," ")}}function B(t,a){if(t&1&&(o(0,"div",17)(1,"div",18)(2,"div",19)(3,"label",20),r(4),i(),v(5,"input",21),p(6,O,2,1,"div",22),i()(),o(7,"div",18)(8,"div",19)(9,"label",20),r(10),i(),v(11,"input",23),p(12,W,2,1,"div",22),i()(),o(13,"div",24)(14,"div",19)(15,"label",20),r(16),i(),v(17,"editor",25),p(18,z,2,1,"div",22),i()(),o(19,"div",26)(20,"button",27),r(21,"Update"),i()()()),t&2){let e=f();n(4),c("Title (",e.lang.lang,")"),n(2),u("ngIf",e.form.controls.home_about_title.invalid&&(e.form.controls.home_about_title.dirty||e.form.controls.home_about_title.touched)),n(4),c("Image (",e.lang.lang,")"),n(2),u("ngIf",e.form.controls.home_about_image.invalid&&(e.form.controls.home_about_image.dirty||e.form.controls.home_about_image.touched)),n(4),c("Short Description (",e.lang.lang,")"),n(),u("init",e.init),n(),u("ngIf",e.form.controls.home_about_description.invalid&&(e.form.controls.home_about_description.dirty||e.form.controls.home_about_description.touched))}}var te=(()=>{let a=class a{constructor(d,m,l,h,U){this.fb=d,this.notification=m,this.myFormService=l,this.service=h,this.lang=U,this.formLoader=!0,this.init={menubar:!0,plugins:"lists link image table code help wordcount"},this.form=this.fb.group({home_about_title:["",[_.maxLength(30)]],home_about_image:["",_.maxLength(100)],home_about_description:["",_.maxLength(1e4)]}),this.myFormService.setForm(this.form),this.service.loadSetting()}ngOnInit(){this.service.data.subscribe(d=>{this.form.patchValue({home_about_title:d?.home_about_title?.value,home_about_image:d?.home_about_image?.value,home_about_description:d?.home_about_description?.value})})}onSubmit(){return b(this,null,function*(){if(this.form.valid){this.service.loading=!0;let d=this.form.value;this.service.update(d).subscribe({next:m=>{this.notification.success(m.message),this.service.loadSetting(),this.service.loading=!1},error:m=>{let l=m.error;l?l.errors?this.notification.error(Object.values(l.errors)[0]):this.notification.error(l.message):this.notification.error("Something Went Wrong"),this.service.loading=!1}})}else this.notification.error("Validation Failed")})}};a.\u0275fac=function(m){return new(m||a)(s(H),s(I),s(V),s(G),s(F))},a.\u0275cmp=g({type:a,selectors:[["app-admin-home-about"]],standalone:!0,features:[C],decls:22,vars:2,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[3,"ngSubmit","formGroup"],[1,"text-center"],[1,"row","pt-3"],[1,"col-md-6"],[1,"form-group"],[1,"form-label"],["formControlName","home_about_title","placeholder","Title",1,"form-control"],["class","text-danger",4,"ngIf"],["formControlName","home_about_image","placeholder","Image",1,"form-control"],[1,"col-md-12"],["formControlName","home_about_description","apiKey","k0xxzqob8133dq0xmi8vlaaxcmhpjisrkp7pmwtbdxwunkk9",3,"init"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white"],[1,"text-danger"]],template:function(m,l){m&1&&(o(0,"div",0)(1,"div",1)(2,"h4",2),r(3,"About Us"),i()(),o(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),r(9,"Admin"),i()(),o(10,"li",8),r(11,"Home"),i()()()()(),o(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h4",13),r(17,"About Us Form"),i()(),o(18,"div",14)(19,"form",15),S("ngSubmit",function(){return l.onSubmit()}),p(20,q,2,0,"p",16)(21,B,22,7,"div",17),i()()()()()),m&2&&(n(19),u("formGroup",l.form),n(),x(l.service.loading?20:21))},dependencies:[E,y,k,w,j,A,N,M,T,D,L],encapsulation:2});let t=a;return t})();export{te as HomeAboutComponent};
