"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[592],{3842:(v,M,d)=>{d.d(M,{P:()=>u});var t=d(9646),e=d(5e3),f=d(520);let u=(()=>{class m{constructor(l){this.http=l,this.arc="false",this.setting={element:{dynamicDownload:null}},this.http.get("assets/projectDetails.json").subscribe(i=>{this.projectDetails=i,this.projectHeading=this.projectDetails.projectHeading,this.contact=this.projectDetails.contact})}ngOnInit(){}toggleBounce(){this.arc="false"===this.arc?"true":"false"}fakeValidateUserData(){return(0,t.of)({userDate1:1,userData2:2})}dyanmicDownloadByHtmlTag(l){this.setting.element.dynamicDownload||(this.setting.element.dynamicDownload=document.createElement("a"));const i=this.setting.element.dynamicDownload,p=l.fileName.indexOf(".json")>-1?"text/json":"text/plain";i.setAttribute("href",`data:${p};charset=utf-8,${encodeURIComponent(l.text)}`),i.setAttribute("download",l.fileName);const h=new MouseEvent("click");i.dispatchEvent(h)}dynamicDownloadTxt(){this.fakeValidateUserData().subscribe(l=>{this.dyanmicDownloadByHtmlTag({fileName:"My Report",text:JSON.stringify(l)})})}dynamicDownloadJson(){this.fakeValidateUserData().subscribe(l=>{this.dyanmicDownloadByHtmlTag({fileName:"My Report.json",text:JSON.stringify(l)})})}}return m.\u0275fac=function(l){return new(l||m)(e.Y36(f.eN))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-top"]],decls:13,vars:2,consts:[[1,"masthead","d-flex","align-items-center"],[1,"container","px-4","px-lg-5","text-center"],["data-aos","fade-up","data-aos-duration","3000",1,"mb-1"],[1,"mb-5"],["href","#about",1,"btn","btn-primary","btn-xl"],["data-aos","fade-up","data-aos-once","true"]],template:function(l,i){1&l&&(e.TgZ(0,"header",0),e.TgZ(1,"div",1),e.TgZ(2,"h1",2),e._uU(3),e._UZ(4,"br"),e._uU(5),e.qZA(),e.TgZ(6,"h3",3),e.TgZ(7,"em"),e._uU(8,"We are developing it"),e.qZA(),e.qZA(),e.TgZ(9,"a",4),e._uU(10,"Find Out More"),e.qZA(),e.TgZ(11,"div",5),e._uU(12," the content "),e.qZA(),e.qZA(),e.qZA()),2&l&&(e.xp6(3),e.hij(" ",i.projectHeading," "),e.xp6(2),e.hij(" ",i.contact," "))},styles:[".ball[_ngcontent-%COMP%]{position:relative;background-color:#000;border-radius:50%;height:25px;width:25px}.masthead[_ngcontent-%COMP%]{min-height:30rem;position:relative;display:table;width:100%;height:auto;padding-top:8rem;padding-bottom:8rem;background-image:url(gold_background2.5899940047426bdb.jpg);background-position:center center;background-repeat:no-repeat;background-size:cover}.masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .masthead[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:4rem;margin:0;padding:0}@media (min-width: 992px){.masthead[_ngcontent-%COMP%]{height:100vh}.masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .masthead[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:5.5rem}}"]}),m})()},2953:(v,M,d)=>{d.r(M),d.d(M,{TopModule:()=>l});var t=d(9808),e=d(4521),f=d(3842),u=d(5e3);const m=[{path:"",component:f.P}];let C=(()=>{class i{}return i.\u0275fac=function(h){return new(h||i)},i.\u0275mod=u.oAB({type:i}),i.\u0275inj=u.cJS({imports:[[e.Bz.forChild(m)],e.Bz]}),i})(),l=(()=>{class i{}return i.\u0275fac=function(h){return new(h||i)},i.\u0275mod=u.oAB({type:i}),i.\u0275inj=u.cJS({imports:[[t.ez,C]]}),i})()},9224:(v,M,d)=>{d.d(M,{a8:()=>D,dn:()=>h,QW:()=>x,vP:()=>b,$j:()=>g,n5:()=>c,C1:()=>T});var t=d(5e3),e=d(6360),f=d(508);const u=["*",[["mat-card-footer"]]],m=["*","mat-card-footer"],i=[[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],[["img"]],"*"],p=["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","img","*"];let h=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275dir=t.lG2({type:a,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),a})(),c=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275dir=t.lG2({type:a,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),a})(),g=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275dir=t.lG2({type:a,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),a})(),b=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275dir=t.lG2({type:a,selectors:[["","mat-card-sm-image",""],["","matCardImageSmall",""]],hostAttrs:[1,"mat-card-sm-image"]}),a})(),D=(()=>{class a{constructor(o){this._animationMode=o}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(e.Qb,8))},a.\u0275cmp=t.Xpm({type:a,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(o,_){2&o&&t.ekj("_mat-animation-noopable","NoopAnimations"===_._animationMode)},exportAs:["matCard"],ngContentSelectors:m,decls:2,vars:0,template:function(o,_){1&o&&(t.F$t(u),t.Hsn(0),t.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),a})(),T=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["mat-card-title-group"]],hostAttrs:[1,"mat-card-title-group"],ngContentSelectors:p,decls:4,vars:0,template:function(o,_){1&o&&(t.F$t(i),t.TgZ(0,"div"),t.Hsn(1),t.qZA(),t.Hsn(2,1),t.Hsn(3,2))},encapsulation:2,changeDetection:0}),a})(),x=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[f.BQ],f.BQ]}),a})()},2841:(v,M,d)=>{d.d(M,{CO:()=>p,KZ:()=>h});var t=d(5e3),e=d(9808),f=d(5787),u=d(3075);const m=function(c,g){return{"p-button-icon":!0,"p-button-icon-left":c,"p-button-icon-right":g}};function C(c,g){if(1&c&&t._UZ(0,"span",3),2&c){const r=t.oxw();t.Tol(r.checked?r.onIcon:r.offIcon),t.Q6J("ngClass",t.WLB(3,m,"left"===r.iconPos,"right"===r.iconPos))}}const l=function(c,g,r){return{"p-button p-togglebutton p-component":!0,"p-button-icon-only":c,"p-highlight":g,"p-disabled":r}},i={provide:u.JU,useExisting:(0,t.Gpc)(()=>p),multi:!0};let p=(()=>{class c{constructor(r){this.cd=r,this.iconPos="left",this.onChange=new t.vpe,this.checked=!1,this.onModelChange=()=>{},this.onModelTouched=()=>{}}toggle(r){this.disabled||(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:r,checked:this.checked}),this.cd.markForCheck())}onBlur(){this.onModelTouched()}writeValue(r){this.checked=r,this.cd.markForCheck()}registerOnChange(r){this.onModelChange=r}registerOnTouched(r){this.onModelTouched=r}setDisabledState(r){this.disabled=r,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}}return c.\u0275fac=function(r){return new(r||c)(t.Y36(t.sBO))},c.\u0275cmp=t.Xpm({type:c,selectors:[["p-toggleButton"]],hostAttrs:[1,"p-element"],inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabelledBy:"ariaLabelledBy",disabled:"disabled",style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:"tabindex",iconPos:"iconPos"},outputs:{onChange:"onChange"},features:[t._Bn([i])],decls:4,vars:12,consts:[["role","checkbox","pRipple","",3,"ngClass","ngStyle","click","keydown.enter"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"ngClass"]],template:function(r,s){1&r&&(t.TgZ(0,"div",0),t.NdJ("click",function(b){return s.toggle(b)})("keydown.enter",function(b){return s.toggle(b)}),t.YNc(1,C,1,6,"span",1),t.TgZ(2,"span",2),t._uU(3),t.qZA(),t.qZA()),2&r&&(t.Tol(s.styleClass),t.Q6J("ngClass",t.kEZ(8,l,s.onIcon&&s.offIcon&&!s.hasOnLabel&&!s.hasOffLabel,s.checked,s.disabled))("ngStyle",s.style),t.uIk("tabindex",s.disabled?null:"0")("aria-checked",s.checked),t.xp6(1),t.Q6J("ngIf",s.onIcon||s.offIcon),t.xp6(2),t.Oqu(s.checked?s.hasOnLabel?s.onLabel:"":s.hasOffLabel?s.offLabel:""))},directives:[f.H,e.mk,e.PC,e.O5],styles:[".p-button[_ngcontent-%COMP%]{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label[_ngcontent-%COMP%]{flex:1 1 auto}.p-button-icon-right[_ngcontent-%COMP%]{order:1}.p-button[_ngcontent-%COMP%]:disabled{cursor:default}.p-button-icon-only[_ngcontent-%COMP%]{justify-content:center}.p-button-icon-only[_ngcontent-%COMP%]   .p-button-label[_ngcontent-%COMP%]{visibility:hidden;width:0;flex:0 0 auto}.p-button-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-button-icon-bottom[_ngcontent-%COMP%]{order:2}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{margin:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child){border-right:0 none}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus{position:relative;z-index:1}.p-button-label[_ngcontent-%COMP%]{transition:all .2s}"],changeDetection:0}),c})(),h=(()=>{class c{}return c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[[e.ez,f.T]]}),c})()}}]);