import{a as M}from"./chunk-53M43E5X.js";import{a as N}from"./chunk-UWPZQJI4.js";import"./chunk-MFQUOE3A.js";import{e as j,f as D,g as A,p as B}from"./chunk-HAHMTXEV.js";import{a as $}from"./chunk-NHL74IMT.js";import{d as V}from"./chunk-ZYBNDVFS.js";import{f as F}from"./chunk-SKYEZCWB.js";import{$a as b,Aa as i,Ba as S,Ma as k,Oa as p,Qa as T,Ra as E,Sa as y,Ta as C,Ua as l,Va as e,Wa as u,X as w,Za as I,_a as x,db as o,ea as _,eb as H,fa as h,fb as c,jb as L}from"./chunk-TL672DAF.js";import{d as f}from"./chunk-4CLCTAJ7.js";function O(v,g){v&1&&(l(0,"p",10),o(1,"Loading"),e())}function R(v,g){if(v&1){let d=I();l(0,"div",23)(1,"div",24)(2,"div",25)(3,"label",26),o(4),e(),u(5,"input",37),e()(),l(6,"div",24)(7,"div",25)(8,"label",26),o(9),e(),u(10,"app-img-uploader",28),e()(),l(11,"div",24)(12,"div",25)(13,"label",26),o(14),e(),u(15,"input",38),e()(),l(16,"div",24)(17,"div",25)(18,"label",26),o(19),e(),u(20,"input",39),e()(),l(21,"button",40),x("click",function(){let n=_(d).$index,r=b(2);return h(r.removeItem("sliders",n))}),o(22,"X"),e()()}if(v&2){let d=g.$implicit,a=g.$index,n=b(2);i(4),c("Title (",n.lang.lang,")"),i(),p("value",d.title)("name","sliders["+a+"][title]"),i(4),c("Image (",n.lang.lang,")"),i(),p("image",d.image)("name","sliders["+a+"][image]"),i(4),c("Button (",n.lang.lang,")"),i(),p("value",d.button)("name","sliders["+a+"][button]"),i(4),c("Link (",n.lang.lang,")"),i(),p("value",d.link)("name","sliders["+a+"][link]")}}function K(v,g){if(v&1&&(l(0,"div",23)(1,"div",33)(2,"div",25)(3,"label",26),o(4),e(),u(5,"input",41),e()(),l(6,"div",33)(7,"div",25)(8,"label",26),o(9),e(),u(10,"input",42),e()(),l(11,"div",33)(12,"div",25)(13,"label",26),o(14),e(),u(15,"app-img-uploader",28),e()(),l(16,"div",24)(17,"div",25)(18,"label",26),o(19),e(),u(20,"input",42),e()(),l(21,"div",24)(22,"div",25)(23,"label",26),o(24),e(),u(25,"input",41),e()(),l(26,"button",43),o(27,"X"),e()()),v&2){let d=g.$implicit,a=g.$index,n=b(2);i(4),c("Type (",n.lang.lang,")"),i(),p("value",d.type)("name","destacados[posts]["+a+"][type]"),i(4),c("Title (",n.lang.lang,")"),i(),p("name","destacados[posts]["+a+"][title]")("value",d.title),i(4),c("Image (",n.lang.lang,")"),i(),p("image",d.image)("name","destacados[posts]["+a+"][image]"),i(4),c("Button (",n.lang.lang,")"),i(),p("name","destacados[posts]["+a+"][button]")("value",d.button),i(4),c("Link (",n.lang.lang,")"),i(),p("value",d.link)("name","destacados[posts]["+a+"][link]")}}function U(v,g){if(v&1){let d=I();l(0,"div",11)(1,"div",15)(2,"div",16)(3,"div",17)(4,"h4",18),o(5,"Create Slider Form"),e()(),l(6,"div",19)(7,"div",20)(8,"div",21)(9,"button",22),x("click",function(){_(d);let n=b();return h(n.add_new("sliders",{title:"",image:"",button:"",link:""}))}),o(10,"+"),e()()(),y(11,R,23,12,"div",23,E),e()()(),l(13,"div",15)(14,"div",16)(15,"div",17)(16,"h4",18),o(17,"About Us "),e()(),l(18,"div",19)(19,"div",11)(20,"div",24)(21,"div",25)(22,"label",26),o(23),e(),u(24,"input",27),e()(),l(25,"div",24)(26,"div",25)(27,"label",26),o(28),e(),u(29,"app-img-uploader",28),e()(),l(30,"div",29)(31,"div",25)(32,"label",26),o(33),e(),l(34,"textarea",30),o(35),e()()()()()()(),l(36,"div",31)(37,"div",16)(38,"div",32)(39,"h4",18),o(40,"Destacados Posts "),e()(),l(41,"div",19)(42,"div",11)(43,"div",33)(44,"div",25)(45,"label",26),o(46),e(),u(47,"input",34),e()(),l(48,"div",33)(49,"div",25)(50,"label",26),o(51),e(),u(52,"input",35),e()(),l(53,"div",33)(54,"div",25)(55,"label",26),o(56),e(),u(57,"input",36),e()()(),l(58,"div",20)(59,"div",21)(60,"button",22),x("click",function(){_(d);let n=b();return h(n.add_new("destacados.posts",{type:"",title:"",image:"",button:"",link:""}))}),o(61,"+"),e()()(),y(62,K,28,15,"div",23,E),e()()()()}if(v&2){let d,a,n,r,s,m,t=b();i(11),C(t.data.sliders),i(12),c("Title (",t.lang.lang,")"),i(),p("value",(d=t.data==null||t.data.about==null?null:t.data.about.title)!==null&&d!==void 0?d:""),i(4),c("Image (",t.lang.lang,")"),i(),p("image",(a=t.data==null||t.data.about==null?null:t.data.about.image)!==null&&a!==void 0?a:"")("name","about[image]"),i(4),c("Short Description (",t.lang.lang,")"),i(2),H((n=t.data==null||t.data.about==null?null:t.data.about.description)!==null&&n!==void 0?n:""),i(11),c("Section Title (",t.lang.lang,")"),i(),p("value",(r=t.data==null||t.data.destacados==null?null:t.data.destacados.title)!==null&&r!==void 0?r:""),i(4),c("Section Description (",t.lang.lang,")"),i(),p("value",(s=t.data==null||t.data.destacados==null?null:t.data.destacados.description)!==null&&s!==void 0?s:""),i(4),c("Section Button (",t.lang.lang,")"),i(),p("value",(m=t.data==null||t.data.destacados==null?null:t.data.destacados.button)!==null&&m!==void 0?m:""),i(5),C(t.data==null||t.data.destacados==null?null:t.data.destacados.posts)}}var Y=(()=>{let g=class g{constructor(a,n,r){this.notification=a,this.lang=n,this.service=r,this.formLoader=!0,this.data={sliders:[{title:"title",image:"image",button:"button",link:"link"}],about:{title:"title",image:"image",description:"description"},destacados:{title:"",description:"",button:"",posts:[{type:"",title:"",image:"",button:"",link:""}]}}}ngOnInit(){this.getRecord()}getRecord(){this.formLoader=!0,this.service.find("home").subscribe({next:a=>{this.data=a.data.home?JSON.parse(a.data.home):{},console.log("===================================="),console.log(a),console.log("===================================="),this.formLoader=!1},error:a=>{this.formLoader=!1}})}onSubmit(a){return f(this,null,function*(){let n=a.target,r=new FormData(n),s={};r.forEach((m,t)=>{s[t]=m}),r.append("name","home"),this.service.update(r).subscribe({next:m=>{this.getRecord(),this.notification.success(m.message)},error:m=>{let t=m.error;t?t.errors?this.notification.error(Object.values(t.errors)[0]):this.notification.error(t.message):this.notification.error("Something Went Wrong")}})})}add_new(a,n){return f(this,null,function*(){let r=a.split("."),s=this.data;for(let t=0;t<r.length-1;t++)s=s[r[t]];let m=r[r.length-1];Array.isArray(s[m])||(s[m]=[]),s[m].push(n)})}removeItem(a,n){return f(this,null,function*(){let r=a.split("."),s=this.data;for(let t=0;t<r.length-1;t++)s=s[r[t]];let m=r[r.length-1];Array.isArray(s[m])?s[m].splice(n,1):console.error(`Target ${m} is not an array.`)})}};g.\u0275fac=function(n){return new(n||g)(S(V),S($),S(M))},g.\u0275cmp=w({type:g,selectors:[["app-admin-settings-home"]],standalone:!0,features:[L],decls:19,vars:1,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[3,"ngSubmit"],[1,"text-center"],[1,"row"],[1,"row","pb-5"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[1,"row","pb-2"],[1,"col-12","text-center"],["type","button",1,"btn","btn-success","text-white",3,"click"],[1,"row","mb-4","px-3","py-3","border","box-seprator"],[1,"col-md-6"],[1,"form-group"],[1,"form-label"],["name","about[title]",1,"form-control",3,"value"],[3,"image","name"],[1,"col-md-12"],["rows","10","name","about[description]",1,"form-control"],[1,"col-12"],[1,"card-header","bg-info","d-flex","justify-content-between","align-items-center"],[1,"col-md-4"],["name","destacados[title]",1,"form-control",3,"value"],["name","destacados[description]",1,"form-control",3,"value"],["name","destacados[button]",1,"form-control",3,"value"],["placeholder","Title",1,"form-control",3,"value","name"],["placeholder","Button",1,"form-control",3,"value","name"],["placeholder","Link",1,"form-control",3,"value","name"],["type","button",1,"delete_btn","btn","btn-danger",3,"click"],[1,"form-control",3,"value","name"],[1,"form-control",3,"name","value"],["type","button",1,"delete_btn","btn","btn-danger"]],template:function(n,r){n&1&&(l(0,"div",0)(1,"div",1)(2,"h4",2),o(3,"Home"),e()(),l(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),o(9,"Admin"),e()(),l(10,"li",8),o(11,"Home"),e()()()()(),l(12,"form",9),x("ngSubmit",function(m){return r.onSubmit(m)}),k(13,O,2,0,"p",10)(14,U,64,13,"div",11),l(15,"div",12)(16,"div",13)(17,"button",14),o(18,"Submit"),e()()()()),n&2&&(i(13),T(r.formLoader?13:14))},dependencies:[F,B,A,j,D,N],encapsulation:2});let v=g;return v})();export{Y as HomeComponent};