import{a as J}from"./chunk-53M43E5X.js";import"./chunk-QYELQVPG.js";import{a as B}from"./chunk-R5JCXIYA.js";import{b as j,d as V,e as T,g as I,h as k,i as G,j as D,k as O,o as P,p as $,q as R}from"./chunk-HAHMTXEV.js";import{a as A}from"./chunk-NHL74IMT.js";import{d as F}from"./chunk-ZYBNDVFS.js";import{f as M}from"./chunk-SKYEZCWB.js";import{$a as d,Aa as l,Ba as c,Ma as C,Oa as b,Qa as S,Ra as y,Sa as w,Ta as E,Ua as o,Va as i,Wa as v,X as h,Za as x,_a as f,db as r,ea as p,fa as u,fb as _,jb as N}from"./chunk-TL672DAF.js";import{d as g}from"./chunk-4CLCTAJ7.js";function U(s,a){s&1&&(o(0,"p",9),r(1,"Loading"),i())}function X(s,a){if(s&1){let m=x();o(0,"div",24)(1,"div",18)(2,"div",19)(3,"label",20),r(4),i(),v(5,"input",28),i()(),o(6,"button",29),f("click",function(){let e=p(m).$index,n=d(2);return u(n.remove(e))}),r(7,"X"),i()()}if(s&2){let m=a.$index,t=d(2);b("formGroupName",m),l(4),_("Title (",t.lang.lang,")")}}function q(s,a){if(s&1){let m=x();o(0,"section")(1,"form",10),f("ngSubmit",function(){p(m);let e=d();return u(e.onSubmit())}),o(2,"div",11)(3,"div",12)(4,"div",13)(5,"div",14)(6,"h4",15),r(7,"Nuestro Consejo Cient\xEDfico"),i()(),o(8,"div",16)(9,"div",17)(10,"div",18)(11,"div",19)(12,"label",20),r(13),i(),v(14,"input",21),i()()()()()()(),o(15,"div",11)(16,"div",18)(17,"div",13)(18,"div",14)(19,"h4",15),r(20,"Miembros"),i(),o(21,"button",22),f("click",function(){p(m);let e=d();return u(e.addPost())}),r(22,"Add New"),i()(),o(23,"div",23),w(24,X,8,2,"div",24,y),i()()()(),o(26,"div",25)(27,"div",26)(28,"button",27),r(29,"Update"),i()()()()()}if(s&2){let m=d();l(),b("formGroup",m.form),l(12),_("Section Title (",m.lang.lang,")"),l(11),E(m.posts().controls)}}var ie=(()=>{let a=class a{constructor(t,e,n,L,W){this.fb=t,this.notification=e,this.myFormService=n,this.service=L,this.lang=W,this.loading=!0,this.form=this.fb.group({section_title:[""],posts:this.fb.array([])})}ngOnInit(){this.getRecod()}getRecod(){this.service.loading=!0,this.service.find("about_member").subscribe({next:t=>{let e=t.data.about_member?JSON.parse(t.data.about_member):[];this.posts().clear(),e.posts&&e.posts.forEach(n=>{this.posts().push(this.fb.group({title:[n.title,""]}))}),this.form.patchValue({section_title:e.section_title}),this.service.loading=!1},error:t=>{this.service.loading=!1}})}posts(){return this.form.get("posts")}addPost(){this.posts().push(this.fb.group({title:["",""]}))}onSubmit(){return g(this,null,function*(){if(this.form.valid){this.service.loading=!0;let t={name:"about_member",data:JSON.stringify(this.form.value)};this.service.update(t).subscribe({next:e=>{this.service.loading=!1,this.notification.success(e.message)},error:e=>{let n=e.error;n?n.errors?this.notification.error(Object.values(n.errors)[0]):this.notification.error(n.message):this.notification.error("Something Went Wrong"),this.service.loading=!1}})}else this.notification.error("Validation Failed")})}remove(t){this.posts().removeAt(t)}};a.\u0275fac=function(e){return new(e||a)(c(P),c(F),c(B),c(J),c(A))},a.\u0275cmp=h({type:a,selectors:[["app-about-member"]],standalone:!0,features:[N],decls:14,vars:1,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"text-center"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info","d-flex","justify-content-between","align-items-center"],[1,"mb-0","text-white"],[1,"card-body"],[1,"row","mb-4","px-3","py-3","border"],[1,"col-md-12"],[1,"form-group"],[1,"form-label"],["formControlName","section_title",1,"form-control"],["type","button",1,"btn","btn-success","text-white",3,"click"],["formArrayName","posts",1,"card-body"],[1,"row","mb-4","px-3","py-3","border","box-seprator",3,"formGroupName"],[1,"row","pb-3"],[1,"col-12","text-center"],["type","submit",1,"btn","btn-info","text-white"],["formControlName","title",1,"form-control"],["type","button",1,"delete_btn","btn","btn-danger",3,"click"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"div",1)(2,"h4",2),r(3,"Nuestro Consejo Cient\xEDfico"),i()(),o(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),r(9,"Admin"),i()(),o(10,"li",8),r(11,"About"),i()()()()(),C(12,U,2,0,"p",9)(13,q,30,2,"section")),e&2&&(l(12),S(n.service.loading?12:13))},dependencies:[M,R,I,j,V,T,k,O,G,D,$],styles:[`.box-seprator[_ngcontent-%COMP%]{
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
    }`]});let s=a;return s})();export{ie as AboutMemberComponent};