import{a as D}from"./chunk-EBXOX4Q2.js";import"./chunk-WLIO6G5M.js";import{d as I}from"./chunk-UI6BEQHS.js";import{f as L,o as j,p as T}from"./chunk-G2EJMNH5.js";import{$a as x,Aa as m,Ba as s,Ma as b,Oa as p,Qa as v,Sa as _,Ta as E,Ua as e,Va as t,Wa as c,X as u,Za as w,_a as k,ab as i,bb as y,cb as f,ea as h,fa as g,fb as C,va as S}from"./chunk-2SQSF67M.js";import"./chunk-4CLCTAJ7.js";var N=(r,l)=>l.id;function A(r,l){r&1&&(e(0,"td",29),i(1,"Loading"),t())}function F(r,l){if(r&1){let d=w();e(0,"tr")(1,"td",28),i(2),t(),e(3,"td"),c(4,"img",44),t(),e(5,"td"),i(6),t(),e(7,"td",45)(8,"div",46)(9,"a",47),c(10,"i",48),t(),e(11,"a",49),k("click",function(){let n=h(d).$implicit,a=x(2);return g(a.onDelete(n.id))}),c(12,"i",50),t()()()()}if(r&2){let d=l.$implicit;m(2),y(d.id),m(2),p("src",d.thumbnail_prev,S),m(2),f(" ",d.title," "),m(3),p("routerLink","/admin/sliders/edit/"+d.id)}}function O(r,l){if(r&1&&_(0,F,13,4,"tr",null,N),r&2){let d=x();E(d.dataSource)}}var U=(()=>{let l=class l{constructor(o,n,a){this.service=o,this.notification=n,this.router=a,this.loader=!1,this.dataSource=[]}ngOnInit(){this.getList()}getList(){this.loader=!0,this.service.list().subscribe({next:o=>{let n=[];o.data.data.forEach(a=>{n.push(a)}),this.dataSource=n,this.loader=!1},error:o=>{let n=o.error;n?n.errors?this.notification.error(Object.values(n.errors)[0]):this.notification.error(n.message):this.notification.error("Something Went Wrong"),this.loader=!1}})}onDelete(o){this.loader=!0,this.service.delete(o).subscribe({next:n=>{this.notification.success(n.message),this.getList()},error:n=>{let a=n.error;a?a.errors?this.notification.error(Object.values(a.errors)[0]):this.notification.error(a.message):this.notification.error("Something Went Wrong"),this.loader=!1}})}};l.\u0275fac=function(n){return new(n||l)(s(D),s(I),s(j))},l.\u0275cmp=u({type:l,selectors:[["app-slider-list"]],standalone:!0,features:[C],decls:82,vars:2,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info","d-flex","justify-content-between","justify-content-center","align-items-center"],[1,"mb-0","text-white"],["routerLink","/admin/sliders/create",1,"btn","btn-primary"],[1,"card-body","p-4"],[1,"d-none","d-flex","justify-content-between","pb-3"],[1,"d-flex","justify-content-center","align-items-center"],["name","example23_length","aria-controls","example23",1,"border","form-control","form-control-sm"],["value","10"],["value","25"],["value","50"],["value","100"],["value","200"],[1,"text-end"],[1,"table-responsive"],[1,"table","border","table-striped"],[1,"text-nowrap","text-truncate"],[1,"text-center"],["colspan","5",1,"text-center"],["id","example23_paginate",1,"d-none","dataTables_paginate","paging_simple_numbers","pt-3"],[1,"pagination"],["id","example23_previous",1,"paginate_button","page-item","previous","disabled"],["href","#","aria-controls","example23","data-dt-idx","0","tabindex","0",1,"page-link"],[1,"paginate_button","page-item","active"],["href","#","aria-controls","example23","data-dt-idx","1","tabindex","0",1,"page-link"],[1,"paginate_button","page-item"],["href","#","aria-controls","example23","data-dt-idx","2","tabindex","0",1,"page-link"],["href","#","aria-controls","example23","data-dt-idx","3","tabindex","0",1,"page-link"],["href","#","aria-controls","example23","data-dt-idx","4","tabindex","0",1,"page-link"],["href","#","aria-controls","example23","data-dt-idx","5","tabindex","0",1,"page-link"],["href","#","aria-controls","example23","data-dt-idx","6","tabindex","0",1,"page-link"],["id","example23_next",1,"paginate_button","page-item","next"],["href","#","aria-controls","example23","data-dt-idx","7","tabindex","0",1,"page-link"],[2,"width","50px","height","50px",3,"src"],[1,"text-center","text-nowrap"],[1,"bt-group"],["title","Edit",1,"me-2","btn","btn-info","text-white",3,"routerLink"],[1,"icon","mdi","mdi-grease-pencil"],["title","Delete",1,"btn","btn-danger","text-white",3,"click"],[1,"icon","mdi","mdi-delete"]],template:function(n,a){n&1&&(e(0,"div",0)(1,"div",1)(2,"h4",2),i(3,"All Sliders"),t()(),e(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),i(9,"Home"),t()(),e(10,"li",8),i(11,"Sliders"),t()()()()(),e(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h4",13),i(17,"All Slider List"),t(),e(18,"a",14),i(19,"Add New"),t()(),e(20,"div",15)(21,"div",16)(22,"div",17)(23,"label"),i(24,"Show "),t(),e(25,"select",18)(26,"option",19),i(27,"10"),t(),e(28,"option",20),i(29,"25"),t(),e(30,"option",21),i(31,"50"),t(),e(32,"option",22),i(33,"100"),t(),e(34,"option",23),i(35,"200"),t()(),e(36,"label"),i(37,"entries"),t()(),e(38,"div",24)(39,"p"),i(40),t()()(),e(41,"div",25)(42,"table",26)(43,"thead",27)(44,"tr")(45,"th",28),i(46,"#"),t(),e(47,"th",28),i(48,"Image"),t(),e(49,"th",28),i(50,"Title"),t(),e(51,"th",28),i(52,"Action"),t()()(),e(53,"tbody",27),b(54,A,2,0,"td",29)(55,O,2,0),t()()(),e(56,"div",30)(57,"ul",31)(58,"li",32)(59,"a",33),i(60,"Previous"),t()(),e(61,"li",34)(62,"a",35),i(63,"1"),t()(),e(64,"li",36)(65,"a",37),i(66,"2"),t()(),e(67,"li",36)(68,"a",38),i(69,"3"),t()(),e(70,"li",36)(71,"a",39),i(72,"4"),t()(),e(73,"li",36)(74,"a",40),i(75,"5"),t()(),e(76,"li",36)(77,"a",41),i(78,"6"),t()(),e(79,"li",42)(80,"a",43),i(81,"Next"),t()()()()()()()()),n&2&&(m(40),f("Showing 1 to 10 of ",a.dataSource.length," entries"),m(14),v(a.loader?54:55))},dependencies:[T,L],encapsulation:2});let r=l;return r})();export{U as SliderListComponent};
