import{a as R}from"./chunk-C6P77QXR.js";import"./chunk-SUONLQWJ.js";import{a as $}from"./chunk-Z5IQARTU.js";import{a as I}from"./chunk-WLIO6G5M.js";import{d as k}from"./chunk-UI6BEQHS.js";import{b as V,d as j,e as T,g as G,h as M,i as H,j as A,k as O,o as B,p as D,q as L}from"./chunk-OWL564RZ.js";import{f as F}from"./chunk-G2EJMNH5.js";import{$a as c,Aa as m,Ba as d,Ma as S,Oa as b,Qa as C,Ra as y,Sa as w,Ta as E,Ua as r,Va as i,Wa as p,X as _,Za as h,_a as v,ab as o,cb as u,ea as f,fa as g,fb as N}from"./chunk-2SQSF67M.js";import{d as x}from"./chunk-4CLCTAJ7.js";function W(l,a){l&1&&(r(0,"p",9),o(1,"Loading"),i())}function U(l,a){if(l&1){let s=h();r(0,"div",19)(1,"div",23)(2,"div",24)(3,"label",25),o(4),i(),p(5,"input",26),i()(),r(6,"div",23)(7,"div",24)(8,"label",25),o(9),i(),p(10,"input",27),i()(),r(11,"div",23)(12,"div",24)(13,"label",25),o(14),i(),p(15,"input",28),i()(),r(16,"div",23)(17,"div",24)(18,"label",25),o(19),i(),p(20,"input",29),i()(),r(21,"button",30),v("click",function(){let t=f(s).$index,n=c(2);return g(n.remove(t))}),o(22,"X"),i()()}if(l&2){let s=a.$index,e=c(2);b("formGroupName",s),m(4),u("Title (",e.lang.lang,")"),m(5),u("Image (",e.lang.lang,")"),m(5),u("Button (",e.lang.lang,")"),m(5),u("Link (",e.lang.lang,")")}}function X(l,a){if(l&1){let s=h();r(0,"form",11),v("ngSubmit",function(){f(s);let t=c();return g(t.onSubmit())}),r(1,"div")(2,"div",12)(3,"div",13)(4,"div",14)(5,"div",15)(6,"h4",16),o(7,"Slider Form "),i(),r(8,"button",17),v("click",function(){f(s);let t=c();return g(t.addSlider())}),o(9,"Add New"),i()(),r(10,"div",18),w(11,U,23,5,"div",19,y),i()()()(),r(13,"div",20)(14,"div",21)(15,"button",22),o(16,"Update"),i()()()()()}if(l&2){let s=c();b("formGroup",s.form),m(11),E(s.sliders().controls)}}var ie=(()=>{let a=class a{constructor(e,t,n,J,P){this.fb=e,this.notification=t,this.myFormService=n,this.service=J,this.lang=P,this.loading=!0,this.init={menubar:!0,plugins:"lists link image table code help wordcount"},this.form=this.fb.group({sliders:this.fb.array([])}),this.service.loadSetting()}ngOnInit(){this.getRecod()}getRecod(){this.service.loading=!0,this.service.find("home_slider").subscribe(e=>{let t=e.data.home_slider?JSON.parse(e.data.home_slider):[];this.sliders().clear(),t.forEach(n=>{this.sliders().push(this.fb.group({title:[n.title,""],image:[n.image,""],button:[n.button,""],link:[n.link,""]}))}),this.service.loading=!1})}sliders(){return this.form.get("sliders")}addSlider(){this.sliders().push(this.fb.group({title:["",""],image:["",""],button:["",""],link:["",""]}))}onSubmit(){return x(this,null,function*(){if(this.form.valid){this.service.loading=!0;let e={name:"home_slider",data:JSON.stringify(this.form.value.sliders)};this.service.update(e).subscribe({next:t=>{this.service.loading=!1,this.notification.success(t.message)},error:t=>{let n=t.error;n?n.errors?this.notification.error(Object.values(n.errors)[0]):this.notification.error(n.message):this.notification.error("Something Went Wrong"),this.service.loading=!1}})}else this.notification.error("Validation Failed")})}remove(e){this.sliders().removeAt(e)}};a.\u0275fac=function(t){return new(t||a)(d(B),d(k),d($),d(R),d(I))},a.\u0275cmp=_({type:a,selectors:[["app-admin-setting-home-slider"]],standalone:!0,features:[N],decls:14,vars:1,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"text-center"],[3,"formGroup"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info","d-flex","justify-content-between","align-items-center"],[1,"mb-0","text-white"],["type","button",1,"btn","btn-success","text-white",3,"click"],["formArrayName","sliders",1,"card-body"],[1,"row","mb-4","px-3","py-3","border","box-seprator",3,"formGroupName"],[1,"row","pb-3"],[1,"col-12","text-center"],["type","submit",1,"btn","btn-info","text-white"],[1,"col-md-6"],[1,"form-group"],[1,"form-label"],["formControlName","title","placeholder","Title",1,"form-control"],["formControlName","image","placeholder","Image",1,"form-control"],["formControlName","button","placeholder","Button",1,"form-control"],["formControlName","link","placeholder","Link",1,"form-control"],["type","button",1,"delete_btn","btn","btn-danger",3,"click"]],template:function(t,n){t&1&&(r(0,"div",0)(1,"div",1)(2,"h4",2),o(3,"Slider"),i()(),r(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),o(9,"Admin"),i()(),r(10,"li",8),o(11,"Home"),i()()()()(),S(12,W,2,0,"p",9)(13,X,17,1,"form",10)),t&2&&(m(12),C(n.service.loading?12:13))},dependencies:[F,L,G,V,j,T,M,O,H,A,D],styles:[`.box-seprator[_ngcontent-%COMP%]{
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
        position: relative;
    }

    .delete_btn[_ngcontent-%COMP%]{
        position: absolute;
        right: 1px;
        width: 36px;
        top: 2px;
    }`]});let l=a;return l})();export{ie as SettingHomeSliderComponent};