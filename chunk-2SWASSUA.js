import{a as J}from"./chunk-C6P77QXR.js";import"./chunk-SUONLQWJ.js";import{a as B}from"./chunk-Z5IQARTU.js";import{a as A}from"./chunk-WLIO6G5M.js";import{d as F}from"./chunk-UI6BEQHS.js";import{b as j,d as T,e as V,g as D,h as M,i as k,j as G,k as O,o as P,p as $,q as R}from"./chunk-OWL564RZ.js";import{f as I}from"./chunk-G2EJMNH5.js";import{$a as u,Aa as l,Ba as p,Ma as C,Oa as v,Qa as S,Ra as E,Sa as y,Ta as w,Ua as i,Va as e,Wa as c,X as h,Za as g,_a as _,ab as n,cb as d,ea as b,fa as f,fb as N}from"./chunk-2SQSF67M.js";import{d as x}from"./chunk-4CLCTAJ7.js";function H(m,s){m&1&&(i(0,"p",9),n(1,"Loading"),e())}function U(m,s){if(m&1){let r=g();i(0,"div",29)(1,"div",18)(2,"div",19)(3,"label",20),n(4),e(),c(5,"input",33),e()(),i(6,"div",18)(7,"div",19)(8,"label",20),n(9),e(),c(10,"textarea",34),e()(),i(11,"div",18)(12,"div",19)(13,"label",20),n(14),e(),c(15,"textarea",35),e()(),i(16,"button",36),_("click",function(){let t=b(r).$index,a=u(2);return f(a.remove(t))}),n(17,"X"),e()()}if(m&2){let r=s.$index,o=u(2);v("formGroupName",r),l(4),d("Image (",o.lang.lang,")"),l(5),d("Title (",o.lang.lang,")"),l(5),d("Description (",o.lang.lang,")")}}function X(m,s){if(m&1){let r=g();i(0,"section")(1,"form",10),_("ngSubmit",function(){b(r);let t=u();return f(t.onSubmit())}),i(2,"div",11)(3,"div",12)(4,"div",13)(5,"div",14)(6,"h4",15),n(7,"Nuestro Consejo Cient\xEDfico"),e()(),i(8,"div",16)(9,"div",17)(10,"div",18)(11,"div",19)(12,"label",20),n(13),e(),c(14,"input",21),e()(),i(15,"div",18)(16,"div",19)(17,"label",20),n(18),e(),c(19,"textarea",22),e()(),i(20,"div",18)(21,"div",19)(22,"label",20),n(23),e(),c(24,"input",23),e()()()()()(),i(25,"div",12)(26,"div",13)(27,"div",14)(28,"h4",15),n(29,"Presidente"),e()(),i(30,"div",16)(31,"div",17)(32,"div",18)(33,"div",19)(34,"label",20),n(35),e(),c(36,"input",24),e()(),i(37,"div",18)(38,"div",19)(39,"label",20),n(40),e(),c(41,"input",25),e()(),i(42,"div",18)(43,"div",19)(44,"label",20),n(45),e(),c(46,"textarea",26),e()()()()()()(),i(47,"div",11)(48,"div",18)(49,"div",13)(50,"div",14)(51,"h4",15),n(52,"Miembros"),e(),i(53,"button",27),_("click",function(){b(r);let t=u();return f(t.addPost())}),n(54,"Add New"),e()(),i(55,"div",28),y(56,U,18,4,"div",29,E),e()()()(),i(58,"div",30)(59,"div",31)(60,"button",32),n(61,"Update"),e()()()()()}if(m&2){let r=u();l(),v("formGroup",r.form),l(12),d("Section Title (",r.lang.lang,")"),l(5),d("Section Description (",r.lang.lang,")"),l(5),d("Section SubHeading (",r.lang.lang,")"),l(12),d("Section Title (",r.lang.lang,")"),l(5),d("Title (",r.lang.lang,")"),l(5),d("Description (",r.lang.lang,")"),l(11),w(r.posts().controls)}}var ie=(()=>{let s=class s{constructor(o,t,a,L,W){this.fb=o,this.notification=t,this.myFormService=a,this.service=L,this.lang=W,this.loading=!0,this.init={menubar:!0,plugins:"lists link image table code help wordcount"},this.form=this.fb.group({section_title:[""],section_description:[""],section_subheading:[""],posts:this.fb.array([]),member_section_title:[],member_country_text:[],member_country_image:[],member_title:[],member_description:[]})}ngOnInit(){this.getRecod()}getRecod(){this.service.loading=!0,this.service.find("about_council").subscribe({next:o=>{let t=o.data.about_council?JSON.parse(o.data.about_council):[];this.posts().clear(),t.posts&&t.posts.forEach(a=>{this.posts().push(this.fb.group({title:[a.title,""],description:[a.description,""],image:[a.image,""]}))}),this.form.patchValue({section_title:t.section_title,section_description:t.section_description,section_subheading:t.section_subheading,member_section_title:t.member_section_title,member_country_text:t.member_country_text,member_country_image:t.member_country_image,member_title:t.member_title,member_description:t.member_description}),this.service.loading=!1},error:o=>{this.service.loading=!1}})}posts(){return this.form.get("posts")}addPost(){this.posts().push(this.fb.group({title:["",""],description:["",""],image:["",""]}))}onSubmit(){return x(this,null,function*(){if(this.form.valid){this.service.loading=!0;let o={name:"about_council",data:JSON.stringify(this.form.value)};this.service.update(o).subscribe({next:t=>{this.service.loading=!1,this.notification.success(t.message)},error:t=>{let a=t.error;a?a.errors?this.notification.error(Object.values(a.errors)[0]):this.notification.error(a.message):this.notification.error("Something Went Wrong"),this.service.loading=!1}})}else this.notification.error("Validation Failed")})}remove(o){this.posts().removeAt(o)}};s.\u0275fac=function(t){return new(t||s)(p(P),p(F),p(B),p(J),p(A))},s.\u0275cmp=h({type:s,selectors:[["app-about-council"]],standalone:!0,features:[N],decls:14,vars:1,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"text-center"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info","d-flex","justify-content-between","align-items-center"],[1,"mb-0","text-white"],[1,"card-body"],[1,"row","mb-4","px-3","py-3","border"],[1,"col-md-12"],[1,"form-group"],[1,"form-label"],["formControlName","section_title",1,"form-control"],["rows","6","formControlName","section_description",1,"form-control"],["formControlName","section_subheading",1,"form-control"],["formControlName","member_section_title",1,"form-control"],["formControlName","member_title",1,"form-control"],["rows","5","formControlName","member_description",1,"form-control"],["type","button",1,"btn","btn-success","text-white",3,"click"],["formArrayName","posts",1,"card-body"],[1,"row","mb-4","px-3","py-3","border","box-seprator",3,"formGroupName"],[1,"row","pb-3"],[1,"col-12","text-center"],["type","submit",1,"btn","btn-info","text-white"],["formControlName","image",1,"form-control"],["rows","1","formControlName","title",1,"form-control"],["rows","6","formControlName","description",1,"form-control"],["type","button",1,"delete_btn","btn","btn-danger",3,"click"]],template:function(t,a){t&1&&(i(0,"div",0)(1,"div",1)(2,"h4",2),n(3,"Nuestro Consejo Cient\xEDfico"),e()(),i(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),n(9,"Admin"),e()(),i(10,"li",8),n(11,"About"),e()()()()(),C(12,H,2,0,"p",9)(13,X,62,7,"section")),t&2&&(l(12),S(a.service.loading?12:13))},dependencies:[I,R,D,j,T,V,M,O,k,G,$],styles:[`.box-seprator[_ngcontent-%COMP%]{
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
    }`]});let m=s;return m})();export{ie as AboutCouncilComponent};
