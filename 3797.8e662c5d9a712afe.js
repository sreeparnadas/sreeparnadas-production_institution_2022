"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[3797,2174],{3797:(v,p,c)=>{c.r(p),c.d(p,{CourseContentExcelModule:()=>u});var e=c(6895),s=c(4238),r=c(2174),h=c(4650);let u=(()=>{class l{}return l.\u0275fac=function(_){return new(_||l)},l.\u0275mod=h.oAB({type:l}),l.\u0275inj=h.cJS({imports:[e.ez,s.CourseContentExcelRoutingModule,r.fx]}),l})()},2174:(v,p,c)=>{c.d(p,{UQ:()=>m,US:()=>b,fx:()=>y});var e=c(4650),s=c(7340),r=c(6895),h=c(805);function u(i,a){if(1&i&&(e.TgZ(0,"span",9),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij(" ",t.header," ")}}function l(i,a){1&i&&e.GkF(0)}function g(i,a){1&i&&e.Hsn(0,1,["*ngIf","hasHeaderFacet"])}function _(i,a){1&i&&e.GkF(0)}function C(i,a){if(1&i&&(e.ynx(0),e.YNc(1,_,1,0,"ng-container",5),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",t.contentTemplate)}}const T=["*",[["p-header"]]],I=function(i){return{"p-accordion-tab-active":i}},A=function(i,a){return{"p-highlight":i,"p-disabled":a}},f=function(i){return{transitionParams:i}},x=function(i){return{value:"visible",params:i}},D=function(i){return{value:"hidden",params:i}},E=["*","p-header"],M=["*"];let O=0,b=(()=>{class i{constructor(t,n){this.changeDetector=n,this.cache=!0,this.selectedChange=new e.vpe,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.id="p-accordiontab-"+O++,this.accordion=t}get selected(){return this._selected}set selected(t){this._selected=t,this.loaded||(this._selected&&this.cache&&(this.loaded=!0),this.changeDetector.detectChanges())}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":default:this.contentTemplate=t.template;break;case"header":this.headerTemplate=t.template}})}toggle(t){if(this.disabled)return!1;let n=this.findTabIndex();if(this.selected)this.selected=!1,this.accordion.onClose.emit({originalEvent:t,index:n});else{if(!this.accordion.multiple)for(var o=0;o<this.accordion.tabs.length;o++)this.accordion.tabs[o].selected&&(this.accordion.tabs[o].selected=!1,this.accordion.tabs[o].selectedChange.emit(!1),this.accordion.tabs[o].changeDetector.markForCheck());this.selected=!0,this.loaded=!0,this.accordion.onOpen.emit({originalEvent:t,index:n})}this.selectedChange.emit(this.selected),this.accordion.updateActiveIndex(),this.changeDetector.markForCheck(),t.preventDefault()}findTabIndex(){let t=-1;for(var n=0;n<this.accordion.tabs.length;n++)if(this.accordion.tabs[n]==this){t=n;break}return t}get hasHeaderFacet(){return this.headerFacet&&this.headerFacet.length>0}onKeydown(t){(32===t.which||13===t.which)&&(this.toggle(t),t.preventDefault())}ngOnDestroy(){this.accordion.tabs.splice(this.findTabIndex(),1)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36((0,e.Gpc)(()=>m)),e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-accordionTab"]],contentQueries:function(t,n,o){if(1&t&&(e.Suo(o,h.h4,4),e.Suo(o,h.jx,4)),2&t){let d;e.iGM(d=e.CRH())&&(n.headerFacet=d),e.iGM(d=e.CRH())&&(n.templates=d)}},hostAttrs:[1,"p-element"],inputs:{header:"header",disabled:"disabled",cache:"cache",transitionOptions:"transitionOptions",selected:"selected"},outputs:{selectedChange:"selectedChange"},ngContentSelectors:E,decls:11,vars:28,consts:[[1,"p-accordion-tab",3,"ngClass"],[1,"p-accordion-header",3,"ngClass"],["role","tab",1,"p-accordion-header-link",3,"click","keydown"],[1,"p-accordion-toggle-icon",3,"ngClass"],["class","p-accordion-header-text",4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngIf"],["role","region",1,"p-toggleable-content"],[1,"p-accordion-content"],[1,"p-accordion-header-text"]],template:function(t,n){1&t&&(e.F$t(T),e.TgZ(0,"div",0)(1,"div",1)(2,"a",2),e.NdJ("click",function(d){return n.toggle(d)})("keydown",function(d){return n.onKeydown(d)}),e._UZ(3,"span",3),e.YNc(4,u,2,1,"span",4),e.YNc(5,l,1,0,"ng-container",5),e.YNc(6,g,1,0,"ng-content",6),e.qZA()(),e.TgZ(7,"div",7)(8,"div",8),e.Hsn(9),e.YNc(10,C,2,1,"ng-container",6),e.qZA()()()),2&t&&(e.Q6J("ngClass",e.VKq(15,I,n.selected)),e.xp6(1),e.Q6J("ngClass",e.WLB(17,A,n.selected,n.disabled)),e.xp6(1),e.uIk("tabindex",n.disabled?null:0)("id",n.id)("aria-controls",n.id+"-content")("aria-expanded",n.selected),e.xp6(1),e.Q6J("ngClass",n.selected?n.accordion.collapseIcon:n.accordion.expandIcon),e.xp6(1),e.Q6J("ngIf",!n.hasHeaderFacet),e.xp6(1),e.Q6J("ngTemplateOutlet",n.headerTemplate),e.xp6(1),e.Q6J("ngIf",n.hasHeaderFacet),e.xp6(1),e.Q6J("@tabContent",n.selected?e.VKq(22,x,e.VKq(20,f,n.transitionOptions)):e.VKq(26,D,e.VKq(24,f,n.transitionOptions))),e.uIk("id",n.id+"-content")("aria-hidden",!n.selected)("aria-labelledby",n.id),e.xp6(3),e.Q6J("ngIf",n.contentTemplate&&(n.cache?n.loaded:n.selected)))},dependencies:[r.mk,r.O5,r.tP],styles:[".p-accordion-header-link{cursor:pointer;display:flex;align-items:center;-webkit-user-select:none;user-select:none;position:relative;text-decoration:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}\n"],encapsulation:2,data:{animation:[(0,s.X$)("tabContent",[(0,s.SB)("hidden",(0,s.oB)({height:"0",overflow:"hidden"})),(0,s.SB)("visible",(0,s.oB)({height:"*"})),(0,s.eR)("visible <=> hidden",[(0,s.oB)({overflow:"hidden"}),(0,s.jt)("{{transitionParams}}")]),(0,s.eR)("void => *",(0,s.jt)(0))])]},changeDetection:0}),i})(),m=(()=>{class i{constructor(t,n){this.el=t,this.changeDetector=n,this.onClose=new e.vpe,this.onOpen=new e.vpe,this.expandIcon="pi pi-fw pi-chevron-right",this.collapseIcon="pi pi-fw pi-chevron-down",this.activeIndexChange=new e.vpe,this.tabs=[]}ngAfterContentInit(){this.initTabs(),this.tabListSubscription=this.tabList.changes.subscribe(t=>{this.initTabs()})}initTabs(){this.tabs=this.tabList.toArray(),this.updateSelectionState(),this.changeDetector.markForCheck()}getBlockableElement(){return this.el.nativeElement.children[0]}get activeIndex(){return this._activeIndex}set activeIndex(t){this._activeIndex=t,this.preventActiveIndexPropagation?this.preventActiveIndexPropagation=!1:this.updateSelectionState()}updateSelectionState(){if(this.tabs&&this.tabs.length&&null!=this._activeIndex)for(let t=0;t<this.tabs.length;t++){let n=this.multiple?this._activeIndex.includes(t):t===this._activeIndex;n!==this.tabs[t].selected&&(this.tabs[t].selected=n,this.tabs[t].selectedChange.emit(n),this.tabs[t].changeDetector.markForCheck())}}updateActiveIndex(){let t=this.multiple?[]:null;this.tabs.forEach((n,o)=>{if(n.selected){if(!this.multiple)return void(t=o);t.push(o)}}),this.preventActiveIndexPropagation=!0,this.activeIndexChange.emit(t)}ngOnDestroy(){this.tabListSubscription&&this.tabListSubscription.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-accordion"]],contentQueries:function(t,n,o){if(1&t&&e.Suo(o,b,4),2&t){let d;e.iGM(d=e.CRH())&&(n.tabList=d)}},hostAttrs:[1,"p-element"],inputs:{multiple:"multiple",style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",activeIndex:"activeIndex"},outputs:{onClose:"onClose",onOpen:"onOpen",activeIndexChange:"activeIndexChange"},ngContentSelectors:M,decls:2,vars:4,consts:[["role","tablist",3,"ngClass","ngStyle"]],template:function(t,n){1&t&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA()),2&t&&(e.Tol(n.styleClass),e.Q6J("ngClass","p-accordion p-component")("ngStyle",n.style))},dependencies:[r.mk,r.PC],encapsulation:2,changeDetection:0}),i})(),y=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[r.ez],h.m8]}),i})()}}]);