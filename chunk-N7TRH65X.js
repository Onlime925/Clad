import{a as A}from"./chunk-EBXOX4Q2.js";import{a as G,b as V}from"./chunk-RRRUJOTJ.js";import{a as F}from"./chunk-WLIO6G5M.js";import{d as I}from"./chunk-UI6BEQHS.js";import{b as L,c as s,d as k,e as T,g as N,h as j,k as M,o as w,p as q,q as D}from"./chunk-OWL564RZ.js";import{d as y,f as E}from"./chunk-G2EJMNH5.js";import{$a as u,Aa as r,Ba as p,Ma as v,Oa as c,Qa as b,Ua as o,Va as i,Wa as h,X as S,_a as _,ab as n,cb as d,fb as C}from"./chunk-2SQSF67M.js";import{d as g}from"./chunk-4CLCTAJ7.js";function W(t,a){t&1&&(o(0,"p",16),n(1,"Loader"),i())}function z(t,a){if(t&1&&(o(0,"div",29),n(1),i()),t&2){let e=u(2);r(),d(" ",e.myFormService.getErrorMessage("title")," ")}}function B(t,a){if(t&1&&(o(0,"div",29),n(1),i()),t&2){let e=u(2);r(),d(" ",e.myFormService.getErrorMessage("link")," ")}}function H(t,a){if(t&1&&(o(0,"div",29),n(1),i()),t&2){let e=u(2);r(),d(" ",e.myFormService.getErrorMessage("thumbnail")," ")}}function K(t,a){if(t&1&&(o(0,"div",29),n(1),i()),t&2){let e=u(2);r(),d(" ",e.myFormService.getErrorMessage("short_description")," ")}}function R(t,a){if(t&1&&(o(0,"div",17)(1,"div",18)(2,"div",19)(3,"label",20),n(4),i(),h(5,"input",21),v(6,z,2,1,"div",22),i()(),o(7,"div",18)(8,"div",19)(9,"label",20),n(10),i(),h(11,"input",23),v(12,B,2,1,"div",22),i()(),o(13,"div",18)(14,"div",19)(15,"label",20),n(16),i(),h(17,"input",24),v(18,H,2,1,"div",22),i()(),o(19,"div",25)(20,"div",19)(21,"label",20),n(22),i(),h(23,"editor",26),v(24,K,2,1,"div",22),i()(),o(25,"div",27)(26,"button",28),n(27,"Create"),i()()()),t&2){let e=u();r(4),d("Title (",e.lang.lang,")"),r(2),c("ngIf",e.form.controls.title.invalid&&(e.form.controls.title.dirty||e.form.controls.title.touched)),r(4),d("Link (",e.lang.lang,")"),r(2),c("ngIf",e.form.controls.link.invalid&&(e.form.controls.link.dirty||e.form.controls.link.touched)),r(4),d("Thumbnail (",e.lang.lang,")"),r(2),c("ngIf",e.form.controls.thumbnail.invalid&&(e.form.controls.thumbnail.dirty||e.form.controls.thumbnail.touched)),r(4),d("Short Description (",e.lang.lang,")"),r(),c("init",e.init),r(),c("ngIf",e.form.controls.short_description.invalid&&(e.form.controls.short_description.dirty||e.form.controls.short_description.touched)),r(2),c("disabled",e.formLoader)}}var ie=(()=>{let a=class a{constructor(f,l,m,x,O){this.fb=f,this.notification=l,this.myFormService=m,this.service=x,this.lang=O,this.formLoader=!0,this.init={menubar:!0,plugins:"lists link image table code help wordcount"},this.form=this.fb.group({title:["",[s.required,s.maxLength(50)]],link:["",[s.required,s.maxLength(50)]],thumbnail:["",s.required],short_description:["",[s.required,s.maxLength(100)]]}),this.myFormService.setForm(this.form)}ngOnInit(){this.formLoader=!1}onSubmit(){return g(this,null,function*(){if(this.form.valid){let f=this.form.value;f.status=1,this.formLoader=!0,this.service.create(f).subscribe({next:l=>{this.formLoader=!1,this.notification.success(l.message),this.form.reset(),this.formLoader=!1},error:l=>{let m=l.error;m?m.errors?this.notification.error(Object.values(m.errors)[0]):this.notification.error(m.message):this.notification.error("Something Went Wrong"),this.formLoader=!1}})}else this.form.markAllAsTouched(),this.formLoader=!1,this.notification.error("Validation Failed")})}};a.\u0275fac=function(l){return new(l||a)(p(w),p(I),p(V),p(A),p(F))},a.\u0275cmp=S({type:a,selectors:[["app-slider-create"]],standalone:!0,features:[C],decls:22,vars:2,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[3,"ngSubmit","formGroup"],[1,"text-center"],[1,"row","pt-3"],[1,"col-md-6"],[1,"form-group"],[1,"form-label"],["formControlName","title","placeholder","Title",1,"form-control"],["class","text-danger",4,"ngIf"],["formControlName","link","placeholder","Link",1,"form-control"],["formControlName","thumbnail","placeholder","Thumbnail",1,"form-control"],[1,"col-md-12"],["formControlName","short_description","apiKey","k0xxzqob8133dq0xmi8vlaaxcmhpjisrkp7pmwtbdxwunkk9",3,"init"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white",3,"disabled"],[1,"text-danger"]],template:function(l,m){l&1&&(o(0,"div",0)(1,"div",1)(2,"h4",2),n(3,"Create Slider"),i()(),o(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),n(9,"Home"),i()(),o(10,"li",8),n(11,"Sliders"),i()()()()(),o(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h4",13),n(17,"Create Slider Form"),i()(),o(18,"div",14)(19,"form",15),_("ngSubmit",function(){return m.onSubmit()}),v(20,W,2,0,"p",16)(21,R,28,10,"div",17),i()()()()()),l&2&&(r(19),c("formGroup",m.form),r(),b(m.formLoader?20:21))},dependencies:[E,y,D,N,L,k,T,j,M,G,q],encapsulation:2});let t=a;return t})();export{ie as SliderCreateComponent};