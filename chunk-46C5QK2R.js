import{a as H}from"./chunk-FSRS5BKV.js";import{a as z,b as B}from"./chunk-RRRUJOTJ.js";import{a as M}from"./chunk-WLIO6G5M.js";import{d as T}from"./chunk-UI6BEQHS.js";import{b as j,c as f,d as P,e as w,g as V,h as q,k as D,l as k,m as R,n as A,o as G,p as O,q as W}from"./chunk-OWL564RZ.js";import{d as I,f as F,m as L,o as N}from"./chunk-G2EJMNH5.js";import{$a as p,Aa as a,Ba as u,Ma as v,Oa as c,Qa as b,Ua as i,Va as e,Wa as h,X as g,Za as E,_a as C,ab as r,cb as s,ea as _,fa as S,fb as y}from"./chunk-2SQSF67M.js";import{d as x}from"./chunk-4CLCTAJ7.js";function U(o,d){o&1&&(i(0,"p",15),r(1,"Loader"),e())}function X(o,d){if(o&1&&(i(0,"div",35),r(1),e()),o&2){let t=p(2);a(),s(" ",t.myFormService.getErrorMessage("title")," ")}}function Z(o,d){if(o&1&&(i(0,"div",35),r(1),e()),o&2){let t=p(2);a(),s(" ",t.myFormService.getErrorMessage("status")," ")}}function $(o,d){if(o&1&&(i(0,"div",35),r(1),e()),o&2){let t=p(2);a(),s(" ",t.myFormService.getErrorMessage("featured")," ")}}function tt(o,d){if(o&1&&(i(0,"div",35),r(1),e()),o&2){let t=p(2);a(),s(" ",t.myFormService.getErrorMessage("thumbnail")," ")}}function et(o,d){if(o&1&&(i(0,"div",35),r(1),e()),o&2){let t=p(2);a(),s(" ",t.myFormService.getErrorMessage("short_description")," ")}}function it(o,d){if(o&1&&(i(0,"div",35),r(1),e()),o&2){let t=p(2);a(),s(" ",t.myFormService.getErrorMessage("long_description")," ")}}function ot(o,d){if(o&1){let t=E();i(0,"form",17),C("ngSubmit",function(){_(t);let l=p();return S(l.onSubmit())}),i(1,"div",18)(2,"div",19)(3,"div",20)(4,"label",21),r(5),e(),h(6,"input",22),v(7,X,2,1,"div",23),e()(),i(8,"div",19)(9,"div",20)(10,"label",21),r(11,"Status"),e(),i(12,"select",24)(13,"option",25),r(14,"Select Status"),e(),i(15,"option",26),r(16,"Enable"),e(),i(17,"option",27),r(18,"Disable"),e()(),v(19,Z,2,1,"div",23),e()(),i(20,"div",19)(21,"div",20)(22,"label",21),r(23,"Is Featured"),e(),i(24,"select",28)(25,"option",25),r(26,"Select Featured"),e(),i(27,"option",26),r(28,"Yes"),e(),i(29,"option",27),r(30,"No"),e()(),v(31,$,2,1,"div",23),e()(),i(32,"div",19)(33,"div",20)(34,"label",21),r(35),e(),h(36,"input",29),v(37,tt,2,1,"div",23),e()(),i(38,"div",30)(39,"div",20)(40,"label",21),r(41),e(),h(42,"input",31),v(43,et,2,1,"div",23),e()(),i(44,"div",30)(45,"div",20)(46,"label",21),r(47),e(),h(48,"editor",32),v(49,it,2,1,"div",23),e()(),i(50,"div",33)(51,"button",34),r(52,"Submit"),e()()()()}if(o&2){let t=p();c("formGroup",t.form),a(5),s("Title (",t.lang.lang,")"),a(2),c("ngIf",t.form.controls.title.invalid&&(t.form.controls.title.dirty||t.form.controls.title.touched)),a(12),c("ngIf",t.form.controls.status.invalid&&(t.form.controls.status.dirty||t.form.controls.status.touched)),a(12),c("ngIf",t.form.controls.featured.invalid&&(t.form.controls.featured.dirty||t.form.controls.featured.touched)),a(4),s("Thumbnail (",t.lang.lang,")"),a(2),c("ngIf",t.form.controls.thumbnail.invalid&&(t.form.controls.thumbnail.dirty||t.form.controls.thumbnail.touched)),a(4),s("Short Description (",t.lang.lang,")"),a(2),c("ngIf",t.form.controls.short_description.invalid&&(t.form.controls.short_description.dirty||t.form.controls.short_description.touched)),a(4),s("Long Description (",t.lang.lang,")"),a(),c("init",t.init),a(),c("ngIf",t.form.controls.long_description.invalid&&(t.form.controls.long_description.dirty||t.form.controls.long_description.touched)),a(2),c("disabled",t.formLoader)}}var vt=(()=>{let d=class d{constructor(m,l,n,K,Y,J,Q){this.fb=m,this.notification=l,this.myFormService=n,this.service=K,this.route=Y,this.router=J,this.lang=Q,this.formLoader=!1,this.editId="",this.init={menubar:!0,plugins:"lists link image table code help wordcount"},this.form=this.fb.group({title:["",[f.required,f.maxLength(50)]],short_description:["",[f.required,f.maxLength(200)]],thumbnail:["",f.required],featured:["",f.required],status:["",f.required],long_description:["",[f.required,f.maxLength(100)]]}),this.myFormService.setForm(this.form)}ngOnInit(){this.route.paramMap.subscribe(m=>{this.editId=m.get("id"),this.getRecord(this.editId)})}getRecord(m){return x(this,null,function*(){this.formLoader=!0,this.service.edit(Number(this.editId)).subscribe({next:l=>{let n=l.data;this.form.patchValue({title:n.title,short_description:n.short_description,long_description:n.long_description,thumbnail:n.thumbnail,status:n.status,featured:n.is_featured}),this.formLoader=!1},error:l=>{let n=l.error;n?n.errors?this.notification.error(Object.values(n.errors)[0]):this.notification.error(n.message):this.notification.error("Something Went Wrong"),this.formLoader=!1,this.router.navigate(["/admin/dashboard"])}})})}onSubmit(){return x(this,null,function*(){if(this.form.valid){let m=this.form.value;m.type="post",m.id=this.editId,this.formLoader=!0,this.service.update(m).subscribe({next:l=>{this.formLoader=!1,this.notification.success(l.message),this.getRecord(this.editId),this.formLoader=!1},error:l=>{let n=l.error;n?n.errors?this.notification.error(Object.values(n.errors)[0]):this.notification.error(n.message):this.notification.error("Something Went Wrong"),this.formLoader=!1}})}else this.formLoader=!1,this.form.markAllAsTouched(),this.notification.error("Validation Failed")})}};d.\u0275fac=function(l){return new(l||d)(u(G),u(T),u(B),u(H),u(L),u(N),u(M))},d.\u0275cmp=g({type:d,selectors:[["app-slider-edit"]],standalone:!0,features:[y],decls:21,vars:1,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[1,"text-center"],[3,"formGroup"],[3,"ngSubmit","formGroup"],[1,"row","pt-3"],[1,"col-md-6"],[1,"form-group"],[1,"form-label"],["formControlName","title","placeholder","Title",1,"form-control"],["class","text-danger",4,"ngIf"],["formControlName","status",1,"form-control"],["value",""],["value","1"],["value","0"],["formControlName","featured",1,"form-control"],["formControlName","thumbnail","placeholder","Thumbnail",1,"form-control"],[1,"col-md-12"],["formControlName","short_description","placeholder","Short Description",1,"form-control"],["formControlName","long_description","apiKey","k0xxzqob8133dq0xmi8vlaaxcmhpjisrkp7pmwtbdxwunkk9",3,"init"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white",3,"disabled"],[1,"text-danger"]],template:function(l,n){l&1&&(i(0,"div",0)(1,"div",1)(2,"h4",2),r(3,"Edit Post"),e()(),i(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),r(9,"Home"),e()(),i(10,"li",8),r(11,"Posts"),e()()()()(),i(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h4",13),r(17,"Edit Post Form"),e()(),i(18,"div",14),v(19,U,2,0,"p",15)(20,ot,53,13,"form",16),e()()()()),l&2&&(a(19),b(n.formLoader?19:20))},dependencies:[F,I,W,V,R,A,j,k,P,w,q,D,z,O],encapsulation:2});let o=d;return o})();export{vt as PostEditComponent};