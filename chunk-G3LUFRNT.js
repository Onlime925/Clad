import{a as j}from"./chunk-53M43E5X.js";import"./chunk-QYELQVPG.js";import{a as _}from"./chunk-R5JCXIYA.js";import{o as w,p as C,q as F}from"./chunk-HAHMTXEV.js";import{a as I}from"./chunk-NHL74IMT.js";import{d as E}from"./chunk-ZYBNDVFS.js";import{f as y}from"./chunk-SKYEZCWB.js";import{$a as b,Aa as d,Ba as l,Ra as v,Sa as h,Ta as g,Ua as n,Va as e,Wa as c,X as f,db as r,fb as m,jb as x,kb as S}from"./chunk-TL672DAF.js";import{d as u}from"./chunk-4CLCTAJ7.js";var k=()=>[1,2];function A(s,a){if(s&1&&(n(0,"div",16)(1,"div",20)(2,"div",21)(3,"label",22),r(4),e(),c(5,"input",23),e()(),n(6,"div",20)(7,"div",21)(8,"label",22),r(9),e(),c(10,"input",24),e()(),n(11,"div",25)(12,"div",21)(13,"label",22),r(14),e(),c(15,"textarea",26),e()(),n(16,"button",27),r(17,"X"),e()()),s&2){let p=b();d(4),m("Title (",p.lang.lang,")"),d(5),m("Image (",p.lang.lang,")"),d(5),m("Description (",p.lang.lang,")")}}var L=(()=>{let a=class a{constructor(o,i,t,M,O){this.fb=o,this.notification=i,this.myFormService=t,this.service=M,this.lang=O,this.loading=!0,this.init={menubar:!0,plugins:"lists link image table code help wordcount"},this.form=this.fb.group({posts:this.fb.array([])})}ngOnInit(){this.getRecod()}getRecod(){this.service.loading=!0,this.service.find("home_posts").subscribe({next:o=>{let i=o.data.home_posts?JSON.parse(o.data.home_posts):[];this.posts().clear(),i.forEach(t=>{this.posts().push(this.fb.group({type:[t.type,""],title:[t.title,""],image:[t.image,""],button:[t.button,""],link:[t.link,""]}))}),this.service.loading=!1},error:o=>{this.service.loading=!1}})}posts(){return this.form.get("posts")}addPost(){this.posts().push(this.fb.group({type:["",""],title:["",""],image:["",""],button:["",""],link:["",""]}))}onSubmit(){return u(this,null,function*(){if(this.form.valid){this.service.loading=!0;let o={name:"home_posts",data:JSON.stringify(this.form.value.posts)};this.service.update(o).subscribe({next:i=>{this.service.loading=!1,this.notification.success(i.message)},error:i=>{let t=i.error;t?t.errors?this.notification.error(Object.values(t.errors)[0]):this.notification.error(t.message):this.notification.error("Something Went Wrong"),this.service.loading=!1}})}else this.notification.error("Validation Failed")})}remove(o){this.posts().removeAt(o)}};a.\u0275fac=function(i){return new(i||a)(l(w),l(E),l(_),l(j),l(I))},a.\u0275cmp=f({type:a,selectors:[["app-agrement"]],standalone:!0,features:[x],decls:28,vars:1,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info","d-flex","justify-content-between","align-items-center"],[1,"mb-0","text-white"],["type","button",1,"btn","btn-success","text-white"],[1,"card-body"],[1,"row","px-3","border","box-seprator"],[1,"row","pb-3"],[1,"col-12","text-center"],["type","submit",1,"btn","btn-info","text-white"],[1,"col-md-6"],[1,"form-group"],[1,"form-label"],["placeholder","Title",1,"form-control"],["placeholder","Image",1,"form-control"],[1,"col-md-12"],[1,"form-control","description"],["type","button",1,"delete_btn","btn","btn-danger"]],template:function(i,t){i&1&&(n(0,"div",0)(1,"div",1)(2,"h4",2),r(3,"Convenios de Cooperaci\xF3n Institucional "),e()(),n(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),r(9,"Admin"),e()(),n(10,"li",8),r(11,"About"),e()()()()(),n(12,"div")(13,"div",9)(14,"div",10)(15,"div",11)(16,"div",12)(17,"h4",13),r(18,"Convenios de Cooperaci\xF3n Institucional Form "),e(),n(19,"button",14),r(20,"Add New"),e()(),n(21,"div",15),h(22,A,18,3,"div",16,v),e()()()(),n(24,"div",17)(25,"div",18)(26,"button",19),r(27,"Update"),e()()()()),i&2&&(d(22),g(S(0,k)))},dependencies:[y,F,C],styles:[`.box-seprator[_ngcontent-%COMP%]{
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
    }`]});let s=a;return s})();export{L as AgrementComponent};