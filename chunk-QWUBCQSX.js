import{a as B}from"./chunk-UWPZQJI4.js";import"./chunk-MFQUOE3A.js";import{a as z}from"./chunk-QYELQVPG.js";import{a as K}from"./chunk-R5JCXIYA.js";import{b as P,c,d as M,e as w,g as j,h as V,k as q,l as D,m as k,n as A,o as G,p as H,q as O}from"./chunk-HAHMTXEV.js";import{a as W}from"./chunk-UV5U5MND.js";import{a as T}from"./chunk-NHL74IMT.js";import{d as N}from"./chunk-ZYBNDVFS.js";import{d as F,f as L}from"./chunk-SKYEZCWB.js";import{$a as p,Aa as r,Ba as v,Ma as f,Oa as d,Qa as E,Ua as i,Va as t,Wa as g,X as S,Za as y,_a as _,db as n,ea as C,fa as b,fb as s,jb as I}from"./chunk-TL672DAF.js";import{d as h}from"./chunk-4CLCTAJ7.js";function U(o,a){o&1&&(i(0,"p",16),n(1,"Loader"),t())}function Y(o,a){if(o&1&&(i(0,"div",34),n(1),t()),o&2){let e=p(2);r(),s(" ",e.myFormService.getErrorMessage("title")," ")}}function J(o,a){if(o&1&&(i(0,"div",34),n(1),t()),o&2){let e=p(2);r(),s(" ",e.myFormService.getErrorMessage("status")," ")}}function Q(o,a){if(o&1&&(i(0,"div",34),n(1),t()),o&2){let e=p(2);r(),s(" ",e.myFormService.getErrorMessage("featured")," ")}}function X(o,a){if(o&1&&(i(0,"div",34),n(1),t()),o&2){let e=p(2);r(),s(" ",e.myFormService.getErrorMessage("thumbnail")," ")}}function Z(o,a){if(o&1&&(i(0,"div",34),n(1),t()),o&2){let e=p(2);r(),s(" ",e.myFormService.getErrorMessage("short_description")," ")}}function $(o,a){if(o&1&&(i(0,"div",34),n(1),t()),o&2){let e=p(2);r(),s(" ",e.myFormService.getErrorMessage("long_description")," ")}}function ee(o,a){if(o&1){let e=y();i(0,"div",17)(1,"div",18)(2,"div",19)(3,"label",20),n(4),t(),g(5,"input",21),f(6,Y,2,1,"div",22),t()(),i(7,"div",18)(8,"div",19)(9,"label",20),n(10,"Status"),t(),i(11,"select",23)(12,"option",24),n(13,"Select Status"),t(),i(14,"option",25),n(15,"Enable"),t(),i(16,"option",26),n(17,"Disable"),t()(),f(18,J,2,1,"div",22),t()(),i(19,"div",18)(20,"div",19)(21,"label",20),n(22,"Is Featured"),t(),i(23,"select",27)(24,"option",24),n(25,"Select Featured"),t(),i(26,"option",25),n(27,"Yes"),t(),i(28,"option",26),n(29,"No"),t()(),f(30,Q,2,1,"div",22),t()(),i(31,"div",18)(32,"div",19)(33,"label",20),n(34),t(),i(35,"app-img-uploader",28),_("imgHanle",function(m){let l;C(e);let x=p();return b((l=x.form.get("thumbnail"))==null?null:l.patchValue(m))}),t(),f(36,X,2,1,"div",22),t()(),i(37,"div",29)(38,"div",19)(39,"label",20),n(40),t(),g(41,"input",30),f(42,Z,2,1,"div",22),t()(),i(43,"div",29)(44,"div",19)(45,"label",20),n(46),t(),g(47,"editor",31),f(48,$,2,1,"div",22),t()(),i(49,"div",32)(50,"button",33),n(51,"Submit"),t()()()}if(o&2){let e=p();r(4),s("Title (",e.lang.lang,")"),r(2),d("ngIf",e.form.controls.title.invalid&&(e.form.controls.title.dirty||e.form.controls.title.touched)),r(12),d("ngIf",e.form.controls.status.invalid&&(e.form.controls.status.dirty||e.form.controls.status.touched)),r(12),d("ngIf",e.form.controls.featured.invalid&&(e.form.controls.featured.dirty||e.form.controls.featured.touched)),r(4),s("Thumbnail (",e.lang.lang,")"),r(),d("image",""),r(),d("ngIf",e.form.controls.thumbnail.invalid&&(e.form.controls.thumbnail.dirty||e.form.controls.thumbnail.touched)),r(4),s("Short Description (",e.lang.lang,")"),r(2),d("ngIf",e.form.controls.short_description.invalid&&(e.form.controls.short_description.dirty||e.form.controls.short_description.touched)),r(4),s("Long Description (",e.lang.lang,")"),r(),d("init",e.init),r(),d("ngIf",e.form.controls.long_description.invalid&&(e.form.controls.long_description.dirty||e.form.controls.long_description.touched)),r(2),d("disabled",e.formLoader)}}var pe=(()=>{let a=class a{constructor(u,m,l,x,R){this.fb=u,this.notification=m,this.myFormService=l,this.service=x,this.lang=R,this.formLoader=!0,this.init={menubar:!0,plugins:"lists link image table code help wordcount"},this.form=this.fb.group({title:["",[c.required,c.maxLength(100)]],short_description:["",[c.required,c.maxLength(200)]],thumbnail:["",c.required],featured:["",c.required],status:["",c.required],long_description:["",[c.required,c.maxLength(100)]]}),this.myFormService.setForm(this.form)}ngOnInit(){this.formLoader=!1}onSubmit(){return h(this,null,function*(){if(this.form.valid){let u=this.form.value;u.type="post",this.formLoader=!0,this.service.create(u).subscribe({next:m=>{this.formLoader=!1,this.notification.success(m.message),this.form.reset(),this.formLoader=!1},error:m=>{let l=m.error;l?l.errors?this.notification.error(Object.values(l.errors)[0]):this.notification.error(l.message):this.notification.error("Something Went Wrong"),this.formLoader=!1}})}else this.form.markAllAsTouched(),this.formLoader=!1,this.notification.error("Validation Failed")})}};a.\u0275fac=function(m){return new(m||a)(v(G),v(N),v(K),v(W),v(T))},a.\u0275cmp=S({type:a,selectors:[["app-slider-create"]],standalone:!0,features:[I],decls:22,vars:2,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[3,"ngSubmit","formGroup"],[1,"text-center"],[1,"row","pt-3"],[1,"col-md-6"],[1,"form-group"],[1,"form-label"],["formControlName","title","placeholder","Title",1,"form-control"],["class","text-danger",4,"ngIf"],["formControlName","status",1,"form-control"],["value",""],["value","1"],["value","0"],["formControlName","featured",1,"form-control"],[3,"imgHanle","image"],[1,"col-md-12"],["formControlName","short_description","placeholder","Short Description",1,"form-control"],["formControlName","long_description","apiKey","k0xxzqob8133dq0xmi8vlaaxcmhpjisrkp7pmwtbdxwunkk9",3,"init"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white",3,"disabled"],[1,"text-danger"]],template:function(m,l){m&1&&(i(0,"div",0)(1,"div",1)(2,"h4",2),n(3,"Create Post"),t()(),i(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),n(9,"Home"),t()(),i(10,"li",8),n(11,"Posts"),t()()()()(),i(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h4",13),n(17,"Create Post Form"),t()(),i(18,"div",14)(19,"form",15),_("ngSubmit",function(){return l.onSubmit()}),f(20,U,2,0,"p",16)(21,ee,52,13,"div",17),t()()()()()),m&2&&(r(19),d("formGroup",l.form),r(),E(l.formLoader?20:21))},dependencies:[L,F,O,j,k,A,P,D,M,w,V,q,z,H,B],encapsulation:2});let o=a;return o})();export{pe as PostCreateComponent};
