import{a as B}from"./chunk-C6P77QXR.js";import{a as R}from"./chunk-Z5IQARTU.js";import{a as A}from"./chunk-WLIO6G5M.js";import{d as F}from"./chunk-UI6BEQHS.js";import{b as I,d as V,e as j,g as G,h as M,i as k,j as O,k as D,o as P,p as $,q}from"./chunk-OWL564RZ.js";import{f as T}from"./chunk-G2EJMNH5.js";import{$a as d,Aa as m,Ba as c,Ma as S,Oa as x,Qa as C,Ra as y,Sa as w,Ta as N,Ua as n,Va as t,Wa as p,X as h,Za as g,_a as v,ab as r,cb as u,ea as f,fa as b,fb as E}from"./chunk-2SQSF67M.js";import{d as _}from"./chunk-4CLCTAJ7.js";function W(a,s){a&1&&(n(0,"p",9),r(1,"Loading"),t())}function U(a,s){if(a&1){let l=g();n(0,"div",25)(1,"div",19)(2,"div",20)(3,"label",21),r(4),t(),p(5,"input",29),t()(),n(6,"div",19)(7,"div",20)(8,"label",21),r(9),t(),p(10,"input",30),t()(),n(11,"div",19)(12,"div",20)(13,"label",21),r(14),t(),p(15,"input",31),t()(),n(16,"button",32),v("click",function(){let e=f(l).$index,o=d(2);return b(o.remove(e))}),r(17,"X"),t()()}if(a&2){let l=s.$index,i=d(2);x("formGroupName",l),m(4),u("Title (",i.lang.lang,")"),m(5),u("Description (",i.lang.lang,")"),m(5),u("Image (",i.lang.lang,")")}}function X(a,s){if(a&1){let l=g();n(0,"form",11),v("ngSubmit",function(){f(l);let e=d();return b(e.onSubmit())}),n(1,"div")(2,"div",12)(3,"div",13)(4,"div",14)(5,"div",15)(6,"h4",16),r(7,"Nuestro equipo "),t()(),n(8,"div",17)(9,"div",18)(10,"div",19)(11,"div",20)(12,"label",21),r(13),t(),p(14,"input",22),t()()()()()(),n(15,"div",14)(16,"div",15)(17,"h4",16),r(18,"Nuestro equipo"),t(),n(19,"button",23),v("click",function(){f(l);let e=d();return b(e.addPost())}),r(20,"Add New"),t()(),n(21,"div",24),w(22,U,18,4,"div",25,y),t()()(),n(24,"div",26)(25,"div",27)(26,"button",28),r(27,"Update"),t()()()()()}if(a&2){let l=d();x("formGroup",l.form),m(13),u("Section Title (",l.lang.lang,")"),m(9),N(l.posts().controls)}}var ie=(()=>{let s=class s{constructor(i,e,o,J,L){this.fb=i,this.notification=e,this.myFormService=o,this.service=J,this.lang=L,this.loading=!0,this.form=this.fb.group({section_title:[""],section_description:[""],section_subheading:[""],posts:this.fb.array([])})}ngOnInit(){this.getRecod()}getRecod(){this.service.loading=!0,this.service.find("about_team").subscribe({next:i=>{let e=i.data.about_team?JSON.parse(i.data.about_team):[];this.posts().clear(),e.posts&&e.posts.forEach(o=>{this.posts().push(this.fb.group({title:[o.title,""],description:[o.description,""],image:[o.image,""]}))}),this.form.patchValue({section_title:e.section_title}),this.service.loading=!1},error:i=>{this.service.loading=!1}})}posts(){return this.form.get("posts")}addPost(){this.posts().push(this.fb.group({title:["",""],description:["",""],image:["",""]}))}onSubmit(){return _(this,null,function*(){if(this.form.valid){this.service.loading=!0;let i={name:"about_team",data:JSON.stringify(this.form.value)};this.service.update(i).subscribe({next:e=>{this.service.loading=!1,this.notification.success(e.message)},error:e=>{let o=e.error;o?o.errors?this.notification.error(Object.values(o.errors)[0]):this.notification.error(o.message):this.notification.error("Something Went Wrong"),this.service.loading=!1}})}else this.notification.error("Validation Failed")})}remove(i){this.posts().removeAt(i)}};s.\u0275fac=function(e){return new(e||s)(c(P),c(F),c(R),c(B),c(A))},s.\u0275cmp=h({type:s,selectors:[["app-about-team"]],standalone:!0,features:[E],decls:14,vars:1,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"text-center"],[3,"formGroup"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info","d-flex","justify-content-between","align-items-center"],[1,"mb-0","text-white"],[1,"card-body"],[1,"row","mb-4","px-3","py-3","border"],[1,"col-md-12"],[1,"form-group"],[1,"form-label"],["formControlName","section_title",1,"form-control"],["type","button",1,"btn","btn-success","text-white",3,"click"],["formArrayName","posts",1,"card-body"],[1,"row","mb-4","px-3","py-3","border","box-seprator",3,"formGroupName"],[1,"row","pb-3"],[1,"col-12","text-center"],["type","submit",1,"btn","btn-info","text-white"],["formControlName","title",1,"form-control"],["formControlName","description",1,"form-control"],["formControlName","image",1,"form-control"],["type","button",1,"delete_btn","btn","btn-danger",3,"click"]],template:function(e,o){e&1&&(n(0,"div",0)(1,"div",1)(2,"h4",2),r(3,"Nuestro equipo"),t()(),n(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),r(9,"Admin"),t()(),n(10,"li",8),r(11,"About"),t()()()()(),S(12,W,2,0,"p",9)(13,X,28,2,"form",10)),e&2&&(m(12),C(o.service.loading?12:13))},dependencies:[T,q,G,I,V,j,M,D,k,O,$],styles:[`.box-seprator[_ngcontent-%COMP%]{
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
        position: relative;
        padding-top: 20px;
        margin: 25px 0px;
    }

    .delete_btn[_ngcontent-%COMP%]{
        position: absolute;
        right: 1px;
        width: 36px;
        top: 2px;
    }`]});let a=s;return a})();export{ie as AboutTeamComponent};