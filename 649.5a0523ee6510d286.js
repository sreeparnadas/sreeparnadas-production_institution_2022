"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[649],{7649:(H,L,d)=>{d.d(L,{a:()=>C});var p=d(5412),s=d(4650),D=d(6895);function f(i,m){if(1&i&&(s.TgZ(0,"tr")(1,"td"),s._uU(2),s.qZA(),s.TgZ(3,"td"),s._uU(4),s.ALo(5,"date"),s.qZA(),s.TgZ(6,"td"),s._uU(7),s.qZA(),s.TgZ(8,"td"),s._uU(9),s.qZA()()),2&i){const h=m.$implicit;s.xp6(2),s.Oqu(h.ledger_name),s.xp6(2),s.Oqu(s.xi3(5,4,h.transaction_date,"dd/MM/yyyy")),s.xp6(3),s.Oqu(h.amount),s.xp6(2),s.Oqu(h.comment)}}let C=(()=>{class i{constructor(h){this.data=h}ngOnInit(){}}return i.\u0275fac=function(h){return new(h||i)(s.Y36(p.WI))},i.\u0275cmp=s.Xpm({type:i,selectors:[["app-last-transaction-popup"]],decls:18,vars:1,consts:[["mat-dialog-title",""],[1,"card",2,"background-color","rgb(254, 248, 248) !important"],["mat-dialog-content",""],[1,"table","table-hover"],[4,"ngFor","ngForOf"],["mat-button","","mat-dialog-close",""]],template:function(h,A){1&h&&(s.TgZ(0,"h2",0),s._uU(1,"Last Transaction Details"),s.qZA(),s.TgZ(2,"div",1)(3,"div",2)(4,"table",3)(5,"tr")(6,"th"),s._uU(7,"Student Name"),s.qZA(),s.TgZ(8,"th"),s._uU(9,"Transaction Date"),s.qZA(),s.TgZ(10,"th"),s._uU(11,"Paid Amount"),s.qZA(),s.TgZ(12,"th"),s._uU(13,"comment"),s.qZA()(),s.YNc(14,f,10,7,"tr",4),s.qZA()()(),s.TgZ(15,"mat-dialog-actions")(16,"button",5),s._uU(17,"Close"),s.qZA()()),2&h&&(s.xp6(14),s.Q6J("ngForOf",A.data))},dependencies:[D.sg,p.ZT,p.uh,p.xY,p.H8,D.uU]}),i})()},5412:(H,L,d)=>{d.d(L,{WI:()=>G,uw:()=>M,H8:()=>ut,ZT:()=>ct,xY:()=>ht,Is:()=>gt,uh:()=>dt});var p=d(2693),s=d(8184),D=d(3353),f=d(4080),C=d(6895),i=d(4650),m=d(9521),h=d(7579),A=d(9770),z=d(9646),E=d(445),I=d(8675);function U(a,n){}class b{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0}}let B=(()=>{class a extends f.en{constructor(t,e,o,l,c,r,g,_){super(),this._elementRef=t,this._focusTrapFactory=e,this._config=l,this._interactivityChecker=c,this._ngZone=r,this._overlayRef=g,this._focusMonitor=_,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=y=>{this._portalOutlet.hasAttached();const Z=this._portalOutlet.attachDomPortal(y);return this._contentAttached(),Z},this._ariaLabelledBy=this._config.ariaLabelledBy||null,this._document=o}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();const e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();const e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const o=()=>{t.removeEventListener("blur",o),t.removeEventListener("mousedown",o),t.removeAttribute("tabindex")};t.addEventListener("blur",o),t.addEventListener("mousedown",o)})),t.focus(e)}_focusByCssSelector(t,e){let o=this._elementRef.nativeElement.querySelector(t);o&&this._forceFocus(o,e)}_trapFocus(){const t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(e=>{e||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const t=this._config.restoreFocus;let e=null;if("string"==typeof t?e=this._document.querySelector(t):"boolean"==typeof t?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&"function"==typeof e.focus){const o=(0,D.ht)(),l=this._elementRef.nativeElement;(!o||o===this._document.body||o===l||l.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const t=this._elementRef.nativeElement,e=(0,D.ht)();return t===e||t.contains(e)}_initializeFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,D.ht)())}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}}return a.\u0275fac=function(t){return new(t||a)(i.Y36(i.SBq),i.Y36(p.qV),i.Y36(C.K0,8),i.Y36(b),i.Y36(p.ic),i.Y36(i.R0b),i.Y36(s.Iu),i.Y36(p.tE))},a.\u0275cmp=i.Xpm({type:a,selectors:[["cdk-dialog-container"]],viewQuery:function(t,e){if(1&t&&i.Gf(f.Pl,7),2&t){let o;i.iGM(o=i.CRH())&&(e._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,e){2&t&&i.uIk("id",e._config.id||null)("role",e._config.role)("aria-modal",e._config.ariaModal)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null)},features:[i.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,e){1&t&&i.YNc(0,U,0,0,"ng-template",0)},dependencies:[f.Pl],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2}),a})();class F{constructor(n,t){this.overlayRef=n,this.config=t,this.closed=new h.x,this.disableClose=t.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===m.hY&&!this.disableClose&&!(0,m.Vb)(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})})}close(n,t){if(this.containerInstance){const e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this.overlayRef.dispose(),e.next(n),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",t=""){return this.overlayRef.updateSize({width:n,height:t}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}}const S=new i.OlP("DialogScrollStrategy"),W=new i.OlP("DialogData"),N=new i.OlP("DefaultDialogConfig"),X={provide:S,deps:[s.aV],useFactory:function q(a){return()=>a.scrollStrategies.block()}};let $=0,w=(()=>{class a{constructor(t,e,o,l,c,r){this._overlay=t,this._injector=e,this._defaultOptions=o,this._parentDialog=l,this._overlayContainer=c,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new h.x,this._afterOpenedAtThisLevel=new h.x,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,A.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,I.O)(void 0))),this._scrollStrategy=r}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}open(t,e){(e={...this._defaultOptions||new b,...e}).id=e.id||"cdk-dialog-"+$++,e.id&&this.getDialogById(e.id);const l=this._getOverlayConfig(e),c=this._overlay.create(l),r=new F(c,e),g=this._attachContainer(c,r,e);return r.containerInstance=g,this._attachDialogContent(t,r,g,e),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(r),r.closed.subscribe(()=>this._removeOpenDialog(r,!0)),this.afterOpened.next(r),r}closeAll(){R(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){R(this._openDialogsAtThisLevel,t=>{!1===t.config.closeOnDestroy&&this._removeOpenDialog(t,!1)}),R(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){const e=new s.X_({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,o){const l=o.injector||o.viewContainerRef?.injector,c=[{provide:b,useValue:o},{provide:F,useValue:e},{provide:s.Iu,useValue:t}];let r;o.container?"function"==typeof o.container?r=o.container:(r=o.container.type,c.push(...o.container.providers(o))):r=B;const g=new f.C5(r,o.viewContainerRef,i.zs3.create({parent:l||this._injector,providers:c}),o.componentFactoryResolver);return t.attach(g).instance}_attachDialogContent(t,e,o,l){if(t instanceof i.Rgc){const c=this._createInjector(l,e,o,void 0);let r={$implicit:l.data,dialogRef:e};l.templateContext&&(r={...r,..."function"==typeof l.templateContext?l.templateContext():l.templateContext}),o.attachTemplatePortal(new f.UE(t,null,r,c))}else{const c=this._createInjector(l,e,o,this._injector),r=o.attachComponentPortal(new f.C5(t,l.viewContainerRef,c,l.componentFactoryResolver));e.componentInstance=r.instance}}_createInjector(t,e,o,l){const c=t.injector||t.viewContainerRef?.injector,r=[{provide:W,useValue:t.data},{provide:F,useValue:e}];return t.providers&&("function"==typeof t.providers?r.push(...t.providers(e,t,o)):r.push(...t.providers)),t.direction&&(!c||!c.get(E.Is,null,i.XFs.Optional))&&r.push({provide:E.Is,useValue:{value:t.direction,change:(0,z.of)()}}),i.zs3.create({parent:c||l,providers:r})}_removeOpenDialog(t,e){const o=this.openDialogs.indexOf(t);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((l,c)=>{l?c.setAttribute("aria-hidden",l):c.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const e=t.parentElement.children;for(let o=e.length-1;o>-1;o--){const l=e[o];l!==t&&"SCRIPT"!==l.nodeName&&"STYLE"!==l.nodeName&&!l.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(l,l.getAttribute("aria-hidden")),l.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}}return a.\u0275fac=function(t){return new(t||a)(i.LFG(s.aV),i.LFG(i.zs3),i.LFG(N,8),i.LFG(a,12),i.LFG(s.Xj),i.LFG(S))},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac}),a})();function R(a,n){let t=a.length;for(;t--;)n(a[t])}let K=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({providers:[w,X],imports:[s.U8,f.eL,p.rt,f.eL]}),a})();var P=d(3238),Q=d(6451),T=d(9300),x=d(5698),u=d(7340);function J(a,n){}const v={params:{enterAnimationDuration:"150ms",exitAnimationDuration:"75ms"}},tt={dialogContainer:(0,u.X$)("dialogContainer",[(0,u.SB)("void, exit",(0,u.oB)({opacity:0,transform:"scale(0.7)"})),(0,u.SB)("enter",(0,u.oB)({transform:"none"})),(0,u.eR)("* => enter",(0,u.ru)([(0,u.jt)("{{enterAnimationDuration}} cubic-bezier(0, 0, 0.2, 1)",(0,u.oB)({transform:"none",opacity:1})),(0,u.IO)("@*",(0,u.pV)(),{optional:!0})]),v),(0,u.eR)("* => void, * => exit",(0,u.ru)([(0,u.jt)("{{exitAnimationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)",(0,u.oB)({opacity:0})),(0,u.IO)("@*",(0,u.pV)(),{optional:!0})]),v)])};class O{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0,this.enterAnimationDuration=v.params.enterAnimationDuration,this.exitAnimationDuration=v.params.exitAnimationDuration}}let et=(()=>{class a extends B{constructor(t,e,o,l,c,r,g,_){super(t,e,o,l,c,r,g,_),this._animationStateChanged=new i.vpe}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}}return a.\u0275fac=function(t){return new(t||a)(i.Y36(i.SBq),i.Y36(p.qV),i.Y36(C.K0,8),i.Y36(O),i.Y36(p.ic),i.Y36(i.R0b),i.Y36(s.Iu),i.Y36(p.tE))},a.\u0275cmp=i.Xpm({type:a,selectors:[["ng-component"]],features:[i.qOj],decls:0,vars:0,template:function(t,e){},encapsulation:2}),a})(),it=(()=>{class a extends et{constructor(t,e,o,l,c,r,g,_,y){super(t,e,o,l,c,r,g,y),this._changeDetectorRef=_,this._state="enter"}_onAnimationDone({toState:t,totalTime:e}){"enter"===t?this._openAnimationDone(e):"exit"===t&&this._animationStateChanged.next({state:"closed",totalTime:e})}_onAnimationStart({toState:t,totalTime:e}){"enter"===t?this._animationStateChanged.next({state:"opening",totalTime:e}):("exit"===t||"void"===t)&&this._animationStateChanged.next({state:"closing",totalTime:e})}_startExitAnimation(){this._state="exit",this._changeDetectorRef.markForCheck()}_getAnimationState(){return{value:this._state,params:{enterAnimationDuration:this._config.enterAnimationDuration||v.params.enterAnimationDuration,exitAnimationDuration:this._config.exitAnimationDuration||v.params.exitAnimationDuration}}}}return a.\u0275fac=function(t){return new(t||a)(i.Y36(i.SBq),i.Y36(p.qV),i.Y36(C.K0,8),i.Y36(O),i.Y36(p.ic),i.Y36(i.R0b),i.Y36(s.Iu),i.Y36(i.sBO),i.Y36(p.tE))},a.\u0275cmp=i.Xpm({type:a,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-dialog-container"],hostVars:7,hostBindings:function(t,e){1&t&&i.WFA("@dialogContainer.start",function(l){return e._onAnimationStart(l)})("@dialogContainer.done",function(l){return e._onAnimationDone(l)}),2&t&&(i.Ikx("id",e._config.id),i.uIk("aria-modal",e._config.ariaModal)("role",e._config.role)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null),i.d8E("@dialogContainer",e._getAnimationState()))},features:[i.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,e){1&t&&i.YNc(0,J,0,0,"ng-template",0)},dependencies:[f.Pl],styles:[".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions.mat-dialog-actions-align-center,.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions.mat-dialog-actions-align-end,.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],encapsulation:2,data:{animation:[tt.dialogContainer]}}),a})();class k{constructor(n,t,e){this._ref=n,this._containerInstance=e,this._afterOpened=new h.x,this._beforeClosed=new h.x,this._state=0,this.disableClose=t.disableClose,this.id=n.id,e._animationStateChanged.pipe((0,T.h)(o=>"opened"===o.state),(0,x.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe((0,T.h)(o=>"closed"===o.state),(0,x.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),(0,Q.T)(this.backdropClick(),this.keydownEvents().pipe((0,T.h)(o=>o.keyCode===m.hY&&!this.disableClose&&!(0,m.Vb)(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),Y(this,"keydown"===o.type?"keyboard":"mouse"))})}close(n){this._result=n,this._containerInstance._animationStateChanged.pipe((0,T.h)(t=>"closing"===t.state),(0,x.q)(1)).subscribe(t=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=1,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let t=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?t.left(n.left):t.right(n.right):t.centerHorizontally(),n&&(n.top||n.bottom)?n.top?t.top(n.top):t.bottom(n.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",t=""){return this._ref.updateSize(n,t),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=2,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}}function Y(a,n,t){return a._closeInteractionType=n,a.close(t)}const G=new i.OlP("MatDialogData"),at=new i.OlP("mat-dialog-default-options"),V=new i.OlP("mat-dialog-scroll-strategy"),nt={provide:V,deps:[s.aV],useFactory:function ot(a){return()=>a.scrollStrategies.block()}};let st=0,lt=(()=>{class a{constructor(t,e,o,l,c,r,g,_,y,Z){this._overlay=t,this._defaultOptions=o,this._parentDialog=l,this._dialogRefConstructor=g,this._dialogContainerType=_,this._dialogDataToken=y,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new h.x,this._afterOpenedAtThisLevel=new h.x,this._idPrefix="mat-dialog-",this.afterAllClosed=(0,A.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,I.O)(void 0))),this._scrollStrategy=r,this._dialog=e.get(w)}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}open(t,e){let o;(e={...this._defaultOptions||new O,...e}).id=e.id||`${this._idPrefix}${st++}`,e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();const l=this._dialog.open(t,{...e,positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:O,useValue:e},{provide:b,useValue:e}]},templateContext:()=>({dialogRef:o}),providers:(c,r,g)=>(o=new this._dialogRefConstructor(c,e,g),o.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:g},{provide:this._dialogDataToken,useValue:r.data},{provide:this._dialogRefConstructor,useValue:o}])});return o.componentInstance=l.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{const c=this.openDialogs.indexOf(o);c>-1&&(this.openDialogs.splice(c,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}}return a.\u0275fac=function(t){i.$Z()},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac}),a})(),M=(()=>{class a extends lt{constructor(t,e,o,l,c,r,g,_){super(t,e,l,r,g,c,k,it,G,_)}}return a.\u0275fac=function(t){return new(t||a)(i.LFG(s.aV),i.LFG(i.zs3),i.LFG(C.Ye,8),i.LFG(at,8),i.LFG(V),i.LFG(a,12),i.LFG(s.Xj),i.LFG(i.QbO,8))},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac}),a})(),rt=0,ct=(()=>{class a{constructor(t,e,o){this.dialogRef=t,this._elementRef=e,this._dialog=o,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=j(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){const e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){Y(this.dialogRef,0===t.screenX&&0===t.screenY?"keyboard":"mouse",this.dialogResult)}}return a.\u0275fac=function(t){return new(t||a)(i.Y36(k,8),i.Y36(i.SBq),i.Y36(M))},a.\u0275dir=i.lG2({type:a,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,e){1&t&&i.NdJ("click",function(l){return e._onButtonClick(l)}),2&t&&i.uIk("aria-label",e.ariaLabel||null)("type",e.type)},inputs:{ariaLabel:["aria-label","ariaLabel"],type:"type",dialogResult:["mat-dialog-close","dialogResult"],_matDialogClose:["matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[i.TTD]}),a})(),dt=(()=>{class a{constructor(t,e,o){this._dialogRef=t,this._elementRef=e,this._dialog=o,this.id="mat-dialog-title-"+rt++}ngOnInit(){this._dialogRef||(this._dialogRef=j(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{const t=this._dialogRef._containerInstance;t&&!t._ariaLabelledBy&&(t._ariaLabelledBy=this.id)})}}return a.\u0275fac=function(t){return new(t||a)(i.Y36(k,8),i.Y36(i.SBq),i.Y36(M))},a.\u0275dir=i.lG2({type:a,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-dialog-title"],hostVars:1,hostBindings:function(t,e){2&t&&i.Ikx("id",e.id)},inputs:{id:"id"},exportAs:["matDialogTitle"]}),a})(),ht=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275dir=i.lG2({type:a,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-dialog-content"]}),a})(),ut=(()=>{class a{constructor(){this.align="start"}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275dir=i.lG2({type:a,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-dialog-actions"],hostVars:4,hostBindings:function(t,e){2&t&&i.ekj("mat-dialog-actions-align-center","center"===e.align)("mat-dialog-actions-align-end","end"===e.align)},inputs:{align:"align"}}),a})();function j(a,n){let t=a.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-dialog-container");)t=t.parentElement;return t?n.find(e=>e.id===t.id):null}let gt=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({providers:[M,nt],imports:[K,s.U8,f.eL,P.BQ,P.BQ]}),a})()}}]);