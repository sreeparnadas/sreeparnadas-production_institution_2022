"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[3848],{3848:(Et,W,r)=>{r.d(W,{Nh:()=>Lt,SP:()=>Bt,uD:()=>pt,uX:()=>O});var x=r(2693),k=r(9643),u=r(4080),m=r(6895),e=r(4650),_=r(3238),R=r(5698),M=r(8675),Y=r(1884),p=r(2722),Q=r(3900),K=r(5684),v=r(7579),f=r(727),y=r(4968),U=r(9646),C=r(6451),Z=r(515),z=r(9751),$=r(5963),g=r(445),b=r(7340),h=r(1281),I=r(251),T=r(3353),P=r(9521);function V(n,o){1&n&&e.Hsn(0)}const B=["*"];function J(n,o){}const q=function(n){return{animationDuration:n}},X=function(n,o){return{value:n,params:o}},tt=["tabListContainer"],et=["tabList"],at=["tabListInner"],it=["nextPaginator"],nt=["previousPaginator"],st=["tabBodyWrapper"],ot=["tabHeader"];function rt(n,o){}function lt(n,o){if(1&n&&e.YNc(0,rt,0,0,"ng-template",10),2&n){const t=e.oxw().$implicit;e.Q6J("cdkPortalOutlet",t.templateLabel)}}function dt(n,o){if(1&n&&e._uU(0),2&n){const t=e.oxw().$implicit;e.Oqu(t.textLabel)}}function ct(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",6),e.NdJ("click",function(){const i=e.CHM(t),s=i.$implicit,l=i.index,d=e.oxw(),c=e.MAs(1);return e.KtG(d._handleClick(s,c,l))})("cdkFocusChange",function(i){const l=e.CHM(t).index,d=e.oxw();return e.KtG(d._tabFocusChanged(i,l))}),e.TgZ(1,"div",7),e.YNc(2,lt,1,1,"ng-template",8),e.YNc(3,dt,1,1,"ng-template",null,9,e.W1O),e.qZA()()}if(2&n){const t=o.$implicit,a=o.index,i=e.MAs(4),s=e.oxw();e.ekj("mat-tab-label-active",s.selectedIndex===a),e.Q6J("id",s._getTabLabelId(a))("ngClass",t.labelClass)("disabled",t.disabled)("matRippleDisabled",t.disabled||s.disableRipple),e.uIk("tabIndex",s._getTabIndex(t,a))("aria-posinset",a+1)("aria-setsize",s._tabs.length)("aria-controls",s._getTabContentId(a))("aria-selected",s.selectedIndex===a)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),e.xp6(2),e.Q6J("ngIf",t.templateLabel)("ngIfElse",i)}}function bt(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"mat-tab-body",11),e.NdJ("_onCentered",function(){e.CHM(t);const i=e.oxw();return e.KtG(i._removeTabBodyWrapperHeight())})("_onCentering",function(i){e.CHM(t);const s=e.oxw();return e.KtG(s._setTabBodyWrapperHeight(i))}),e.qZA()}if(2&n){const t=o.$implicit,a=o.index,i=e.oxw();e.ekj("mat-tab-body-active",i.selectedIndex===a),e.Q6J("id",i._getTabContentId(a))("ngClass",t.bodyClass)("content",t.content)("position",t.position)("origin",t.origin)("animationDuration",i.animationDuration)("preserveContent",i.preserveContent),e.uIk("tabindex",null!=i.contentTabIndex&&i.selectedIndex===a?i.contentTabIndex:null)("aria-labelledby",i._getTabLabelId(a))}}const _t=new e.OlP("MatInkBarPositioner",{providedIn:"root",factory:function ht(){return o=>({left:o?(o.offsetLeft||0)+"px":"0",width:o?(o.offsetWidth||0)+"px":"0"})}});let L=(()=>{class n{constructor(t,a,i,s){this._elementRef=t,this._ngZone=a,this._inkBarPositioner=i,this._animationMode=s}alignToElement(t){this.show(),this._ngZone.run(()=>{this._ngZone.onStable.pipe((0,R.q)(1)).subscribe(()=>{const a=this._inkBarPositioner(t),i=this._elementRef.nativeElement;i.style.left=a.left,i.style.width=a.width})})}show(){this._elementRef.nativeElement.style.visibility="visible"}hide(){this._elementRef.nativeElement.style.visibility="hidden"}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(_t),e.Y36(e.QbO,8))},n.\u0275dir=e.lG2({type:n,selectors:[["mat-ink-bar"]],hostAttrs:[1,"mat-ink-bar"],hostVars:2,hostBindings:function(t,a){2&t&&e.ekj("_mat-animation-noopable","NoopAnimations"===a._animationMode)}}),n})();const ut=new e.OlP("MatTabContent"),E=new e.OlP("MatTabLabel"),w=new e.OlP("MAT_TAB");let pt=(()=>{class n extends u.ig{constructor(t,a,i){super(t,a),this._closestTab=i}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.Rgc),e.Y36(e.s_b),e.Y36(w,8))},n.\u0275dir=e.lG2({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[e._Bn([{provide:E,useExisting:n}]),e.qOj]}),n})();const mt=(0,_.Id)(class{}),A=new e.OlP("MAT_TAB_GROUP");let O=(()=>{class n extends mt{constructor(t,a){super(),this._viewContainerRef=t,this._closestTabGroup=a,this.textLabel="",this._contentPortal=null,this._stateChanges=new v.x,this.position=null,this.origin=null,this.isActive=!1}get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}get content(){return this._contentPortal}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new u.UE(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.s_b),e.Y36(A,8))},n.\u0275cmp=e.Xpm({type:n,selectors:[["mat-tab"]],contentQueries:function(t,a,i){if(1&t&&(e.Suo(i,E,5),e.Suo(i,ut,7,e.Rgc)),2&t){let s;e.iGM(s=e.CRH())&&(a.templateLabel=s.first),e.iGM(s=e.CRH())&&(a._explicitContent=s.first)}},viewQuery:function(t,a){if(1&t&&e.Gf(e.Rgc,7),2&t){let i;e.iGM(i=e.CRH())&&(a._implicitContent=i.first)}},inputs:{disabled:"disabled",textLabel:["label","textLabel"],ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass"},exportAs:["matTab"],features:[e._Bn([{provide:w,useExisting:n}]),e.qOj,e.TTD],ngContentSelectors:B,decls:1,vars:0,template:function(t,a){1&t&&(e.F$t(),e.YNc(0,V,1,0,"ng-template"))},encapsulation:2}),n})();const ft={translateTab:(0,b.X$)("translateTab",[(0,b.SB)("center, void, left-origin-center, right-origin-center",(0,b.oB)({transform:"none"})),(0,b.SB)("left",(0,b.oB)({transform:"translate3d(-100%, 0, 0)",minHeight:"1px",visibility:"hidden"})),(0,b.SB)("right",(0,b.oB)({transform:"translate3d(100%, 0, 0)",minHeight:"1px",visibility:"hidden"})),(0,b.eR)("* => left, * => right, left => center, right => center",(0,b.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")),(0,b.eR)("void => left-origin-center",[(0,b.oB)({transform:"translate3d(-100%, 0, 0)",visibility:"hidden"}),(0,b.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")]),(0,b.eR)("void => right-origin-center",[(0,b.oB)({transform:"translate3d(100%, 0, 0)",visibility:"hidden"}),(0,b.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")])])};let gt=(()=>{class n extends u.Pl{constructor(t,a,i,s){super(t,a,s),this._host=i,this._centeringSub=f.w0.EMPTY,this._leavingSub=f.w0.EMPTY}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe((0,M.O)(this._host._isCenterPosition(this._host._position))).subscribe(t=>{t&&!this.hasAttached()&&this.attach(this._host._content)}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this.detach()})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e._Vd),e.Y36(e.s_b),e.Y36((0,e.Gpc)(()=>S)),e.Y36(m.K0))},n.\u0275dir=e.lG2({type:n,selectors:[["","matTabBodyHost",""]],features:[e.qOj]}),n})(),vt=(()=>{class n{constructor(t,a,i){this._elementRef=t,this._dir=a,this._dirChangeSubscription=f.w0.EMPTY,this._translateTabComplete=new v.x,this._onCentering=new e.vpe,this._beforeCentering=new e.vpe,this._afterLeavingCenter=new e.vpe,this._onCentered=new e.vpe(!0),this.animationDuration="500ms",this.preserveContent=!1,a&&(this._dirChangeSubscription=a.change.subscribe(s=>{this._computePositionAnimationState(s),i.markForCheck()})),this._translateTabComplete.pipe((0,Y.x)((s,l)=>s.fromState===l.fromState&&s.toState===l.toState)).subscribe(s=>{this._isCenterPosition(s.toState)&&this._isCenterPosition(this._position)&&this._onCentered.emit(),this._isCenterPosition(s.fromState)&&!this._isCenterPosition(this._position)&&this._afterLeavingCenter.emit()})}set position(t){this._positionIndex=t,this._computePositionAnimationState()}ngOnInit(){"center"==this._position&&null!=this.origin&&(this._position=this._computePositionFromOrigin(this.origin))}ngOnDestroy(){this._dirChangeSubscription.unsubscribe(),this._translateTabComplete.complete()}_onTranslateTabStarted(t){const a=this._isCenterPosition(t.toState);this._beforeCentering.emit(a),a&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_isCenterPosition(t){return"center"==t||"left-origin-center"==t||"right-origin-center"==t}_computePositionAnimationState(t=this._getLayoutDirection()){this._position=this._positionIndex<0?"ltr"==t?"left":"right":this._positionIndex>0?"ltr"==t?"right":"left":"center"}_computePositionFromOrigin(t){const a=this._getLayoutDirection();return"ltr"==a&&t<=0||"rtl"==a&&t>0?"left-origin-center":"right-origin-center"}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(g.Is,8),e.Y36(e.sBO))},n.\u0275dir=e.lG2({type:n,inputs:{_content:["content","_content"],origin:"origin",animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_afterLeavingCenter:"_afterLeavingCenter",_onCentered:"_onCentered"}}),n})(),S=(()=>{class n extends vt{constructor(t,a,i){super(t,a,i)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(g.Is,8),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["mat-tab-body"]],viewQuery:function(t,a){if(1&t&&e.Gf(u.Pl,5),2&t){let i;e.iGM(i=e.CRH())&&(a._portalHost=i.first)}},hostAttrs:[1,"mat-tab-body"],features:[e.qOj],decls:3,vars:6,consts:[["cdkScrollable","",1,"mat-tab-body-content"],["content",""],["matTabBodyHost",""]],template:function(t,a){1&t&&(e.TgZ(0,"div",0,1),e.NdJ("@translateTab.start",function(s){return a._onTranslateTabStarted(s)})("@translateTab.done",function(s){return a._translateTabComplete.next(s)}),e.YNc(2,J,0,0,"ng-template",2),e.qZA()),2&t&&e.Q6J("@translateTab",e.WLB(3,X,a._position,e.VKq(1,q,a.animationDuration)))},dependencies:[gt],styles:['.mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}.mat-tab-body-content[style*="visibility: hidden"]{display:none}'],encapsulation:2,data:{animation:[ft.translateTab]}}),n})();const N=new e.OlP("MAT_TABS_CONFIG"),Tt=(0,_.Id)(class{});let H=(()=>{class n extends Tt{constructor(t){super(),this.elementRef=t}focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq))},n.\u0275dir=e.lG2({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,a){2&t&&(e.uIk("aria-disabled",!!a.disabled),e.ekj("mat-tab-disabled",a.disabled))},inputs:{disabled:"disabled"},features:[e.qOj]}),n})();const j=(0,T.i$)({passive:!0});let yt=(()=>{class n{constructor(t,a,i,s,l,d,c){this._elementRef=t,this._changeDetectorRef=a,this._viewportRuler=i,this._dir=s,this._ngZone=l,this._platform=d,this._animationMode=c,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new v.x,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new v.x,this._disablePagination=!1,this._selectedIndex=0,this.selectFocusedIndex=new e.vpe,this.indexFocused=new e.vpe,l.runOutsideAngular(()=>{(0,y.R)(t.nativeElement,"mouseleave").pipe((0,p.R)(this._destroyed)).subscribe(()=>{this._stopInterval()})})}get disablePagination(){return this._disablePagination}set disablePagination(t){this._disablePagination=(0,h.Ig)(t)}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){t=(0,h.su)(t),this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}ngAfterViewInit(){(0,y.R)(this._previousPaginator.nativeElement,"touchstart",j).pipe((0,p.R)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),(0,y.R)(this._nextPaginator.nativeElement,"touchstart",j).pipe((0,p.R)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){const t=this._dir?this._dir.change:(0,U.of)("ltr"),a=this._viewportRuler.change(150),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new x.Em(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap(),this._keyManager.updateActiveItem(this._selectedIndex),this._ngZone.onStable.pipe((0,R.q)(1)).subscribe(i),(0,C.T)(t,a,this._items.changes,this._itemsResized()).pipe((0,p.R)(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.pipe((0,p.R)(this._destroyed)).subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}_itemsResized(){return"function"!=typeof ResizeObserver?Z.E:this._items.changes.pipe((0,M.O)(this._items),(0,Q.w)(t=>new z.y(a=>this._ngZone.runOutsideAngular(()=>{const i=new ResizeObserver(()=>{a.next()});return t.forEach(s=>{i.observe(s.elementRef.nativeElement)}),()=>{i.disconnect()}}))),(0,K.T)(1))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!(0,P.Vb)(t))switch(t.keyCode){case P.K5:case P.L_:this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t));break;default:this._keyManager.onKeydown(t)}}_onContentChanges(){const t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){if(!this._items)return!0;const a=this._items?this._items.toArray()[t]:null;return!!a&&!a.disabled}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();const a=this._tabListContainer.nativeElement;a.scrollLeft="ltr"==this._getLayoutDirection()?0:a.scrollWidth-a.offsetWidth}}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;const t=this.scrollDistance,a="ltr"===this._getLayoutDirection()?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(a)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){return this._scrollTo(this._scrollDistance+("before"==t?-1:1)*this._tabListContainer.nativeElement.offsetWidth/3)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;const a=this._items?this._items.toArray()[t]:null;if(!a)return;const i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:s,offsetWidth:l}=a.elementRef.nativeElement;let d,c;"ltr"==this._getLayoutDirection()?(d=s,c=d+l):(c=this._tabListInner.nativeElement.offsetWidth-s,d=c-l);const D=this.scrollDistance,G=this.scrollDistance+i;d<D?this.scrollDistance-=D-d+60:c>G&&(this.scrollDistance+=c-G+60)}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{const t=this._tabListInner.nativeElement.scrollWidth>this._elementRef.nativeElement.offsetWidth;t||(this.scrollDistance=0),t!==this._showPaginationControls&&this._changeDetectorRef.markForCheck(),this._showPaginationControls=t}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=0==this.scrollDistance,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){const t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,a=t?t.elementRef.nativeElement:null;a?this._inkBar.alignToElement(a):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,a){a&&null!=a.button&&0!==a.button||(this._stopInterval(),(0,$.H)(650,100).pipe((0,p.R)((0,C.T)(this._stopScrolling,this._destroyed))).subscribe(()=>{const{maxScrollDistance:i,distance:s}=this._scrollHeader(t);(0===s||s>=i)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};const a=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(a,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:a,distance:this._scrollDistance}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(I.rL),e.Y36(g.Is,8),e.Y36(e.R0b),e.Y36(T.t4),e.Y36(e.QbO,8))},n.\u0275dir=e.lG2({type:n,inputs:{disablePagination:"disablePagination"}}),n})(),Ct=(()=>{class n extends yt{constructor(t,a,i,s,l,d,c){super(t,a,i,s,l,d,c),this._disableRipple=!1}get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=(0,h.Ig)(t)}_itemSelected(t){t.preventDefault()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(I.rL),e.Y36(g.Is,8),e.Y36(e.R0b),e.Y36(T.t4),e.Y36(e.QbO,8))},n.\u0275dir=e.lG2({type:n,inputs:{disableRipple:"disableRipple"},features:[e.qOj]}),n})(),It=(()=>{class n extends Ct{constructor(t,a,i,s,l,d,c){super(t,a,i,s,l,d,c)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(I.rL),e.Y36(g.Is,8),e.Y36(e.R0b),e.Y36(T.t4),e.Y36(e.QbO,8))},n.\u0275cmp=e.Xpm({type:n,selectors:[["mat-tab-header"]],contentQueries:function(t,a,i){if(1&t&&e.Suo(i,H,4),2&t){let s;e.iGM(s=e.CRH())&&(a._items=s)}},viewQuery:function(t,a){if(1&t&&(e.Gf(L,7),e.Gf(tt,7),e.Gf(et,7),e.Gf(at,7),e.Gf(it,5),e.Gf(nt,5)),2&t){let i;e.iGM(i=e.CRH())&&(a._inkBar=i.first),e.iGM(i=e.CRH())&&(a._tabListContainer=i.first),e.iGM(i=e.CRH())&&(a._tabList=i.first),e.iGM(i=e.CRH())&&(a._tabListInner=i.first),e.iGM(i=e.CRH())&&(a._nextPaginator=i.first),e.iGM(i=e.CRH())&&(a._previousPaginator=i.first)}},hostAttrs:[1,"mat-tab-header"],hostVars:4,hostBindings:function(t,a){2&t&&e.ekj("mat-tab-header-pagination-controls-enabled",a._showPaginationControls)("mat-tab-header-rtl","rtl"==a._getLayoutDirection())},inputs:{selectedIndex:"selectedIndex"},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"},features:[e.qOj],ngContentSelectors:B,decls:14,vars:10,consts:[["aria-hidden","true","type","button","mat-ripple","","tabindex","-1",1,"mat-tab-header-pagination","mat-tab-header-pagination-before","mat-elevation-z4",3,"matRippleDisabled","disabled","click","mousedown","touchend"],["previousPaginator",""],[1,"mat-tab-header-pagination-chevron"],[1,"mat-tab-label-container",3,"keydown"],["tabListContainer",""],["role","tablist",1,"mat-tab-list",3,"cdkObserveContent"],["tabList",""],[1,"mat-tab-labels"],["tabListInner",""],["aria-hidden","true","type","button","mat-ripple","","tabindex","-1",1,"mat-tab-header-pagination","mat-tab-header-pagination-after","mat-elevation-z4",3,"matRippleDisabled","disabled","mousedown","click","touchend"],["nextPaginator",""]],template:function(t,a){1&t&&(e.F$t(),e.TgZ(0,"button",0,1),e.NdJ("click",function(){return a._handlePaginatorClick("before")})("mousedown",function(s){return a._handlePaginatorPress("before",s)})("touchend",function(){return a._stopInterval()}),e._UZ(2,"div",2),e.qZA(),e.TgZ(3,"div",3,4),e.NdJ("keydown",function(s){return a._handleKeydown(s)}),e.TgZ(5,"div",5,6),e.NdJ("cdkObserveContent",function(){return a._onContentChanges()}),e.TgZ(7,"div",7,8),e.Hsn(9),e.qZA(),e._UZ(10,"mat-ink-bar"),e.qZA()(),e.TgZ(11,"button",9,10),e.NdJ("mousedown",function(s){return a._handlePaginatorPress("after",s)})("click",function(){return a._handlePaginatorClick("after")})("touchend",function(){return a._stopInterval()}),e._UZ(13,"div",2),e.qZA()),2&t&&(e.ekj("mat-tab-header-pagination-disabled",a._disableScrollBefore),e.Q6J("matRippleDisabled",a._disableScrollBefore||a.disableRipple)("disabled",a._disableScrollBefore||null),e.xp6(5),e.ekj("_mat-animation-noopable","NoopAnimations"===a._animationMode),e.xp6(6),e.ekj("mat-tab-header-pagination-disabled",a._disableScrollAfter),e.Q6J("matRippleDisabled",a._disableScrollAfter||a.disableRipple)("disabled",a._disableScrollAfter||null))},dependencies:[_.wG,k.wD,L],styles:[".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-tab-header-pagination::-moz-focus-inner{border:0}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar._mat-animation-noopable{transition:none !important;animation:none !important}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-list._mat-animation-noopable{transition:none !important;animation:none !important}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}.mat-tab-label::before{margin:5px}@media(max-width: 599px){.mat-tab-label{min-width:72px}}"],encapsulation:2}),n})(),Pt=0;class Dt{}const kt=(0,_.pj)((0,_.Kr)(class{constructor(n){this._elementRef=n}}),"primary");let Rt=(()=>{class n extends kt{constructor(t,a,i,s){super(t),this._changeDetectorRef=a,this._animationMode=s,this._tabs=new e.n_E,this._indexToSelect=0,this._lastFocusedTabIndex=null,this._tabBodyWrapperHeight=0,this._tabsSubscription=f.w0.EMPTY,this._tabLabelSubscription=f.w0.EMPTY,this._dynamicHeight=!1,this._selectedIndex=null,this.headerPosition="above",this._disablePagination=!1,this._preserveContent=!1,this.selectedIndexChange=new e.vpe,this.focusChange=new e.vpe,this.animationDone=new e.vpe,this.selectedTabChange=new e.vpe(!0),this._groupId=Pt++,this.animationDuration=i&&i.animationDuration?i.animationDuration:"500ms",this.disablePagination=!(!i||null==i.disablePagination)&&i.disablePagination,this.dynamicHeight=!(!i||null==i.dynamicHeight)&&i.dynamicHeight,this.contentTabIndex=i?.contentTabIndex??null,this.preserveContent=!!i?.preserveContent}get dynamicHeight(){return this._dynamicHeight}set dynamicHeight(t){this._dynamicHeight=(0,h.Ig)(t)}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=(0,h.su)(t,null)}get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=/^\d+$/.test(t+"")?t+"ms":t}get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=(0,h.su)(t,null)}get disablePagination(){return this._disablePagination}set disablePagination(t){this._disablePagination=(0,h.Ig)(t)}get preserveContent(){return this._preserveContent}set preserveContent(t){this._preserveContent=(0,h.Ig)(t)}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){const a=this._elementRef.nativeElement;a.classList.remove(`mat-background-${this.backgroundColor}`),t&&a.classList.add(`mat-background-${t}`),this._backgroundColor=t}ngAfterContentChecked(){const t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){const a=null==this._selectedIndex;if(!a){this.selectedTabChange.emit(this._createChangeEvent(t));const i=this._tabBodyWrapper.nativeElement;i.style.minHeight=i.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((i,s)=>i.isActive=s===t),a||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((a,i)=>{a.position=i-t,null!=this._selectedIndex&&0==a.position&&!a.origin&&(a.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{const t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){const a=this._tabs.toArray();let i;for(let s=0;s<a.length;s++)if(a[s].isActive){this._indexToSelect=this._selectedIndex=s,this._lastFocusedTabIndex=null,i=a[s];break}!i&&a[t]&&Promise.resolve().then(()=>{a[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}_subscribeToAllTabChanges(){this._allTabs.changes.pipe((0,M.O)(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(a=>a._closestTabGroup===this||!a._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){const a=this._tabHeader;a&&(a.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){const a=new Dt;return a.index=t,this._tabs&&this._tabs.length&&(a.tab=this._tabs.toArray()[t]),a}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=(0,C.T)(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t){return`mat-tab-label-${this._groupId}-${t}`}_getTabContentId(t){return`mat-tab-content-${this._groupId}-${t}`}_setTabBodyWrapperHeight(t){if(!this._dynamicHeight||!this._tabBodyWrapperHeight)return;const a=this._tabBodyWrapper.nativeElement;a.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(a.style.height=t+"px")}_removeTabBodyWrapperHeight(){const t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this.animationDone.emit()}_handleClick(t,a,i){t.disabled||(this.selectedIndex=a.focusIndex=i)}_getTabIndex(t,a){return t.disabled?null:a===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,a){t&&"mouse"!==t&&"touch"!==t&&(this._tabHeader.focusIndex=a)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(N,8),e.Y36(e.QbO,8))},n.\u0275dir=e.lG2({type:n,inputs:{dynamicHeight:"dynamicHeight",selectedIndex:"selectedIndex",headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:"contentTabIndex",disablePagination:"disablePagination",preserveContent:"preserveContent",backgroundColor:"backgroundColor"},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},features:[e.qOj]}),n})(),Bt=(()=>{class n extends Rt{constructor(t,a,i,s){super(t,a,i,s)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(N,8),e.Y36(e.QbO,8))},n.\u0275cmp=e.Xpm({type:n,selectors:[["mat-tab-group"]],contentQueries:function(t,a,i){if(1&t&&e.Suo(i,O,5),2&t){let s;e.iGM(s=e.CRH())&&(a._allTabs=s)}},viewQuery:function(t,a){if(1&t&&(e.Gf(st,5),e.Gf(ot,5)),2&t){let i;e.iGM(i=e.CRH())&&(a._tabBodyWrapper=i.first),e.iGM(i=e.CRH())&&(a._tabHeader=i.first)}},hostAttrs:[1,"mat-tab-group"],hostVars:4,hostBindings:function(t,a){2&t&&e.ekj("mat-tab-group-dynamic-height",a.dynamicHeight)("mat-tab-group-inverted-header","below"===a.headerPosition)},inputs:{color:"color",disableRipple:"disableRipple"},exportAs:["matTabGroup"],features:[e._Bn([{provide:A,useExisting:n}]),e.qOj],decls:6,vars:7,consts:[[3,"selectedIndex","disableRipple","disablePagination","indexFocused","selectFocusedIndex"],["tabHeader",""],["class","mat-tab-label mat-focus-indicator","role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",3,"id","mat-tab-label-active","ngClass","disabled","matRippleDisabled","click","cdkFocusChange",4,"ngFor","ngForOf"],[1,"mat-tab-body-wrapper"],["tabBodyWrapper",""],["role","tabpanel",3,"id","mat-tab-body-active","ngClass","content","position","origin","animationDuration","preserveContent","_onCentered","_onCentering",4,"ngFor","ngForOf"],["role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",1,"mat-tab-label","mat-focus-indicator",3,"id","ngClass","disabled","matRippleDisabled","click","cdkFocusChange"],[1,"mat-tab-label-content"],[3,"ngIf","ngIfElse"],["tabTextLabel",""],[3,"cdkPortalOutlet"],["role","tabpanel",3,"id","ngClass","content","position","origin","animationDuration","preserveContent","_onCentered","_onCentering"]],template:function(t,a){1&t&&(e.TgZ(0,"mat-tab-header",0,1),e.NdJ("indexFocused",function(s){return a._focusChanged(s)})("selectFocusedIndex",function(s){return a.selectedIndex=s}),e.YNc(2,ct,5,15,"div",2),e.qZA(),e.TgZ(3,"div",3,4),e.YNc(5,bt,1,11,"mat-tab-body",5),e.qZA()),2&t&&(e.Q6J("selectedIndex",a.selectedIndex||0)("disableRipple",a.disableRipple)("disablePagination",a.disablePagination),e.xp6(2),e.Q6J("ngForOf",a._tabs),e.xp6(1),e.ekj("_mat-animation-noopable","NoopAnimations"===a._animationMode),e.xp6(2),e.Q6J("ngForOf",a._tabs))},dependencies:[m.mk,m.sg,m.O5,u.Pl,_.wG,x.kH,H,S,It],styles:[".mat-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}"],encapsulation:2}),n})(),Lt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez,_.BQ,u.eL,_.si,k.Q8,x.rt,_.BQ]}),n})()}}]);