import{a as G}from"./chunk-664O5X2G.js";import"./chunk-5VKYLTWQ.js";import{a as V}from"./chunk-Y76QO3KO.js";import{a as N}from"./chunk-OSWCQDFV.js";import{d as I}from"./chunk-5O4WDRVK.js";import{b as y,c as l,d as F,e as L,g as M,h as j,k as w,o as T,p as A,q as D}from"./chunk-WNM2FDHQ.js";import{f as C}from"./chunk-EG6VKY43.js";import{Aa as v,La as g,Na as b,Pa as x,Ta as i,Ua as e,Va as m,X as f,Za as h,_a as S,cb as n,eb as a,ib as E,za as o}from"./chunk-7AR2EFHR.js";import{d as p}from"./chunk-4CLCTAJ7.js";function R(c,u){c&1&&(i(0,"p",10),n(1,"Loading"),e())}function J(c,u){if(c&1&&(i(0,"div",11)(1,"div",12)(2,"div",13)(3,"div",14)(4,"h4",15),n(5,"Top Section"),e()(),i(6,"div",16)(7,"div",17)(8,"div",18)(9,"div",19)(10,"label",20),n(11),e(),m(12,"textarea",21),n(13),e()()()()()(),i(14,"div",12)(15,"div",13)(16,"div",14)(17,"h4",15),n(18,"Company About"),e()(),i(19,"div",16)(20,"div",11)(21,"div",18)(22,"div",19)(23,"label",20),n(24),e(),m(25,"input",22),e()(),i(26,"div",18)(27,"div",19)(28,"label",20),n(29),e(),m(30,"textarea",23),e()()()()()(),i(31,"div",12)(32,"div",13)(33,"div",14)(34,"h4",15),n(35,"Mission"),e()(),i(36,"div",16)(37,"div",17)(38,"div",24)(39,"div",19)(40,"label",20),n(41),e(),m(42,"input",25),e()(),i(43,"div",24)(44,"div",19)(45,"label",20),n(46),e(),m(47,"input",26),e()(),i(48,"div",18)(49,"div",19)(50,"label",20),n(51),e(),m(52,"textarea",27),e()(),i(53,"div",24)(54,"div",19)(55,"label",20),n(56),e(),m(57,"input",28),e()(),i(58,"div",24)(59,"div",19)(60,"label",20),n(61),e(),m(62,"input",29),e()(),i(63,"div",24)(64,"div",19)(65,"label",20),n(66),e(),m(67,"input",30),e()(),i(68,"div",24)(69,"div",19)(70,"label",20),n(71),e(),m(72,"input",31),e()()()()()(),i(73,"div",32)(74,"button",33),n(75,"Update"),e()()()),c&2){let r=S();o(11),a(" Description (",r.lang.lang,")"),o(2),a(" ",r.myFormService.getErrorMessage("top_detail")," "),o(11),a("Title (",r.lang.lang,")"),o(5),a("Short Description (",r.lang.lang,")"),o(12),a("Title (",r.lang.lang,")"),o(5),a("Image (",r.lang.lang,")"),o(5),a("Short Description (",r.lang.lang,")"),o(5),a("Text 1 (",r.lang.lang,")"),o(5),a("Image 1 (",r.lang.lang,")"),o(5),a("Text 2 (",r.lang.lang,")"),o(5),a("Image 2 (",r.lang.lang,")")}}var P=(()=>{let u=class u{constructor(d,t,s,_,O){this.fb=d,this.notification=t,this.myFormService=s,this.service=_,this.lang=O,this.loader=!0,this.form=this.fb.group({top_detail:["",[l.maxLength(100)]],about_title:["",l.maxLength(100)],about_description:["",l.maxLength(1e4)],missiion_title:["",l.maxLength(100)],missiion_image:["",l.maxLength(100)],mission_description:["",l.maxLength(1e4)],mission_button_1_text:["",l.maxLength(100)],mission_button_1_image:["",l.maxLength(100)],mission_button_2_image:["",l.maxLength(100)],mission_button_2_text:["",l.maxLength(100)]}),this.myFormService.setForm(this.form)}ngOnInit(){this.getRecord()}getRecord(){this.service.loading=!0,this.service.find("about_mission").subscribe({next:d=>{let t=d.data.about_mission?JSON.parse(d.data.about_mission):[];t&&this.form.patchValue({top_detail:t.top_detail,about_title:t.about_title,about_description:t.about_description,missiion_title:t.missiion_title,missiion_image:t.missiion_image,mission_description:t.mission_description,mission_button_1_text:t.mission_button_1_text,mission_button_1_image:t.mission_button_1_image,mission_button_2_image:t.mission_button_2_image,mission_button_2_text:t.mission_button_2_text}),this.service.loading=!1},error:d=>{this.service.loading=!1}})}onSubmit(){return p(this,null,function*(){if(this.form.valid){this.service.loading=!0;let d={name:"about_mission",data:JSON.stringify(this.form.value)};this.service.update(d).subscribe({next:t=>{this.notification.success(t.message),this.service.loading=!1},error:t=>{let s=t.error;s?s.errors?this.notification.error(Object.values(s.errors)[0]):this.notification.error(s.message):this.notification.error("Something Went Wrong"),this.service.loading=!1}})}else this.notification.error("Validation Failed")})}};u.\u0275fac=function(t){return new(t||u)(v(T),v(I),v(V),v(G),v(N))},u.\u0275cmp=f({type:u,selectors:[["app-admin-about-mission"]],standalone:!0,features:[E],decls:15,vars:2,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[3,"ngSubmit","formGroup"],[1,"text-center"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[1,"row","pt-3"],[1,"col-md-12"],[1,"form-group"],[1,"form-label"],["rows","2","formControlName","top_detail",1,"form-control"],["formControlName","about_title",1,"form-control"],["rows","5","formControlName","about_description",1,"form-control"],[1,"col-md-6"],["formControlName","missiion_title",1,"form-control"],["formControlName","missiion_image",1,"form-control"],["rows","10","formControlName","mission_description",1,"form-control"],["formControlName","mission_button_1_text",1,"form-control"],["formControlName","mission_button_1_image",1,"form-control"],["formControlName","mission_button_2_text",1,"form-control"],["formControlName","mission_button_2_image",1,"form-control"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white"]],template:function(t,s){t&1&&(i(0,"div",0)(1,"div",1)(2,"h4",2),n(3,"Mission"),e()(),i(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),n(9,"Admin"),e()(),i(10,"li",8),n(11,"About"),e()()()()(),i(12,"form",9),h("ngSubmit",function(){return s.onSubmit()}),g(13,R,2,0,"p",10)(14,J,76,11,"div",11),e()),t&2&&(o(12),b("formGroup",s.form),o(),x(s.service.loading?13:14))},dependencies:[C,D,M,y,F,L,j,w,A],encapsulation:2});let c=u;return c})();export{P as AboutMissionComponent};
